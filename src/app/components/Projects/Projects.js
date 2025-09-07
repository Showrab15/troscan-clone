"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    image: "/projects1.avif",
    title: "Serene Urban Retreat",
    subtitle: "Where modern comfort meets peaceful sophistication.",
    number: "01",
  },
  {
    id: 2,
    image: "/projects2.avif",
    title: "Modern Architectural Haven",
    subtitle: "A blend of innovation and timeless design.",
    number: "02",
  },
  {
    id: 3,
    image: "/projects3.avif",
    title: "Eco-Friendly Living",
    subtitle: "Sustainability meets elegant lifestyle.",
    number: "03",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full">
      <div className="-mt-[550px] sticky top-0 h-screen overflow-hidden">
        {projects.map((project, i) => {
          // প্রতিটা image এর scroll progress range আলাদা হবে
          const start = i / projects.length;
          const end = (i + 1) / projects.length;
          const y = useTransform(
            scrollYProgress,
            [start, end],
            ["100%", "0%"] // নিচ থেকে উঠে আসবে
          );

          // Content এর জন্য z-index control - যে image সবচেয়ে কম y position এ আছে তার content সবার উপরে থাকবে
          const zIndex = projects.length - 3;

          return (
            <motion.div
              key={project.id}
              style={{ y }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

              {/* Content - এখন শুধু z-index দিয়ে control */}
              <div
                style={{ zIndex: zIndex }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
              >
                <h6 className="mb-4 text-[16px] font-normal text-white leading-[22px]">
                  {project.number}
                </h6>
                <h1 className="text-[40px] md:text-[64px] font-normal text-white leading-none md:leading-[64px]">
                  {project.title}
                </h1>
                <p className="text-[16px] leading-[22px] font-normal text-white max-w-xl">
                  {project.subtitle}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <Link
                    href="#vision"
                    className="bg-[#f8ede3] text-[#8D493A] px-6 py-3 rounded-[5px] font-medium hover:bg-[#E6DCCA]"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
