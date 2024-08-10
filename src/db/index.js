import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv';
import express from "express";
const app = express();
dotenv.config(); // Load environment variables from .env file

const connect = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        console.log("Connecting to MongoDB with URI:", mongoUri); // Log the URI being used
        await mongoose.connect(`${mongoUri}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Successfully connected to MongoDB", mongoose.connection.host); // Log the host from mongoose.connection
        app.on('error', (error) => {
            console.log(error, "Error in starting the server");
            // throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port", process.env.PORT);
        });
    } 
    catch (error) {
        console.error("Error in connecting to the database:", error.message);
        process.exit(1); // Exit the process with an error code
    }
}

export default connect;
