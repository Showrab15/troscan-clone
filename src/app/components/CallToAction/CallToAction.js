"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="relative w-full md:h-[120vh]   overflow-hidden">
      {/* Background Image */}
      <Image
        src="/callToActionBanner.avif"
        alt="Banner"
        fill
        className="object-cover object-center  "
        priority
      />

      {/* Overlay Box with Framer Motion */}
      <div className="mt-20 absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ y: 200, opacity: 0 }} // starts 200px below, invisible
          animate={{ y: 0, opacity: 1 }} // moves to center and fully visible
          transition={{
            duration: 2, // slower, 2 seconds
            ease: "easeOut",
            delay: 0.3, // optional slight delay
          }}
          className="md:m-0 mx-4   flex justify-center flex-nowrap flex-col
           gap-[20px] max-w-[700px] py-[50px] px-[25px] md:p-[100px] bg-[#f8ede3]
            text-[#8D493A] rounded-lg text-center"
        >
          <h4 className="md:text-[28px] text-[20px] font-normal leading-[19px] md:leading-[35px]">
            Ready to reimagine your space? Connect with us at Troscán to bring
            your vision to life with our expertise in design and decoration.
          </h4>

          {/* Button */}
          <button
            className="px-[30px] py-[14px] bg-[#8D493A] text-[#F8EDE3] font-semibold text-[16px] 
                       rounded-md hover:bg-[#B85842] transition-colors whitespace-nowrap cursor-pointer mx-auto"
          >
            Get in touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
