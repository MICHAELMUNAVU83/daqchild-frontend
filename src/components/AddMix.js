import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

function AddMix() {
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

  return (
    <div className="App">
      <input type="file" onChange={(e) => uploadImage(e.target.files)} />

      {audio && (
        <>
          <ReactAudioPlayer
            src={audio}
            autoPlay
            controls
            style={{ width: 500 }}
          />
        </>
      )}
    </div>
  );
}

export default AddMix;
