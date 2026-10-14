
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import dns from "node:dns";

import router from "./routes/userRoute.js";
import blogRoute from "./routes/blog.route.js";

dotenv.config();

const app = express();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const port = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// CORS configuration
const allowedOrigins = [
  "https://abhimernblogapp.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an Origin header, such as server-to-server calls
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error(`CORS blocked for origin: ${origin}`)
      );
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// MongoDB connection
const connectDB = async () => {
  try {
    if (!MONGO_URL) {
      throw new Error("MONGO_URL is missing from environment variables");
    }

    await mongoose.connect(MONGO_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error.message);
    process.exit(1);
  }
};

connectDB();

// API routes
app.use("/api/users", router);
app.use("/api/blogs", blogRoute);

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

// Basic health-check endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Blog API is running",
  });
});

// Start server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
