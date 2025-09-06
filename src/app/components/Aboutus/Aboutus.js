"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import AnimatedGallery from "../Gallery/Gallery";

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

  return (
    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-32 px-[16px] md:px-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-10 gap-[10px] items-center">
        {/* Left Content */}
        <div className="xl:space-y-6 md:space-y-7 space-y-[10px]">
          <motion.p
            custom={0}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm leading-[16px] font-normal  text-[#8D493A]"
          >
            • About us
          </motion.p>

          <motion.h2
            custom={1}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" text-[38px] md:text-[50px] xl:text-[64px] leading-[1em] tracking-[-0.03em] text-left  font-normal text-[#8D493A] xl:leading-[64px]"
          >
            Where Spaces Inspire, and Design Comes Alive
          </motion.h2>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="xl:mt-20 text-[16px]  font-normal text-[#8D493A] leading-[22px]"
          >
            At Troscán, we believe that every space has a story to tell. As a
            premier furniture design and room decorating agency.
          </motion.p>

          <motion.p
            custom={3}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[16px]  font-normal text-[#8D493A] leading-[22px]"
          >
            Our expert team blends timeless craftsmanship with innovative
            designs, ensuring each piece and layout reflects your unique taste
            and lifestyle. Whether you&apos;re looking to reimagine your living
            room.
          </motion.p>

          <motion.button
            custom={4}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[14px] bg-[#8b4b3b] text-[#F8EDE3] px-6 py-3 rounded-[5px]
             font-medium hover:bg-[#723b2d] transition"
          >
            More About us
          </motion.button>
        </div>

        {/* Right Image: fixed frame + inner image that animates */}
        <div className="rounded-xl overflow-hidden sha dow-lg">
          {/* This element is the fixed frame — size it as you like */}
          <div
            ref={imageRef}
            className="relative w-full h-[420px] md:h-[520px] lg:h-[560px] overflow-hidden"
            aria-hidden={false}
          >
            {/* motion.div is the inner content that scales/translates.
                Only this element transforms — the outer container and layout remain unchanged. */}
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
      <AnimatedGallery />
    </section>
  );
}
