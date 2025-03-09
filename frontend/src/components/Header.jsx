import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="bg-black text-white text-center py-12 px-6 shadow-lg border-b border-gray-800"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <motion.h2
        className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
        whileHover={{ scale: 1.2, duration: 3 }}
      >
        Vote for the best Innovation !
      </motion.h2>
      <motion.p
        className="text-gray-400 mt-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Cast your vote for your favorite team.
      </motion.p>
    </motion.header>
  );
};

export default Header;
