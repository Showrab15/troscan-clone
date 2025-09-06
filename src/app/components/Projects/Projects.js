"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with mask */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/projects1.avif')",
          mask: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 100%)",
          WebkitMask:
            "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 100%)",
        }}
      />

      {/* Deep dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.85)]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-2 justify-center relative z-10 mx-auto px-6"
      >
        <h6
          className="mb-5 text-[16px] font-normal text-[#FFFFFF]
           leading-[22x]"
        >
          01
        </h6>
        <h1
          className="text-[40px] md:text-[64px] font-normal text-[#FFFFFF]
           md:leading-[64px] leading-none"
        >
          Serene Urban Retreat
        </h1>
        <p className="text-[16px] leading-[22px] font-normal text-[#FFFFFF]">
          Where modern comfort meets peaceful sophistication.
        </p>
        <div className="mt-6 md:flex-row flex flex-wrap gap-4 justify-center">
          <Link
            href="#vision"
            className="bg-[#f8ede3] text-[#8D493A] px-6 py-3 rounded-[5px] 
            font-medium hover:bg-[#E6DCCA]"
          >
            View Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
