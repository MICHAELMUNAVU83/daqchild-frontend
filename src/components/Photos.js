import React from "react";
import J6 from "./images/J6.jpg";
import J11 from "./images/J11.jpg";
import V1 from "./images/v1.jpg";
import V2 from "./images/v2.jpg";
import ma from "./images/ma.jpg";
const Photos = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <img src={ma} alt="/" layout="responsive" width="677" height="451" />
        </div>
        <div className="w-[1/2] h-[217px]">
          <img src={J6} alt="/" layout="responsive" objectFit="cover" />
        </div>
        <div className="w-[1/2] h-[217px]">
          <img src={V1} alt="/" layout="responsive" objectFit="cover" />
        </div>
        <div className="w-[1/2] h-[217px]">
          <img src={V2} alt="/" layout="responsive" objectFit="cover" />
        </div>
        <div className="w-[1/2] h-[217px]">
          <img src={J6} alt="/" layout="responsive" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Photos;
