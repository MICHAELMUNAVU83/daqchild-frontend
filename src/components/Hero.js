import React from "react";

const Hero = () => {
  return (
    <div className="hero-background md:h-[100vh] h-[70vh] bg-top    bg-fixed bg-no-repeat bg-cover ">
      <div className="bg-black/30  h-full">
        <div className="flex pt-20 flex-col justify-center text-center items-center h-full">
          <h1
            className="md:text-8xl text-4xl text-white font-bold"
            style={{
              WebkitTextStroke: "2px white",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 10",
            }}
          >
            GIBBZ THA DAQCHILD
          </h1>
          <p className="text-2xl text-white font-bold">KING OF GOOD TIMES</p>

          <div className="marquee-w text-4xl md:text-7xl text-white font-bold">
            <div className="marquee">
              <span>DEEJAY GIBBZ THE DAQCHILD&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div className="marquee marquee2">
              <span>&nbsp; THE KING OF GOOD TIMES &nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
