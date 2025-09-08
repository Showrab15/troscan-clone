// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const newsItems = [
//   {
//     id: 1,
//     date: "February 5, 2022",
//     title: "The Art of Minimalist Interiors",
//     subtitle: "Less is More: Designing Spaces That Speak Simplicity",
//     image: "/blog1.avif",
//     href: "/news/the-art-of-minimalist-interiors",
//   },
//   {
//     id: 2,
//     date: "February 22, 2022",
//     title: "Timeless Furniture Pieces Every Home Needs",
//     subtitle: "Building a Home That Never Goes Out of Style",
//     image: "/blog2.avif",
//     href: "/news/timeless-furniture-pieces-every-home-needs",
//   },
//   {
//     id: 3,
//     date: "January 21, 2023",
//     title: "Psychology in Interior Design",
//     subtitle: "Shaping Emotions Through Thoughtful Color Choices",
//     image: "/blog3.avif",
//     href: "/news/psychology-in-interior-design",
//   },
// ];
// const buttonVariants = {
//   hidden: {
//     opacity: 0,
//     y: 20, // bottom-to-top animation
//   },
//   visible: (custom) => ({
//     opacity: 1,
//     y: 0,

//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//       delay: custom * 0.15,
//     },
//   }),
// };
// export default function Blogs() {
//   return (
//     <section className="px-4 md:px-12 py-16">
//       {/* Top Heading */}

//       <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-2.5 md:gap-6 mb-12">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           {" "}
//           <span className="text-[#8D493A] text-[14px] leading-[16px] font-medium">
//             • News
//           </span>
//           <h2
//             className="mt-4 text-left  text-[#8D493A]  font-[500px] tracking-[-0.03em]
//            lg:leading-[64px] leading-[38px] sm:leading-[45px] text-[32px] sm:text-[44px] lg:text-[64px]"
//           >
//             Stay Inspired with <br /> Interior Trends
//           </h2>{" "}
//         </motion.div>

//         {/* Button with bottom-to-top animation */}
//         <motion.button
//           variants={buttonVariants}
//           custom={4}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className=" font-sans  cursor-pointer text-[16px] bg-[#8b4b3b] text-[#F8EDE3]
//             px-6 py-3 rounded-[5px] font-semibold hover:bg-[#B85842] transition will-change-transform"
//         >
//           {" "}
//           View All News{" "}
//         </motion.button>
//       </div>
//       {/* News Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//         {newsItems.map((item, index) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 0.6,
//               ease: "easeOut",
//               delay: index * 0.2,
//             }}
//             viewport={{ once: true }}
//             className={`${
//               index === 2 ? "md:hidden xl:block" : "" // hide 3rd item on medium screens
//             }`}
//           >
//             <Link href={item.href}>
//               <article className="group gap- 4 ">
//                 <figure className="relative overflow-hidden rounded-xl w-full h-[350px]  mb-5">
//                   <motion.img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover rounded-xl"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 </figure>
//                 <span className="opacity-90 text-sm leading-[16px] text-[#8D493A] font-normal">
//                   • {item.date}
//                 </span>
//                 <h5 className="mt-2 text-[22px] leading-[26px] font-normal text-[#8D493A] transition-colors mb-2">
//                   {item.title}
//                 </h5>
//                 <p className="text-[#8D493A] text-sm leading-[16px] font-normal opacity-90 ">
//                   {item.subtitle}
//                 </p>
//               </article>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    date: "February 5, 2022",
    title: "The Art of Minimalist Interiors",
    subtitle: "Less is More: Designing Spaces That Speak Simplicity",
    image: "/blog1.avif",
    href: "/news/the-art-of-minimalist-interiors",
  },
  {
    id: 2,
    date: "February 22, 2022",
    title: "Timeless Furniture Pieces Every Home Needs",
    subtitle: "Building a Home That Never Goes Out of Style",
    image: "/blog2.avif",
    href: "/news/timeless-furniture-pieces-every-home-needs",
  },
  {
    id: 3,
    date: "January 21, 2023",
    title: "Psychology in Interior Design",
    subtitle: "Shaping Emotions Through Thoughtful Color Choices",
    image: "/blog3.avif",
    href: "/news/psychology-in-interior-design",
  },
];

// Bottom-to-top variant for button
const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: custom * 0.15 },
  }),
};

export default function Blogs() {
  return (
    <section className="px-4 md:px-12 py-16">
      {/* Top Heading */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-2.5 md:gap-6 mb-12">
        {/* Heading animation (top-to-bottom) */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-[#8D493A] text-[14px] leading-[16px] font-medium">
            • News
          </span>
          <h2
            className="mt-4 text-left text-[#8D493A] font-[500px] tracking-[-0.03em]
           lg:leading-[64px] leading-[38px] sm:leading-[45px] text-[32px] sm:text-[44px] lg:text-[64px]"
          >
            Stay Inspired with <br /> Interior Trends
          </h2>
        </motion.div>

        {/* Button animation (bottom-to-top) */}
        <motion.button
          variants={buttonVariants}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-sans cursor-pointer text-[16px] bg-[#8b4b3b] text-[#F8EDE3] 
            px-6 py-3 rounded-[5px] font-semibold hover:bg-[#B85842] transition will-change-transform"
        >
          View All News
        </motion.button>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-3">
        {newsItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }} // card fade from bottom
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className={`${index === 2 ? "md:hidden xl:block" : ""}`}
          >
            <Link href={item.href}>
              <article className="group gap-4">
                {/* Image Section */}
                <figure className="relative overflow-hidden rounded-xl w-full h-[350px] mb-5 will-change-transform">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </figure>

                {/* Date with dot */}
                <div
                  className="flex items-center gap-2"
                  style={{
                    willChange: "var(--framer-will-change-override, transform)",
                  }}
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-[#8D493A]" />
                  <span className="text-sm leading-[16px] text-[#8D493A] font-normal opacity-90">
                    {item.date}
                  </span>
                </div>

                {/* Title + Subtitle */}
                <h5 className="max-w-[330px] mt-2 text-[22px] leading-[26px] font-normal text-[#8D493A] transition-colors mb-2">
                  {item.title}
                </h5>
                <p className="max-w-[300px] text-[#8D493A] text-sm leading-[16px] font-normal opacity-90">
                  {item.subtitle}
                </p>
              </article>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
