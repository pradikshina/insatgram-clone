import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { authEndpoints } from "../apis";

const {
  SIGNUP_API,
  LOGIN_API
} = authEndpoints;

export function signUp(signUpData, navigate, setLoading) {
  const signIn = async () => {
    try {
      setLoading(true);
      const response = await apiConnector("post", SIGNUP_API, signUpData);
      console.log("Signup response:", response);

      if (!response || !response.data || !response.data.success) {
        throw new Error("Signup failed or bad response format");
      }

      toast.success("Account Created Successfully");
      navigate("/");
      toast.success("Please login");
    } catch (error) {
      console.log("SIGNUP ERROR:", error);
      toast.error(error?.response?.data?.message || "Signup failed");
      navigate("/signup");
    } finally {
      setLoading(false);
    }
  };
  signIn();
}

export function logIn(loginData, navigate, setLoading) {
  const login = async () => {
    setLoading(true);
    try {
      const response = await apiConnector("post", LOGIN_API, loginData);
      console.log("Login response:", response);

      if (!response || !response.data || !response.data.token) {
        throw new Error("Login failed or missing token");
      }

      toast.success("Logged in Successfully");
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/feed");
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      toast.error(error?.response?.data?.message || "Login failed");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };
  login();
}

export function logout(navigate) {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  toast.success("Logged Out");
  navigate("/");
}
