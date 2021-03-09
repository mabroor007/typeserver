import express, { Request, Response } from "express";

// Env
const PORT = process.env.PORT || 4000;

// Creating the app
const app = express();

// Routes
app.get("/hello", (_: Request, res: Response) => {
  res.status(200).json({ hello: "World" });
});

// Server starting
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
