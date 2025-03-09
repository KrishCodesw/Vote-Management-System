import React from "react";
import { motion } from "framer-motion";

// Import images from the same folder
import tcetLogo from "./tcet.png";
import iicLogo from "./iic.png";
import edicLogo from "./edic.png";
import axiosLogo from "./axios.png";

const Navbar = () => {
  return (
    <motion.nav
      className="bg-black text-white p-4 flex justify-between items-center shadow-xl border-b border-gray-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left Side - Brand Name */}
      <motion.h1
        className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
        whileHover={{ scale: 1.1 }}
      >
        Startup Expo
      </motion.h1>

      {/* Right Side - Four Larger Logos */}
      <motion.div
        className="flex space-x-12" // More space between logos
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <img
          src={tcetLogo}
          alt="TCET Logo"
          className="w-24 h-24 object-contain"
        />
        <img
          src={iicLogo}
          alt="IIC Logo"
          className="w-24 h-24 object-contain"
        />
        <img
          src={edicLogo}
          alt="EDIC Logo"
          className="w-24 h-24 object-contain"
        />
        <img
          src={axiosLogo}
          alt="Axios Logo"
          className="w-24 h-24 object-contain"
        />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
