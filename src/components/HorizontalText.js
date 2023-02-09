import React from "react";

const HorizontalText = () => {
  return (
    <div className="h-full bg-black text-white overflow-hidden w-full">
      <div>
        <div className="scroll-container">
          <p className="flex scroll-text text-3xl md:text-6xl">
            <span>GIBBZ THE DAQCHILD</span>
            <span className="mx-2">KING OF GOOD TIMES </span>
          </p>
        </div>

        <div className="middle-scroll-container">
          <p className="flex middle-scroll-text text-3xl md:text-6xl">
            <span>AFROBEATS || AMAPAINO || REAGEE </span>
            <span className="mx-2">HIPHOP || BONGO || GENGETONE </span>
          </p>
        </div>

        <div className="last-scroll-container">
          <p className="flex last-scroll-text text-3xl md:text-6xl">
            <span>GIBBZ THE DAQCHILD</span>
            <span className="mx-2">KING OF GOOD TIMES </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalText;
