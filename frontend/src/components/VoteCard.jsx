import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import UserInput from "./UserInput"; // Import UserInput

const VoteCard = () => {
  const [teams, setTeams] = useState([]);
  const [name, setName] = useState(""); // Store user's name
  const [voteCounts, setVoteCounts] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/teams");
        const data = await response.json();
        setTeams(data);
        setVoteCounts(
          data.map((team) => ({ id: team._id, voteCount: team.numberOfVotes }))
        );
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };
    fetchTeams();
  }, []);

  const handleVote = async (teamId) => {
    if (!name.trim()) {
      alert("Please enter your name to vote!");
      return;
    }

    const selectedTeam = teams.find((team) => team._id === teamId);
    if (!selectedTeam) {
      alert("Invalid team selection!");
      return;
    }

    const payload = {
      name: name.trim(),
      id: teamId,
      vote: selectedTeam.teamName,
    };

    console.log("Sending vote payload:", payload); // Debugging

    try {
      const response = await fetch("http://localhost:5000/api/vote", {
        // FIXED ENDPOINT
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Server response:", data); // Debugging

      if (response.ok) {
        alert(
          `Thank you, ${name}! Your vote for ${selectedTeam.teamName} has been counted.`
        );
      } else {
        alert(data.message || "Error submitting vote.");
      }
    } catch (error) {
      console.error("Error submitting vote:", error);
      alert("Error submitting vote.");
    }
  };

  return (
    <div>
      <UserInput name={name} setName={setName} />{" "}
      {/* User enters name at the top */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-r from-purple-400 via-blue-300 to-purple-400 p-6">
        {teams.map((team) => (
          <motion.div
            key={team._id}
            className="bg-black text-white p-6 rounded-lg shadow-lg border-2 border-transparent transition-all duration-300"
            whileHover={{
              scale: 1.05,
              borderColor: "#ffffff",
              boxShadow: "0 0 70px rgba(139, 92, 246, 0.7)",
            }}
          >
            <h1>Team Description</h1>
            <h2 className="text-xl font-bold">{team.teamName}</h2>
            <p className="text-gray-400">{team.description}</p>
            <button
              onClick={() => handleVote(team._id)}
              className="mt-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              Vote
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VoteCard;
