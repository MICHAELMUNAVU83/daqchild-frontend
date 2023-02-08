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
    }, 500);
  };

  return (
    <div className="md:h-[100vh] h-[80vh]  bg-black text-white overflow-hidden w-full">
      <div>
        <div className="flex justify-center pt-20">
          <img
            src={images[current]}
            alt="navbarImage"
            className=" md:w-[60%] w-80 absolute md:h-[60vh]  md:h-[80vh] object-cover"
          />
        </div>
        <section className=" flex flex-col h-full justify-center align-center relative text-3xl md:text-5xl font-bold ">
          <div className="marquee-w">
            <div className="marquee">
              <span>WELCOME TO THE DAQCHILD</span>
            </div>
            <div className="marquee marquee2">
              <span>KING OF GOOD TIMES AND HITS</span>
            </div>
          </div>
          <div className="marquee-w">
            <div className="marquee">
              <span>WELCOME TO THE DAQCHILD</span>
            </div>
            <div className="marquee marquee2">
              <span>KING OF GOOD TIMES AND HITS</span>
            </div>
          </div>
          <div className="marquee-w">
            <div className="marquee">
              <span>WELCOME TO THE DAQCHILD</span>
            </div>
            <div className="marquee marquee2">
              <span>KING OF GOOD TIMES AND HITS</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalText;
