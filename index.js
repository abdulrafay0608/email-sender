import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { EmialSenderController } from "./controllers/emailsender.controllers.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.get("/", (_, res) => {
  res.send("Welcome to the Abdul Rafay Portfolio Backend!");
});
app.post("/api/v1/send-email", EmialSenderController);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
