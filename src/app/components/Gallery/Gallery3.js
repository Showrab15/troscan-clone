"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  { src: "/centerbottom.avif" },
  { src: "/centerbottom.avif" },
  { src: "/centerbottom.avif" },
  { src: "/centerbottom.avif" },
  { src: "/centerbottom.avif" },
  { src: "/centerbottom.avif" },
];

const STEP_IN = 0.3;
const STEP_OUT = 0.7;

export default function HeroSplitScroll() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Hardcoded target positions (example, responsive logic can be added separately)
  const targets = [
    { x: -400, y: -260 },
    { x: 0, y: -260 },
    { x: 400, y: -260 },
    { x: -400, y: 260 },
    { x: 0, y: 260 },
    { x: 400, y: 260 },
  ];

  // ✅ All useTransform calls at the top level
  const x0 = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [0, 0, targets[0].x, targets[0].x]
  );
  const y0 = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [0, 0, targets[0].y, targets[0].y]
  );

  const x1 = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [0, 0, targets[1].x, targets[1].x]
  );
  const y1 = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [0, 0, targets[1].y, targets[1].y]
  );

  const x2 = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [0, 0, targets[2].x, targets[2].x]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [0, 0, targets[2].y, targets[2].y]
  );

  const x3 = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [0, 0, targets[3].x, targets[3].x]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [0, 0, targets[3].y, targets[3].y]
  );

  const x4 = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [0, 0, targets[4].x, targets[4].x]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [0, 0, targets[4].y, targets[4].y]
  );

  const x5 = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [0, 0, targets[5].x, targets[5].x]
  );
  const y5 = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT, 1],
    [0, 0, targets[5].y, targets[5].y]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, STEP_IN, STEP_OUT],
    [1, 1, 0.97]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [STEP_OUT * 0.95, 1],
    [0, 1]
  );
  const textY = useTransform(scrollYProgress, [STEP_OUT, 1], [30, 0]);

  const positions = [
    { x: x0, y: y0 },
    { x: x1, y: y1 },
    { x: x2, y: y2 },
    { x: x3, y: y3 },
    { x: x4, y: y4 },
    { x: x5, y: y5 },
  ];

  return (
    <section ref={sectionRef} className="mb-10 relative h-[300vh] bg-[#f6efe8]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {cards.map((card, i) => (
            <motion.img
              key={i}
              src={card.src}
              alt={`card-${i}`}
              style={{ x: positions[i].x, y: positions[i].y, scale }}
              className="absolute w-[240px] md:w-[340px] rounded-2xl shadow-lg object-cover"
            />
          ))}

          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="absolute max-w-[900px] px-6 text-center"
          >
            <h2 className="text-3xl md:text-6xl font-semibold tracking-tight text-[#7b473a]">
              Transforming spaces with style, <br />
              through Troscán&apos;s exquisite <br />
              design expertise.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
