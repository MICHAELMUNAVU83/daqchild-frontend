import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="hero-background md:h-[100vh] h-[70vh] bg-center  md:bg-top   bg-fixed bg-no-repeat bg-cover ">
      <div className="bg-black/30  h-full">
        <div className="flex pt-20 flex-col justify-center text-center items-center h-full">
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

          

          
          <div className="scroll-container">
            <p className="flex scroll-text text-4xl md:text-7xl">
              <span>GIBBZ THE DAQCHILD&nbsp;&nbsp;&nbsp;</span>
              <span className="mx-2">KING OF GOOD TIMES &nbsp;&nbsp;&nbsp;</span>
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
