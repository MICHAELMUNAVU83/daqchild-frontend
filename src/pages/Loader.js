import React from "react";

const Loader = () => {
  return (
    <div className="bg-purple-500 h-screen">
      <div class="flex items-center justify-center space-x-2 animate-bounce mx-auto h-screen">
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div class="w-8 h-8 bg-green-400 rounded-full"></div>
        <div class="w-8 h-8 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
