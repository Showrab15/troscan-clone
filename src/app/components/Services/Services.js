"use client";

import { motion } from "framer-motion";

const expertiseItems = [
  "Custom Furniture Design",
  "Room Decoration & Styling",
  "Space Planning & Interior Layout",
  "Home Renovations & Remodeling",
  "Lighting Design",
  "Virtual Interior Design Consultations",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } },
};

export default function Services() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center"
      >
        Our Expertise
        <br />
        <span className="font-normal text-lg md:text-xl mt-2 block">
          Selecting the ideal elements to elevate your space
        </span>
      </motion.h2>

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-gray-700 text-lg md:text-xl"
      >
        {expertiseItems.map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="before:content-['•'] before:text-primary-600 before:mr-3"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
