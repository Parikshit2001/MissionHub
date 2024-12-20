import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// Health Check Route
app.get("/", (_, res) => {
  res.send("Health check successfull");
});

export { app };
