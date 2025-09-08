"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
    title: "Luxurious Coastal Living",
    subtitle: "Bringing the beauty of the shore into your home.",
    number: "02",
  },
  {
    id: 3,
    image: "/projects3.avif",
    title: "Modern Elegance in Every Room",
    subtitle: "Redefining spaces with timeless style and innovation.",
    number: "03",
  },
];

function ProjectItem({ project, index, scrollYProgress, total }) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const start = index / total;
  const end = (index + 1) / total;

  const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);

  // Responsive final positions
  const finalPositions = isMobile
    ? [
        { x: 0, y: -200 }, // top group
        { x: 0, y: -200 },
        { x: 0, y: -200 },
        { x: 0, y: 200 }, // bottom group
        { x: 0, y: 200 },
        { x: 0, y: 200 },
      ]
    : [
        { x: -200, y: -200 }, // top-left
        { x: 0, y: -200 }, // top-center
        { x: 200, y: -200 }, // top-right
        { x: -200, y: 200 }, // bottom-left
        { x: 0, y: 200 }, // bottom-center
        { x: 200, y: 200 }, // bottom-right
      ];

  const x = useTransform(
    scrollYProgress,
    [start, end],
    ["0%", `${finalPositions[index].x}px`]
  );
  const yFinal = useTransform(
    scrollYProgress,
    [start, end],
    ["0%", `${finalPositions[index].y}px`]
  );

  const zIndex = total - index;

  return (
    <div className="mt-40">
      <motion.div
        key={project.id}
        style={{ x, y: yFinal }}
        className="absolute inset-0"
      >
        {/* Background Image */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        {/* Content */}
        <div
          style={{ zIndex }}
          className="absolute inset-0 flex flex-col gap-2 items-center justify-center text-center px-6"
        >
          <h6 className="mb-6 text-[16px] font-normal text-white leading-[22px]">
            {project.number}
          </h6>
          <h1
            className={`text-[40px] md:text-[64px] font-normal text-white
             leading-none md:leading-[64px] ${
               project.id == 1
                 ? "sm:max-w-2xl whitespace-nowrap"
                 : "sm:max-w-xl"
             }`}
          >
            {project.title}
          </h1>
          <p className="font-sans text-[16px] leading-[22px] font-normal text-white max-w-xl">
            {project.subtitle}
          </p>
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
            <Link
              href="#vision"
              className="cursor-pointer text-[16px] leading-[16px] bg-[#f8ede3] text-[#8D493A] px-[26px] py-[16px] rounded-[5px] 
                       font-semibold hover:bg-[#E6DCCA]"
            >
              View Projects
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="mt-40 relative h-[300vh] w-full">
      <div className="-mt-[550px] sticky top-0 h-screen overflow-hidden">
        {projects.map((project, i) => (
          <ProjectItem
            key={project.id}
            project={project}
            index={i}
            total={projects.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
