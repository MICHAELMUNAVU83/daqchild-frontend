import React, { useState } from "react";
function AddMix() {
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
        genre: genre,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="mt-10">
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
        <option value="" selected disabled hidden>
          Select a genre
        </option>
        <option value="house">House</option>
        <option value="afrobeat">Afrobeat</option>
        <option value="old school">old school</option>
        <option value="trap">Trap</option>
        <option value="hiphop">Hip Hop</option>
        <option value="bongo">Bongo</option>
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
    </div>
  );
}

export default AddMix;
