import React from "react";

const UserInput = ({ name, setName }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-r from-purple-400 via-blue-300 to-purple-400 text-white shadow-lg">
      <h2 className="text-2xl font-bold bg-black text-transparent bg-clip-text mb-4">
        Enter Your Name
      </h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 w-64 text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
};

export default UserInput;
