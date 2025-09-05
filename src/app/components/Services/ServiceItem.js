"use client";

import { motion } from "framer-motion";

const ServiceItem = ({ children, active, handleHover }) => { // handleHover should be here
  return (
    <motion.div
      className={`text-xl md:text-2xl font-bold cursor-pointer transition-colors duration-200 ${
        active ? "text-gray-900" : "text-gray-400"
      }`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: active ? 1 : 0.5 }}
      onMouseEnter={() => handleHover(true)} // This is the line that will now work
      onMouseLeave={() => handleHover(false)} // And this one
    >
      {children}
    </motion.div>
  );
};

export default ServiceItem;