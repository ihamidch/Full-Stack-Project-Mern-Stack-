import dotenv from 'dotenv';
import connect from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env"
}); // Load environment variables from .env file

// Connect to the database
connect()
  .then(() => {
    // Start the server only after a successful DB connection
    let PORT = parseInt(process.env.PORT, 10) || 8001;

    const startServer = (port) => {
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          console.error(`Port ${port} is already in use. Trying another port...`);
          PORT++;
          if (PORT < 65536) {
            startServer(PORT);
          } else {
            console.error('No available ports.');
            process.exit(1);
          }
        } else {
          console.error(`Error: ${err}`);
        }
      });
    };

    startServer(PORT);
  })
  .catch((error) => {
    console.error("Error in connecting to DB:", error.message);
    process.exit(1); // Exit the process with a failure code
  });

// Handle server errors
app.on('error', (error) => {
  console.error("Error in starting the server:", error);
});

export default { connect };
