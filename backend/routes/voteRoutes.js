import express from "express";
import Vote from "../models/Vote.js";
import Team from "../models/Team.js";

const router = express.Router();

// ✅ Vote Submission
// ✅ Vote Submission
router.post("/", async (req, res) => {
  const { name, id, vote } = req.body;

  try {
    // Validate input
    if (!name || !id || !vote) {
      return res.status(400).json({ message: "Missing required fields: name, id, and vote" });
    }

    // 🔹 Check if THIS user has already voted for ANY team
    const existingVote = await Vote.findOne({ name });

    if (existingVote) {
      return res.status(400).json({ message: `You have already voted for ${existingVote.vote}! You cannot vote again.` });
    }

    // 🔹 Save the new vote
    const newVote = new Vote({ name, id, vote });
    await newVote.save();

    // 🔹 Increment vote count for the team
    await Team.findOneAndUpdate(
      { teamName: vote },
      { $inc: { numberOfVotes: 1 } },
      { new: true }
    );

    res.status(200).json({ message: `Your vote for ${vote} has been counted!` });
  } catch (error) {
    res.status(500).json({ message: "Error submitting vote", error });
  }
});


// ✅ Get all teams with vote counts
router.get("/teams", async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: "Error fetching teams", error });
  }
});

export default router;
