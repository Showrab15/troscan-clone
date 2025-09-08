"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

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

  // Track scroll only inside this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Spread distances (responsive)
  const { spreadX, spreadY } = useMemo(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return { spreadX: 150, spreadY: 120 };
    }
    return { spreadX: 400, spreadY: 260 };
  }, []);

  // Final positions
  const targets = useMemo(
    () => [
      { x: -spreadX, y: -spreadY },
      { x: 0, y: -spreadY },
      { x: spreadX, y: -spreadY },
      { x: -spreadX, y: spreadY },
      { x: 0, y: spreadY },
      { x: spreadX, y: spreadY },
    ],
    [spreadX, spreadY]
  );

  // Text reveal
  const textOpacity = useTransform(
    scrollYProgress,
    [STEP_OUT * 0.95, 1],
    [0, 1]
  );
  const textY = useTransform(scrollYProgress, [STEP_OUT, 1], [30, 0]);

  return (
    <section ref={sectionRef} className="mb-10 relative h-[300vh] bg-[#f6efe8]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Images */}
          {cards.map((card, i) => {
            const x = useTransform(
              scrollYProgress,
              [0, STEP_IN, STEP_OUT, 1],
              [0, 0, targets[i].x, targets[i].x]
            );
            const y = useTransform(
              scrollYProgress,
              [0, STEP_IN, STEP_OUT, 1],
              [0, 0, targets[i].y, targets[i].y]
            );
            const scale = useTransform(
              scrollYProgress,
              [0, STEP_IN, STEP_OUT],
              [1, 1, 0.97]
            );

            return (
              <motion.img
                key={i}
                src={card.src}
                alt={card.alt ?? card - `${i}`}
                style={{ x, y, scale }}
                className="absolute w-[240px] md:w-[340px] rounded-2xl shadow-lg object-cover"
              />
            );
          })}

          {/* Text appears after split */}
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
