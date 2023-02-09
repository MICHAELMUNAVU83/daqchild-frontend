import React from "react";

const LatestMixes = () => {
  return (
    <div className="h-full bg-white overflow-hidden w-full p-4 ">
      <section className="flex justify-between">
        <div className="ml-10">
          <h1
          className="text-8xl font-bold"
          >LATEST MIX</h1>
          <button className="bg-black p-2 text-white text-2xl">View All Resources </button>
        </div>
        <div className="mr-10 text-2xl">
          <p>Learn more about the music, or check the</p>
          <p>Learn more about the music, or check the</p>
        </div>
      </section>

      <section className="flex justify-around my-4 ">
        <div className="bg-black w-1/4 h-96"></div>
        <div className="bg-black w-1/4 h-96"></div>
      </section>
      <section className="flex justify-around my-4">
        <div className="bg-black w-1/4 h-96"></div>
        <div className="bg-black w-1/4 h-96"></div>
      </section>
      <section className="flex justify-around my-4">
        <div className="bg-black w-1/4 h-96"></div>
        <div className="bg-black w-1/4 h-96"></div>
      </section>
    </div>
  );
};

export default LatestMixes;
