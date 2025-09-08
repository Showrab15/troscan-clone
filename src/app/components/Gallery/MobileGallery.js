"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const cards = [
  { src: "/lefttop.avif" },
  { src: "/centertop.avif" },
  { src: "/righttop.avif" },
  { src: "/leftbottom.avif" },
  { src: "/centerbottom.avif" },
  { src: "/rightbottom.avif" },
];

const STEP_IN = 0.3;
const STEP_OUT = 0.7;

const initialPositions = [
  { x: -100, y: -50 },
  { x: -200, y: -40 },
  { x: 100, y: -40 },
  { x: -60, y: 60 },
  { x: 0, y: 50 },
  { x: 80, y: 40 },
];

// Animation for Big screen
const desktopTargets = [
  { x: -400, y: -260 }, // top left
  { x: 0, y: -200 }, // top center
  { x: 400, y: -60 }, // top right
  { x: -400, y: 50 }, // bottom left
  { x: 0, y: 260 }, // bottom center
  { x: 400, y: 260 }, // bottom right
];

// Animation for Mobile screen
const mobileTargets = [
  { x: -100, y: -200 }, // top row left
  { x: 0, y: -100 }, // top row center
  { x: 100, y: -200 }, // top row right
  { x: -100, y: 120 }, // bottom row left
  { x: 0, y: 220 }, // bottom row center
  { x: 100, y: 120 }, // bottom row right
];

// Animation for Medium screen
const tabletTargets = [
  { x: -200, y: -200 }, // top left
  { x: 0, y: -120 }, // top center
  { x: 200, y: -200 }, // top right
  { x: -200, y: 120 }, // bottom left
  { x: 10, y: 150 }, // bottom center
  { x: 220, y: 120 }, // bottom right
];

function Card({ src, index, scrollYProgress, targets, isMobile }) {
  const x = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [
      initialPositions[index].x,
      initialPositions[index].x,
      targets[index].x,
      targets[index].x,
    ]
  );

  const y = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [
      initialPositions[index].y,
      initialPositions[index].y,
      targets[index].y,
      targets[index].y,
    ]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT],
    [1, 1, 0.97]
  );

  return (
    <motion.img
      src={src}
      alt={`card-${index}`}
      style={{ x, y, scale }}
      className={`absolute rounded-lg shadow-lg object-cover ${
        isMobile ? "w-[140px] h-[100px]" : "w-[240px] h-[180px]"
      } sm:w-[180px] sm:h-[135px] md:w-[200px] md:h-[150px] lg:w-[240px] lg:h-[280px]`}
    />
  );
}

export default function Gallery() {
  const sectionRef = useRef(null);
  const [screenSize, setScreenSize] = useState("desktop");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTargets = () => {
    switch (screenSize) {
      case "mobile":
        return mobileTargets;
      case "tablet":
        return tabletTargets;
      default:
        return desktopTargets;
    }
  };

  const textOpacity = useTransform(
    scrollYProgress,
    [STEP_OUT * 0.95, 1],
    [0, 1]
  );
  const textY = useTransform(scrollYProgress, [STEP_OUT, 1], [20, 0]);

  return (
    <section ref={sectionRef} className="mb-10 relative h-[300vh] bg-[#f8ede3]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {cards.map((card, i) => (
            <Card
              key={i}
              src={card.src}
              index={i}
              scrollYProgress={scrollYProgress}
              targets={getTargets()}
              isMobile={screenSize === "mobile"}
            />
          ))}

          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="absolute max-w-[600px] px-6 text-center z-10"
          >
            <h2
              className="text-[20px] sm:text-[28px]  xl:text-[40px] xl:leading-[48px]
              leading-tight sm:leading-[28px] font-normal tracking-tight text-[#7b473a]"
            >
              Transforming spaces with style, through {`Troscán's`} exquisite
              design expertise.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
