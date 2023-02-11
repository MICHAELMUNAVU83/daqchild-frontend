import React from "react";
import { CgScrollV } from "react-icons/cg";
import { AiOutlineCaretDown } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="hero-background md:h-[100vh] h-[70vh] bg-center  md:bg-top   bg-fixed bg-no-repeat bg-cover ">
      <div className="bg-gradient-to-r from-black/75 to-transparent h-full">
        <div className="flex flex-col justify-center text-center items-center h-full">
          <h1
            className="md:text-8xl text-5xl text-white font-bold"
            style={{
              WebkitTextStroke: "2px white",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 10",
            }}
          >
            GIBBZ THE DAQCHILD
          </h1>
          <p className="text-2xl text-white font-bold">KING OF GOOD TIMES</p>

          <button className="bg-white uppercase text-black font-bold py-4 px-8  mt-4">
            Explore
          </button>

          <div className="flex justify-center items-center mt-10">
            <AiOutlineCaretDown className="text-8xl text-pink-300 animate-bounce" />
          </div>
          <div className="scroll-container">
            <p className="flex scroll-text text-4xl md:text-7xl">
              <span>GIBBZ THE DAQCHILD</span>
              <span className="mx-2">KING OF GOOD TIMES </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
