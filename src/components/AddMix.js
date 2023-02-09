import React, { useState } from "react";

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

      <audio controls autoPlay>
        <source
          src="https://res.cloudinary.com/dakiak4mc/video/upload/v1675945950/vmo2lxodl3e5vdat57nx.mp3"
          type="audio/mp3"
        />
      </audio>
    </div>
  );
}

export default AddMix;
