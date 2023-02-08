import React from "react";
import { CgScrollV } from "react-icons/cg";
import MovingText from "react-moving-text";
const Hero = () => {
  return (
    <div className=" hero-background h-[100vh]  bg-fixed bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl text-white font-bold">THE DAQCHILD</h1>
        <p className="text-2xl text-white font-bold">king of good times </p>
        <button className="bg-white uppercase text-black font-bold py-4 px-8  mt-4">
          Explore
        </button>

        <div className="flex justify-center items-center mt-10">
          <CgScrollV className="text-8xl text-white animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
