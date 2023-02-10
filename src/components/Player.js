import React, { useState } from "react";

const AudioPlayer = ({ src, image }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);
 
  return (
    <div>
      <img src={image} alt="" />
      <audio src={src} controls={false} />
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default AudioPlayer;
