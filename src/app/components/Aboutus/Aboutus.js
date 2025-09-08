"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Aboutus() {
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.18 },
    }),
  };

  // ref for the visible image area (the fixed frame)
  const imageRef = useRef(null);

  // scroll progress for that element (start when top enters viewport, end when bottom leaves)
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  // map the progress -> scale (1 -> 0.92 -> 1)
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  // optional small Y translation so the image feels a little parallax while zooming
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);

  const titleTextVariantsWithStroke = {
    hidden: {
      opacity: 0,
      x: 0,
      y: -80,
      WebkitTextStroke: "1px #8D493A", // subtle stroke
      color: "transparent",
      filter: "blur(0px)",
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      y: 0,
      WebkitTextStroke: "0px transparent",
      color: "#8D493A",
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: custom * 0.15, // stagger effect
      },
    }),
  };

  const contentTextVariantsWithStroke = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 20,
      WebkitTextStroke: "1px #8D493A", // subtle stroke
      color: "transparent",
      filter: "blur(0px)",
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      y: 0,
      WebkitTextStroke: "0px transparent",
      color: "#8D493A",
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: custom * 0.15, // stagger effect
      },
    }),
  };
  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20, // bottom-to-top animation
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: custom * 0.15,
      },
    }),
  };

  return (
    <section className=" py-32 px-[16px] md:px-10">
      <div className="grid grid-cols-1 xl:grid-cols-2  gap-[30px] xl:gap-[10px] items-center">
        {/* Left Content */}
        <div className="xl:space-y-[20px] sm:space-y-[10px] space-y-[8px]">
          {/* About us bullet */}
          <motion.p
            custom={0}
            variants={titleTextVariantsWithStroke}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm leading-[16px] font-normal text-[#8D493A] will-change-transform"
          >
            • About us
          </motion.p>

          {/* Heading with stroke/blur animation */}
          <motion.h2
            custom={1}
            variants={titleTextVariantsWithStroke}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[38px] md:text-[50px] xl:text-[64px] leading-[1em]
               tracking-[-0.03em] text-left font-normal text-[#8D493A] xl:leading-[64px]
               will-change-transform"
          >
            Where Spaces Inspire, <br className="responsive-br" /> and Design
            Comes Alive
          </motion.h2>

          {/* Paragraph 1 */}
          <motion.p
            variants={contentTextVariantsWithStroke}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-[550px] text-[16px] font-normal text-[#8D493A] leading-[22px] will-change-transform xl:mt-20"
          >
            At Troscán, we believe that every space has a story to tell. As a
            premier furniture design and room decorating agency.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={contentTextVariantsWithStroke}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-[550px] text-[16px] font-normal text-[#8D493A] leading-[22px] will-change-transform"
          >
            Our expert team blends timeless craftsmanship with innovative
            designs, ensuring each piece and layout reflects your unique taste
            and lifestyle. Whether {`you're`} looking to reimagine your living
            room.
          </motion.p>

          {/* Button */}
          <motion.button
            variants={buttonVariants}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-sans  cursor-pointer text-[16px] bg-[#8b4b3b] text-[#F8EDE3] 
            px-6 py-3 rounded-[5px] font-semibold hover:bg-[#B85842] transition will-change-transform"
          >
            {" "}
            More About us{" "}
          </motion.button>
        </div>

        {/* Right Image: fixed frame + inner image that animates */}
        <div className="rounded-xl overflow-hidden sha dow-lg">
          {/* This element is the fixed frame — size it as you like */}
          <div
            ref={imageRef}
            className="relative w-full h-[420px] sm:h-[520px] md:h-[560px] overflow-hidden"
            aria-hidden={false}
          >
            {/* motion.div is the inner content that scales/translates. Only this element transforms — the outer container and layout remain unchanged. */}
            <motion.div
              style={{
                scale,
                y,
                transformOrigin: "center center",
                willChange: "transform",
              }}
              className="absolute -inset-4"
            >
              {/* Next Image set to fill the parent so scaling happens inside the frame */}
              <Image
                src="/aboutus.avif"
                alt="Living Room Design"
                fill
                style={{ objectFit: "cover", objectPosition: "center center" }}
                priority={false}
                className="rounded-[5px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* <Gallery2 /> */}
      {/* <Gallery3 /> */}
    </section>
  );
}
