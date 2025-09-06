"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
    <nav className="fixed top-6 w-6/12 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`grid grid-cols-3 items-center pr-[10px] pl-[20px] py-[5px] rounded-md shadow-md transition-colors duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md" : "bg-[#f6eae0]"
        }`}
      >
        {/* Left: Logo */}
        <div>
          <Link href="/" className="text-[20px] font-bold text-[#5c2c20]">
            Troscán
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-6">
          <Link href="#about" className="font-semibold  hover:text-[#b85842] text-[#924B3B] text-[16px]">
            About
          </Link>
          <Link href="#projects" className="font-semibold hover:text-[#b85842] text-[#924B3B] text-[16px]">
            Projects
          </Link>
          <Link href="#news" className=" font-semibold hover:text-[#b85842] text-[#924B3B] text-[16px]">
            News
          </Link>
        </div>

        {/* Right: Contact Button + Mobile Menu */}
        <div className="flex justify-end items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:block bg-[#8d493a] text-[#F8EDE3] px-[26px] py-[10px] 
            rounded-[5px] hover:bg-[#B85842] transition text-[16px] font-[600px]"
          >
            Contact us
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-[#5c2c20]"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute mt-2 right-0 bg-white shadow-lg px-6 py-4 space-y-4 rounded-xl">
          <Link href="#about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="#news" onClick={() => setIsOpen(false)}>
            News
          </Link>
          <Link
            href="#contact"
            className="block bg-[#8d493a] text-white px-5 py-2 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
}
