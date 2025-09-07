// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function Experties() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const textVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, delay: i * 0.18 },
//     }),
//   };

//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);

//   return (
//     <section ref={containerRef} className="mt-10 px-[16px] md:px-[50px]">
//       <div className="xl:space-y-6 md:space-y-7 space-y-[10px] xl:ml-auto xl:w-6/12 w-10/12">
//         <motion.h6
//           custom={0}
//           variants={textVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-sm leading-[16px] font-normal text-[#8D493A]"
//         >
//           • Our Expertise
//         </motion.h6>

//         <motion.h2
//           custom={1}
//           variants={textVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="
//             font-normal
//             text-[#8D493A]
//             tracking-[-0.03em]
//             leading-[1em]
//             text-left
//             text-[38px] sm:text-[50px] xl:text-[64px]
//           "
//         >
//           Selecting the ideal elements to elevate your space
//         </motion.h2>
//       </div>
//     </section>
//   );
// }
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "Custom Furniture Design",
    image: "/experies1.avif",
  },
  {
    id: 2,
    title: "Room Decoration & Styling",
    image: "/experies2.avif",
  },
  {
    id: 3,
    title: "Space Planning & Interior Layout",
    image: "/experies3.avif",
  },
  {
    id: 4,
    title: "Home Renovations & Remodeling",
    image: "/experies4.avif",
  },
  {
    id: 5,
    title: "Lighting Design",
    image: "/experies5.avif",
  },
  {
    id: 6,
    title: "Virtual Interior Design Consultations",
    image: "/experies6.avif",
  },
];

export default function Experties() {
  const [active, setActive] = useState(0);

  return (
    <section className="mt-10 px-4 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE IMAGES (hidden on mobile) */}
        <div className="mt-80 mb-32 hidden lg:block relative w-full h-[600px] overflow-hidden rounded-xl">
          <AnimatePresence mode="sync">
            {" "}
            {/* was "wait" before */}
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
        </div>

        {/* RIGHT SIDE LIST */}
        <div className="flex flex-col space-y-2">
          <span className="text-[#8D493A] text-[14px] leading-[16px] font-medium">
            • Our Expertise
          </span>
          <h2
            className="font-[Archivo] text-[#8D493A] font-normal 
          tracking-[-0.03em] leading-[1em] text-left text-[38px] sm:text-[50px] 
          xl:text-[64px] mb-6"
          >
            Selecting the ideal elements to elevate your space
          </h2>

          <ul className="space-y- 4 lg:my-40">
            {items.map((item, index) => (
              <motion.li
                key={item.id}
                onMouseEnter={() => setActive(index)}
                className={`cursor-pointer py-3 px-4 g border-b 
                  border-[#8D493A] transition-all ${
                    active === index ? "bg-[#8d493a] " : "hover:bg-[#8d493a]"
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
