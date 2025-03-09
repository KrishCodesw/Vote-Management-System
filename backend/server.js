import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());  // <-- IMPORTANT: Enables JSON parsing
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/votingDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Vote Schema
const voteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  vote: { type: String, required: true },
});

const Vote = mongoose.model("Vote", voteSchema);

// ✅ Ensure API Endpoint Exists
app.post("/api/vote", async (req, res) => {
  console.log("Received vote request:", req.body);

  const { name, id, vote } = req.body;
  if (!name || !id || !vote) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const newVote = new Vote({ name, id, vote });
    await newVote.save();
    res.status(201).json({ message: "Vote counted successfully!" });
  } catch (error) {
    console.error("Error saving vote:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ Catch All Undefined Routes
app.use((req, res) => {
  res.status(404).json({ message: "API route not found!" });
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
