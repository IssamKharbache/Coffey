"use client";
import Image from "next/image";
import React from "react";
import { motion, useScroll } from "framer-motion";

const HomeHero = () => {
  return (
    <div className="md:flex max-w-7xl mx-auto gap-24   mt-16 md:h-[80vh]">
      <div className="flex  flex-wrap md:flex-col items-center justify-center md:justify-start md:items-start   ml-4 gap-8  p-5 ">
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="text-5xl justify-center sm:justify-start md:text-8xl text-center md:text-left font-bold text-primary mb-4"
        >
          Coffee <br /> with a twist
        </motion.p>
        <motion.p
          initial={{ scale: 0, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            delay: 0.5,
            type: "tween",
            stiffness: 260,
            damping: 20,
          }}
          className="text-sm md:text-[16px] justify-center md:justify-start text-center md:text-start w-[450px]"
        >
          At <span className="text-primary font-bold ">Coffey</span>, we’re
          passionate about sourcing the finest beans and crafting the perfect
          brew. Whether you're looking for a quick pick-me-up or a place to
          unwind, our inviting atmosphere and delicious offerings will make you
          feel right at home
        </motion.p>
      </div>
      <motion.div
        initial={{ scale: 0, x: 100 }}
        animate={{ scale: 1, x: 0 }}
        transition={{
          delay: 0.2,
          type: "tween",
          stiffness: 260,
          damping: 20,
        }}
        className="flex-1 hidden lg:block"
      >
        <Image
          alt="Coffee Shop"
          src="/coffemain.jpeg"
          width={1500}
          height={1500}
          className="rounded-full w-[450px] h-[450px]   object-cover"
        />
      </motion.div>
    </div>
  );
};

export default HomeHero;
