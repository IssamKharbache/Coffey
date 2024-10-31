import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <div className="md:flex max-w-7xl mx-auto gap-24   mt-16">
      <div className="flex  flex-wrap md:flex-col items-center justify-center md:justify-start md:items-start   ml-4 gap-8  p-5 ">
        <p className=" text-5xl justify-center sm:justify-start md:text-8xl text-center md:text-left font-bold text-primary mb-4">
          Coffee <br /> with a twist
        </p>
        <p className="text-sm justify-center md:justify-start text-center md:text-start w-[450px]">
          At <span className=" text-primary font-bold ">Coffey</span>, we’re
          passionate about sourcing the finest beans and crafting the perfect
          brew. Whether you're looking for a quick pick-me-up or a place to
          unwind, our inviting atmosphere and delicious offerings will make you
          feel right at home
        </p>
      </div>
      <div className="flex-1 hidden lg:block">
        <Image
          alt="Coffee Shop"
          src="/coffemain.jpeg"
          width={1500}
          height={1500}
          className="rounded-full w-[450px] h-[450px]   object-cover"
        />
      </div>
    </div>
  );
};

export default HomeHero;
