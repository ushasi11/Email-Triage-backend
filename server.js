import express from "express";
import cors from "cors";
import { classifyEmail } from "./classifier.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/classify", async (req, res) => {
  const { email } = req.body;

  try {
    const category = await classifyEmail(email);
    res.json({ category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});