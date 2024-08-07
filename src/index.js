// import mongoose from "mongoose";
// import express from "express";
// import dotenv from 'dotenv';
// import { DB_NAME } from "../src/constants.js";

// dotenv.config(); // Load environment variables from .env file

// const app = express();

// (async () => {
//   try {
//     const mongoUri = process.env.MONGO_URI;
//     console.log("Connecting to MongoDB with URI:", mongoUri); // Log the URI being used
//     await mongoose.connect(`${mongoUri}/${DB_NAME}`);
//     console.log("Successfully connected to MongoDB");
//     app.on('error', (error) => {
//       console.log(error, "Error in starting the server");
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log("Server is running on port", process.env.PORT);
//     });
//   } catch (error) {
//     console.error("Error in connecting to the database:", error.message);
//     process.exit(1); // Exit the process with an error code
//   }
// })();
// export default app;





import dotenv from 'dotenv';
import connect from "./db/index.js";
dotenv.config({
    path: "./.env"
}); // Load environment variables from .env file

//when ee use async to coonect db after completion it gives  it gives promise that we use here
connect()
.then(()=>
{
app.listen(process.env.PORT || 8000 ,  () => {
    console.log("Server is running on port", process.env.PORT);
});
app.on('error', (error) => {
    console.log(error, "Error in starting the server");
    throw error;
    throw error;
});
})
.catch((error)=>
{
    console.log("error in connecting to db");
})

