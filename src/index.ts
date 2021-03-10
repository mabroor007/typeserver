import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
import Photo from "./DB/entity/Photo";

// Env
const PORT = process.env.PORT || 4000;
const DBHOST = process.env.DBHOST || "localhost";
const DBPASSWORD = process.env.DBPASSWORD || "pwd";
const DBUSER = process.env.DBUSER || "postgres";
const DB = process.env.DB || "test";
const DBPORT = process.env.DBPORT || 5432;

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
    host: DBHOST,
    port: Number(DBPORT),
    username: DBUSER,
    password: DBPASSWORD,
    database: DB,
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
      console.log("Trying to connect again...");
      setTimeout(startServer, 2000);
    });
}

// Creating connection and then starting server
startServer();
