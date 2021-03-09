import express, { Request, Response } from "express";
import { createConnection } from "typeorm";

// Env
const PORT = process.env.PORT || 4000;

// Creating the app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/hello", (_: Request, res: Response) => {
  res.status(200).json({ hello: "World" });
});

// Retry logic for database
let connectionAtempts = 0;
function startServer() {
  createConnection()
    .then(() => {
      // Server starting
      app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      });
    })
    .catch(() => {
      if (connectionAtempts > 5) return;
      connectionAtempts++;
      startServer();
    });
}

// Creating connection and then starting server
startServer();
