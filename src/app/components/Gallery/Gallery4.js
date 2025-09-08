// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const cards = [
//   { src: "/lefttop.avif" },
//   { src: "/centertop.avif" },
//   { src: "/righttop.avif" },
//   { src: "/leftbottom.avif" },
//   { src: "/centerbottom.avif" },
//   { src: "/rightbottom.avif" },
// ];

// const STEP_IN = 0.3;
// const STEP_OUT = 0.7;

// // Initial positions to mimic Framer stacked layout
// const initialPositions = [
//   { x: -100, y: -50 },
//   { x: -200, y: -40 },
//   { x: 100, y: -40 },
//   { x: -60, y: 60 },
//   { x: 0, y: 50 },
//   { x: 80, y: 40 },
// ];

// const targets = [
//   { x: -400, y: -260 },
//   { x: 0, y: -200 },
//   { x: 400, y: -60 },
//   { x: -400, y: 50 },
//   { x: 0, y: 260 },
//   { x: 400, y: 260 },
// ];

// export default function Gallery4() {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   const positions = targets.map((target, i) => ({
//     x: useTransform(
//       scrollYProgress,
//       [0, STEP_IN, STEP_OUT, 1],
//       [initialPositions[i].x, initialPositions[i].x, target.x, target.x]
//     ),
//     y: useTransform(
//       scrollYProgress,
//       [0, STEP_IN, STEP_OUT, 1],
//       [initialPositions[i].y, initialPositions[i].y, target.y, target.y]
//     ),
//   }));

//   const scale = useTransform(
//     scrollYProgress,
//     [0, STEP_IN, STEP_OUT],
//     [1, 1, 0.97]
//   );
//   const textOpacity = useTransform(
//     scrollYProgress,
//     [STEP_OUT * 0.95, 1],
//     [0, 1]
//   );
//   const textY = useTransform(scrollYProgress, [STEP_OUT, 1], [20, 0]);

//   return (
//     <section ref={sectionRef} className="mb-10 relative h-[300vh] bg-[#f8ede3]">
//       <div className="sticky top-0 h-screen flex items-center justify-center">
//         <div className="relative w-full h-full flex items-center justify-center">
//           {cards.map((card, i) => (
//             <motion.img
//               key={i}
//               src={card.src}
//               alt={`card-${i}`}
//               style={{ x: positions[i].x, y: positions[i].y, scale }}
//               className="absolute  w-[240px]   rounded-lg shadow-lg object-cover"
//             />
//           ))}

//           <motion.div
//             style={{ opacity: textOpacity, y: textY }}
//             className="absolute max-w-[900px] px-6 text-center"
//           >
//             <h2 className="text-3xl xl:text-[40px] leading-[48px] font-normal tracking-tight text-[#7b473a]">
//               Transforming spaces with style, <br />
//               through Troscán&apos;s exquisite <br />
//               design expertise.
//             </h2>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

const targets = [
  { x: -400, y: -260 },
  { x: 0, y: -200 },
  { x: 400, y: -60 },
  { x: -400, y: 50 },
  { x: 0, y: 260 },
  { x: 400, y: 260 },
];

function Card({ src, index, scrollYProgress }) {
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
      className="absolute w-[240px] rounded-lg shadow-lg object-cover"
    />
  );
}

export default function Gallery4() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const textOpacity = useTransform(
    scrollYProgress,
    [STEP_OUT * 0.95, 1],
    [0, 1]
  );
  const textY = useTransform(scrollYProgress, [STEP_OUT, 1], [20, 0]);

  return (
    <section ref={sectionRef} className="mb-10 relative h-[300vh] bg-[#f8ede3]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {cards.map((card, i) => (
            <Card
              key={i}
              src={card.src}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}

          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="absolute max-w-[900px] px-6 text-center"
          >
            <h2 className="text-3xl xl:text-[40px] leading-[48px] font-normal tracking-tight text-[#7b473a]">
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
