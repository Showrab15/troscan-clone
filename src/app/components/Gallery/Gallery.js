"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const galleryImages = [
    {
      id: 1,
      src: "/lefttop.avif",
      alt: "Modern living room with dark furniture",
      position: "left-top",
    },
    {
      id: 2,
      src: "/leftbottom.avif",
      alt: "Luxury sofa interior",
      position: "left-bottom",
    },
    {
      id: 3,
      src: "/centertop.avif",
      alt: "Elegant bedroom design",
      position: "center-top",
    },
    {
      id: 4,
      src: "/centerbottom.avif",
      alt: "Modern kitchen interior",
      position: "center-bottom",
    },
    {
      id: 5,
      src: "/righttop.avif",
      alt: "Luxury dark furniture",
      position: "right-top",
    },
    {
      id: 6,
      src: "/rightbottom.avif",
      alt: "Wooden room decoration",
      position: "right-bottom",
    },
  ];

  // Animation values for different positions
  const leftTopX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.2],
    [0, -300, -400]
  );
  const leftTopY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.2],
    [0, -150, -100]
  );

  const leftBottomX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.2],
    [0, -300, -400]
  );
  const leftBottomY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.2],
    [0, 150, 300]
  );

  const centerTopY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.2],
    [0, -200, -200]
  );

  const centerBottomY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 600, 500]
  );

  const rightTopX = useTransform(scrollYProgress, [0, 0.2, 0.2], [0, 300, 400]);
  const rightTopY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.2],
    [0, -150, -100]
  );

  const rightBottomX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.2],
    [0, 300, 400]
  );
  const rightBottomY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.2],
    [0, 300, 300]
  );

  // Text animation
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.2, 0.2],
    [0, 0, 2, 2]
  );

  const textScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 0.8, 1, 1]
  );

  const getImageAnimation = (position) => {
    switch (position) {
      case "left-top":
        return { x: leftTopX, y: leftTopY };
      case "left-bottom":
        return { x: leftBottomX, y: leftBottomY };
      case "center-top":
        return { x: 0, y: centerTopY };
      case "center-bottom":
        return { x: 0, y: centerBottomY };
      case "right-top":
        return { x: rightTopX, y: rightTopY };
      case "right-bottom":
        return { x: rightBottomX, y: rightBottomY };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <section
      ref={containerRef}
      className="mt-20 relative min-h-[400vh] overflow-hidden"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Animated Images */}
          {galleryImages.map((image, index) => {
            const animation = getImageAnimation(image.position);
            return (
              <motion.div
                key={image.id}
                style={{
                  x: animation.x,
                  y: animation.y,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute w-64 h-80 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            );
          })}

          {/* Center Text Content */}
          <motion.div
            style={{
              opacity: textOpacity,
              scale: textScale,
            }}
            className="absolute z-20 text-center px-8 max-w-2xl"
          >
            <motion.h2
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 40, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-[40px] font-normal text-center leading-[48px] text-[#8D493A]"
              style={{
                fontFamily: 'Archivo, "Archivo Placeholder", sans-serif',
              }}
            >
              Transforming spaces with style, through {`Troscán's`} exquisite
              design expertise.
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedGallery;
