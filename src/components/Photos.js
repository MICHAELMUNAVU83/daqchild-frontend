import React from "react";
import J6 from "./images/J6.jpg";
import J11 from "./images/J11.jpg";
import V1 from "./images/v1.jpg";
import V2 from "./images/v2.jpg";
import ma from "./images/ma.jpg";
import { FaInstagram } from "react-icons/fa";
const Photos = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <img src={ma} alt="/" layout="responsive" width="677" height="451" />
          {/* Overlay */}
        </div>
        <div className="w-[1/2] h-[217px] cursor-pointer">
          <div className="relative">
            <img src={J6} alt="/" layout="responsive" objectFit="cover" />
            {/* Overlay */}
            <div className="flex justify-center items-center absolute w-full top-0 w-[100%] left-0 right-0 bottom-0 hover:bg-black/50 transition-all duration-300 group">
              <p className="text-gray-300 hidden group-hover:block">
                <p className="bebas font-bold text-2xl">Gibbz Tha Daqchild</p>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1/2] h-[217px] cursor-pointer">
          <div className="relative">
            <img src={V1} alt="/" layout="responsive" objectFit="cover" />
            {/* Overlay */}
            <div className="flex justify-center items-center absolute w-full top-0 w-[100%] left-0 right-0 bottom-0 hover:bg-black/50 transition-all duration-300 group">
              <p className="text-gray-300 hidden group-hover:block">
                <p className="bebas font-bold text-2xl">King of GOOD Times</p>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1/2] h-[217px] cursor-pointer">
          <div className="relative">
            <img src={V2} alt="/" layout="responsive" objectFit="cover" />
            {/* Overlay */}
            <div className="flex justify-center items-center absolute w-full top-0 w-[100%] left-0 right-0 bottom-0 hover:bg-black/50 transition-all duration-300 group">
              <p className="text-gray-300 hidden group-hover:block">
                <p className="bebas font-bold text-2xl">GOAT MC </p>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1/2] h-[217px] cursor-pointer">
          <div className="relative">
            <img src={J6} alt="/" layout="responsive" objectFit="cover" />
            {/* Overlay */}
            <div className="flex justify-center items-center absolute w-full top-0 w-[100%] left-0 right-0 bottom-0 hover:bg-black/50 transition-all duration-300 group">
              <p className="text-gray-300 hidden group-hover:block">
                <p className="bebas font-bold text-2xl">GOAT DJ </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
