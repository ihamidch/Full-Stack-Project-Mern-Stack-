import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

app.use(express.json()); // to parse JSON data from the request body
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded form data
app.use(cookieParser()); // to parse cookies  from the incoming request headers

// Routes import
import userRoutes from "./routes/user.routes.js";

// Use the routes
app.use("/api/v1/users", userRoutes);

export { app };
