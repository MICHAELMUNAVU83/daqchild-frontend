import React from "react";
import load from "./load.png";

const Loader = () => {
  return (
    <div className="bg-white h-[100vh]  animate-spin">
      <div className="flex justify-center items-center h-full ">
        <img src={load} alt="loading" className="animate-spin-1" />
      </div>
    </div>
  );
};

export default Loader;
