"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Banner() {
  // Variants for heading container
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // gap between each word animation
      },
    },
  };

  // Variants for each word
  // Variants for each word
  const word = {
    hidden: {
      opacity: 0,
      x: -10, // smaller horizontal shift
      y: -60, // more vertical offset (from top)
      WebkitTextStroke: "5px #ffffff", // stroke while hidden
      color: "transparent", // hide fill
      filter: "blur(20px)", // glowing blurry look
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      WebkitTextStroke: "0px transparent", // remove stroke
      color: "#ffffff", // final fill
      filter: "blur(0px)", // clean text
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const headingText = "Timeless Comfort & Endless Luxury";

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div
        className=" absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Banner.jpg')",
        }}
      />

      {/* Deep dark overlay + gradient mask */}
      <div
        className="opacity-70 absolute inset-0 bg-gradient-to-b from-transparent
       to-[#f8c67b]"
      />
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        {/* Heading with word-by-word animation */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-[40px] sm:text-[46px] md:text-[72px] xl:text-[96px] font-normal text-white
                     xl:leading-[96px] sm:leading-[1em] leading-none flex flex-wrap justify-center gap-x-2"
        >
          {headingText.split(" ").map((wordText, i) => (
            <motion.span
              key={i}
              variants={word}
              className="inline-block will-change-transform"
            >
              {wordText}
            </motion.span>
          ))}
        </motion.h1>

        {/* Buttons (keep same animation) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }} // appear after heading
          className="mt-4 md:flex-row flex flex-col md:flex-wrap gap-2 justify-center"
        >
          <Link
            href="#vision"
            className="text-[16px] leading-[16px] bg-[#f8ede3] text-[#8D493A] px-[26px] py-[16px] rounded-[5px] 
                       font-semibold hover:bg-[#E6DCCA]"
          >
            Our Vision
          </Link>

          <Link
            href="#expertise"
            className="border border-[#f8ede3] text-[#f8ede3] px-[26px] py-[16px] rounded-[5px] 
                       font-semibold hover:bg-[#f8ede3] hover:text-[#8D493A] text-[16px] leading-[16px]"
          >
            Explore Expertise
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
