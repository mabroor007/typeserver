import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
import Photo from "./DB/entity/Photo";

// Env
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "localhost";

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
  createConnection({
    type: "postgres",
    host: HOST,
    port: 5432,
    username: "postgres",
    password: "pwd",
    database: "test",
    entities: [Photo],
    synchronize: true,
    logging: false,
  })
    .then(() => {
      // Server starting
      app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      });
    })
    .catch(() => {
      if (connectionAtempts > 5) return;
      connectionAtempts++;
      console.log("trying to connect again...");
      startServer();
    });
}

// Creating connection and then starting server
startServer();
