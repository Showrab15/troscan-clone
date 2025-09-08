"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const items = [
  { id: 1, title: "Custom Furniture Design", image: "/experies1.avif" },
  { id: 2, title: "Room Decoration & Styling", image: "/experies2.avif" },
  {
    id: 3,
    title: "Space Planning & Interior Layout",
    image: "/experies3.avif",
  },
  { id: 4, title: "Home Renovations & Remodeling", image: "/experies4.avif" },
  { id: 5, title: "Lighting Design", image: "/experies5.avif" },
  {
    id: 6,
    title: "Virtual Interior Design Consultations",
    image: "/experies6.avif",
  },
];

export default function Experties() {
  const [active, setActive] = useState(0);

  // Variants for text scroll animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15 },
    }),
  };

  // Variants for the left image container entrance from bottom
  const imageContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <section className="mt-10 px-4 md:px-12">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE IMAGE CONTAINER (animated from bottom) */}
        <motion.div
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-80 mb-32 hidden xl:block relative w-full h-[600px] overflow-hidden rounded-xl"
        >
          <AnimatePresence mode="sync">
            <motion.img
              key={items[active].id}
              src={items[active].image}
              alt={items[active].title}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-20%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </AnimatePresence>
        </motion.div>

        {/* RIGHT SIDE LIST */}
        <div className="mt-20 flex flex-col space-y-2">
          <motion.span
            custom={0}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#8D493A] text-[14px] leading-[16px] font-medium"
          >
            • Our Expertise
          </motion.span>

          <motion.h2
            custom={1}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-[600px] font-[Archivo] text-[#8D493A] font-normal 
          tracking-[-0.03em] leading-[1em] text-left text-[38px] sm:text-[50px] 
          xl:text-[64px] mb-6"
          >
            Selecting the ideal elements to elevate your space
          </motion.h2>

          <ul className=" xl:my-40">
            {items.map((item, index) => (
              <motion.li
                key={item.id}
                onMouseEnter={() => setActive(index)}
                className={`cursor-pointer py-3 px-4 border-b 
                  border-[#8D493A] transition-all ${
                    active === index ? "bg-[#8d493a]" : "hover:bg-[#8d493a]"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={` font-normal ${
                      active === index ? "text-[#F8EDE3]" : "text-[#8D493A]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-[#8D493A] text-[20px] xl:text-[28px] font-normal xl:leading-[33px] ${
                      active === index
                        ? "text-[#F8EDE3]  decoration-[#8D493A] underline-offset-4"
                        : ""
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
