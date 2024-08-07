import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import e from "express";
const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }
))
app.use(express.json({limit: '20mb'}));//to parse json data from request body
app.use(express.urlencoded({extended: true, limit: '20mb'}));//to parse form data url encoded data
app.use(express.static('public'));//to serve static files like images
app.use(cookieParser());//to parse cookies from request headers like req.cookies to get cookies




export {app}