import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "@splidejs/react-splide/css";
import dj1 from "./images/dj1.jpg";
import dj2 from "./images/dj2.jpg";

const Events = () => {
  const slides = [
    {
      url: dj1,
    },
    {
      url: dj2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };



  return (
    <div className="h-[100vh]  pt-10 text-black text-5xl">
      <section className="flex flex-col md:flex-row justify-around   ">
        <div className="flex flex-col   ml-4">
          <h1 className="md:text-7xl text-3xl font-bold">KING OF GOOD TIMES</h1>
          <h2 className="text-5xl py-2">Events for the week</h2>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
        </div>
        <div className=" m-auto  px-4 relative group">
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
            }}
            className="rounded-2xl bg-center bg-cover duration-500 md:w-[500px] md:h-[500px] flex justify-center w-[300px] h-[300px]"
          ></div>
          {/* Left Arrow */}
          <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
