import React from "react";

const HorizontalText = () => {
  return (
    <div className="h-[100vh] my-4 bg-black text-white overflow-hidden w-full">
      <div className="bar">
        <div className="flex bar_content text-3xl md:text-5xl gap-10">
          <span className=" font-bold">The Daqchild</span>
          <span className=" font-bold">The Daqchild</span>
          <span className=" font-bold">The Daqchild</span>
        </div>
        <div className="flex  bar_content_1 text-3xl md:text-5xl gap-10">
          <span className=" font-bold">The Daqchild</span>
          <span className=" font-bold">The Daqchild</span>
          <span className=" font-bold">The Daqchild</span>
        </div>
        <div className="flex bar_content_1 text-3xl md:text-5xl gap-10">
          <span className=" font-bold">The Daqchild</span>
          <span className=" font-bold">The Daqchild</span>
          <span className=" font-bold">The Daqchild</span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalText;
