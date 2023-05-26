import React from "react";
import "./button.css";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

function Button({ play, isPlaying }) {
  return (
    <div className="  text-[#DDA3B2]">
      {isPlaying ? (
        <button className="btn" onClick={play}>
          <FaPause size={20} />
        </button>
      ) : (
        <button className="btn" onClick={play}>
          <FaPlay size={20} />
        </button>
      )}
    </div>
  );
}
export default Button;
