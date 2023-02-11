import React from "react";
import { CgScrollV } from "react-icons/cg";

const Hero = () => {
  return (
    <div className="p-4 hero-background md:h-[100vh] h-[70vh]  bg-fixed bg-no-repeat bg-cover ">
      <div className="flex flex-col justify-center text-center items-center h-full">
        <h1
          className="md:text-8xl text-5xl text-white font-bold"
          style={{
            WebkitTextStroke: "2px white",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 10",
          }}
        >
          GIBBZ
        </h1>
        <h1
          className="md:text-8xl text-5xl text-white font-bold"
          style={{
            WebkitTextStroke: "2px white",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 10",
          }}
        >
          THE DAQCHILD
        </h1>
        <p className="text-2xl text-white font-bold">king of good times </p>
        <div className="scroll-container">
          <p className="flex scroll-text text-3xl md:text-6xl">
            <span>GIBBZ THE DAQCHILD</span>
            <span className="mx-2">KING OF GOOD TIMES </span>
          </p>
        </div>
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
