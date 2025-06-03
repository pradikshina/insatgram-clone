import axios from "axios";

axios.defaults.withCredentials = true;

const BASE_URL = process.env.REACT_APP_API_URL;

if (!BASE_URL) {
  console.error("❌ BASE_URL is undefined! Check .env and restart React.");
}

export const axiosInstance = axios.create({});

export const apiConnector = (method, endpoint, bodyData, headers = {}, params = {}) => {
  const fullUrl = `${BASE_URL}${endpoint}`;

  if (!fullUrl.startsWith("http")) {
    console.error("❌ Invalid full URL being called:", fullUrl);
    throw new Error("Invalid URL in apiConnector");
  }

  console.log("✅ Final Axios URL:", fullUrl);

  return axiosInstance({
    method,
    url: fullUrl,
    data: bodyData || null,
    headers,
    params,
  });
};
