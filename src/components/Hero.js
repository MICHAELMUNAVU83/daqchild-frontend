import React from "react";

const Hero = () => {
  return (
    <div className="hero-background md:h-[100vh] h-[50vh] bg-top    bg-fixed bg-no-repeat bg-cover ">
      <div className="bg-black/30  h-full">
        <div className="flex pt-20 flex-col justify-center text-center items-center h-full">
          <h1
            className="md:text-8xl text-5xl text-white bakbak font-bold"
            style={{
              WebkitTextStroke: "2px white",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 10",
            }}
          >
            GIBBZ THA DAQCHILD
          </h1>
          <p className="text-2xl md:text-4xl text-white font-bold  bangers ">
            KING OF GOOD TIMES
          </p>

          <div
            className="marquee-w text-3xl bakbak
            md:text-8xl text-white font-bold"
          >
            <div className="marquee text-white">
              <span>DEEJAY GIBBZ THA DAQCHILD , AFRICA'S&nbsp;&nbsp;</span>
            </div>
            <div className="marquee marquee2 text-white">
              <span>
                &nbsp; NUMBER ONE KING OF GOOD TIMES &nbsp;&nbsp;&nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
