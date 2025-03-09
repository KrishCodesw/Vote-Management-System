import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
  name: { type: String,  },
  id: { type: String, unique: false },
  vote: { type: String }
});

const Vote = mongoose.model("Vote", voteSchema);
export default Vote;
