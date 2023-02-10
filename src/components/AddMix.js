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
  const [poster, setPoster] = useState("");
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");

  const uploadAudio = (files) => {
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

  const uploadImage = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setPoster(data.secure_url);
      });
  };

  const addMixFunctionality = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/mixes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        audio_mp3: audio,
        poster: poster,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleDownload = async (audiofile, name) => {
    const response = await fetch(audiofile);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    // add a custom name to the file
    link.href = url;
    link.download = name;
    link.click();
  };

  return (
    <div className="App">
      <h1>Upload your mix</h1>
      <label htmlFor="file">Upload your audio file</label>
      <input type="file" onChange={(e) => uploadAudio(e.target.files)} />
      <label htmlFor="file">Upload your image file</label>
      <input type="file" onChange={(e) => uploadImage(e.target.files)} />
      <label htmlFor="name">Name your mix</label>
      <input
        type="text"
        name="name"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="genre">Genre</label>
      <select
        name="genre"
        id="genre"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="" selected disabled hidden >
          Select a genre
        </option>
        <option value="house">House</option>
        <option value="techno">Techno</option>
        <option value="dubstep">Dubstep</option>
        <option value="trap">Trap</option>
        <option value="hiphop">Hip Hop</option>
        <option value="rnb">RnB</option>
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="jazz">Jazz</option>
        <option value="reggae">Reggae</option>
        <option value="soul">Soul</option>
        <option value="funk">Funk</option>
      </select>
      <button
        className="text-center bg-black p-4 text-white"
        onClick={addMixFunctionality}
      >
        Submit
      </button>

      {/* {audio && (
        <>
          <img src={dj1} alt="" />
          <audio ref={audioRef} src={audio} controls={true} />
          <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>

          <button onClick={handleDownload}>Download</button>
        </>
      )} */}
    </div>
  );
}

export default AddMix;
