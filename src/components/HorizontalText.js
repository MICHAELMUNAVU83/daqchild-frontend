import React, { useState, useEffect } from "react";
import navbarImage from "./images/navbarpic.jpg";
import dj1 from "./images/dj1.jpg";
import dj2 from "./images/dj2.jpg";

const HorizontalText = () => {
  const images = [navbarImage, dj1, dj2];

  const [current, setCurrent] = useState(0);

  const changeImage = () => {
    setTimeout(() => {
      setCurrent(current === images.length - 1 ? 0 : current + 1);
    }, 4000);
  };

  useEffect(() => {
    changeImage();
  }, [current]);

  return (
    <div className="md:h-[100vh] h-[80vh]  bg-black text-white overflow-hidden w-full">
      <div>
        <div className="flex justify-center pt-20">
          <img
            src={images[current]}
            alt="navbarImage"
            className=" md:w-[60%] w-80 absolute md:h-[80vh]  md:h-[80vh] object-cover"
          />
        </div>

        <div className="scroll-container">
          <p className="flex scroll-text text-6xl">
            <span>GIBBZ THE DAQCHILD</span>
            <span className="mx-2">KING OF GOOD TIMES </span>
          </p>
        </div>

        <div className="middle-scroll-container">
          <p className="flex middle-scroll-text text-6xl">
            <span>AFROBEATS || AMAPAINO || REAGEE </span>
            <span className="mx-2">HIPHOP || BONGO || GENGETONE </span>
          </p>
        </div>


        <div className="last-scroll-container">
          <p className="flex last-scroll-text text-6xl">
            <span>GIBBZ THE DAQCHILD</span>
            <span className="mx-2">KING OF GOOD TIMES </span>
          </p>
        </div>

        {/* <section className="pt-20 flex flex-col h-full justify-center align-center relative text-3xl md:text-5xl font-bold ">
          <div className="marquee-w">
            <div className="marquee">
              <span>GIBBZ THE DAQCHILD</span>
            </div>
            <div className="marquee marquee2">
              <span>THE KING OF GOOD TIMES</span>
            </div>
          </div>
          <div className="marquee-w">
            <div className="marquee1">
              <span>AFROBEATS . AMAPIANO . GENGETONE </span>
            </div>
            <div className="marquee1 marquee2">
              <span>HIP-HOP . BONGO . OLD-SCHOOL </span>
            </div>
          </div>
          <div className="marquee-w">
            <div className="marquee">
              <span>GIBBZ THE DAQCHILD</span>
            </div>
            <div className="marquee marquee2">
              <span>THE KING OF GOOD TIMES</span>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default HorizontalText;
