"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Gallery2() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const images = [
    "/centerbottom.avif",
    "/centerbottom.avif",
    "/centerbottom.avif",
    "/centerbottom.avif",
    "/centerbottom.avif",
    "/centerbottom.avif",
  ];

  // Final positions: top 3 and bottom 3
  const positions = [
    { x: -160, y: -160 }, // top-left
    { x: 0, y: -160 }, // top-center
    { x: 160, y: -160 }, // top-right
    { x: -160, y: 160 }, // bottom-left
    { x: 0, y: 160 }, // bottom-center
    { x: 160, y: 160 }, // bottom-right
  ];

  // Initial stacked positions (slightly offset so they don't overlap completely)
  const initialStack = [
    { x: 0, y: -10 },
    { x: 0, y: -6 },
    { x: 0, y: -2 },
    { x: 0, y: 2 },
    { x: 0, y: 6 },
    { x: 0, y: 10 },
  ];

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden"
    >
      {/* Center Text */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="absolute text-4xl font-bold z-20 text-gray-800"
      >
        Explore the Gallery
      </motion.h1>

      {/* Images */}
      {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          className="absolute w-32 h-32 object-cover rounded-xl shadow-lg"
          initial={{
            x: initialStack[i].x,
            y: initialStack[i].y,
            opacity: 0,
            scale: 0.8,
            zIndex: 10 - i,
          }}
          animate={
            inView
              ? {
                  x: positions[i].x,
                  y: positions[i].y,
                  opacity: 1,
                  scale: 1,
                  zIndex: 10,
                }
              : {
                  x: initialStack[i].x,
                  y: initialStack[i].y,
                  opacity: 0,
                  scale: 0.8,
                  zIndex: 10 - i,
                }
          }
          transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 }}
        />
      ))}
    </section>
  );
}
