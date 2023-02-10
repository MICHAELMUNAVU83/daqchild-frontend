import React, { useState, useRef } from "react";
import dj1 from "./images/dj1.jpg";
function AddMix() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };


  const [audio, setAudio] = useState("");
  const uploadImage = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/video/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setAudio(data.secure_url);
      });
  };
  const handleDownload = async () => {
    const response = await fetch(audio);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    // add a custom name to the file
    link.href = url;
    link.download =  "my-mix.mp3"
    link.click();
  };

  return (
    <div className="App">
      <input type="file" onChange={(e) => uploadImage(e.target.files)} />

      {audio && (
        <>
          <img src={dj1} alt="" />
          <audio ref={audioRef} src={audio} controls={true} />
          <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
       
          <button onClick={handleDownload}>Download</button>
        </>
      )}
    </div>
  );
}

export default AddMix;
