"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: -10, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=" fixed top-6 w-11/12 sm:w-10/12 xl:w-6/12 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div
        animate={{
          height: isOpen ? "auto" : "auto", // auto + minHeight diye control
          minHeight: isOpen ? 250 : 56, // closed = small navbar, open = expand
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`grid grid-cols-3 items-center lg:pr-[8px] pr-[4px] pl-[20px] py-[7px] 
        rounded-md shadow-md transition-colors duration-300 overflow-hidden
        ${scrolled ? "bg-white/90 backdrop-blur-md" : "bg-[#f6eae0]"}`}
      >
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-[20px] font-bold text-[#8D493A]">
            Troscán
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center gap-6">
          <Link
            href="#about"
            className="font-semibold hover:text-[#b85842] text-[#924B3B] text-[16px] leading-[16px]"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="font-semibold hover:text-[#b85842] text-[#924B3B] text-[16px] leading-[16px]"
          >
            Projects
          </Link>
          <Link
            href="#news"
            className="font-semibold hover:text-[#b85842] text-[#924B3B] text-[16px] leading-[16px]"
          >
            News
          </Link>
        </div>

        {/* Right: Contact Button + Mobile Menu */}
        <div className="flex justify-end items-center gap-4">
          <Link
            href="#contact"
            className="hidden lg:block bg-[#8d493a] text-[#F8EDE3] px-[26px] py-[10px] 
            rounded-[5px] hover:bg-[#B85842] transition text-[16px] font-[600px]"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto lg:hidden flex flex-col justify-center items-center w-10 h-9 bg-[#8D493A] rounded-[3px] cursor-pointer relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* First Line */}
          <span
            className={`absolute w-6 h-[3px] bg-[#F8EDE3] rounded-[35%/500%] transition-transform duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-[6px]"
            }`}
          ></span>

          {/* Second Line */}
          <span
            className={`absolute w-6 h-[3px] bg-[#F8EDE3] rounded-[35%/500%] transition-transform duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-[6px]"
            }`}
          ></span>
        </button>

        {/* Mobile Menu Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pb-10 sm:pb-6 col-span-3 flex flex-col items-center justify-center gap-4 mt-6 lg:hidden"
            >
              <Link
                href="#about"
                className="text-[#924B3B] text-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-[#924B3B] text-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#news"
                className="text-[#924B3B] text-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                News
              </Link>
              <Link
                href="#contact"
                className="bg-[#8d493a] text-white px-6 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}
