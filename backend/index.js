const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileupload = require("express-fileupload");

require("dotenv").config();

const app = express();

// ✅ CORS configuration (allow both local dev and deployed frontend)
app.use(cors({
    origin: ["http://localhost:3000", "https://insta-clone-mern.vercel.app"],
    methods: ["GET", "POST", "PUT"],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

// 🔌 Connect database
require("./config/database").connectDb();

// 📁 File upload middleware
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// ☁️ Connect to Cloudinary
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// ✅ Base route
app.get("/", (req, res) => {
    res.send("Hello Jee");
});

// 🔗 Route handlers
const user = require("./routes/user");
app.use("/api/v1", user);

// 🚀 Start server
app.listen(PORT, () => {
    console.log(`App is running on the port ${PORT}`);
});
