import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  teamName: { type: String, required: true, unique: true },
  numberOfVotes: { type: Number, default: 0 }
});

const Team = mongoose.model("Team", teamSchema);
export default Team;
