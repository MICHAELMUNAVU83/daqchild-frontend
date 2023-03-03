import React from "react";

const Loader = () => {
  return (
    <div className="bg-purple-500 h-screen">
      <div class="flex items-center justify-center space-x-2 animate-bounce mx-auto h-screen">
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div class="w-8 h-8 bg-green-400 rounded-full"></div>
        <div class="w-8 h-8 bg-black rounded-full"></div>
        <audio autoPlay controls className="hidden">
          <source
            src="https://res.cloudinary.com/dakiak4mc/video/upload/v1677432765/otsynxhcmserpghwpnj8.mp3"
            type="audio/mp3"
          />
        </audio>
      </div>
    </div>
  );
};

export default Loader;
