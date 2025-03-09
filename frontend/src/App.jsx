import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import VoteCard from "./components/VoteCard";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      {/* <UserInput /> */}
      <VoteCard />
    </>
  );
}

export default App;
