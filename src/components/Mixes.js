import React, { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
const Mixes = () => {
  const [mixes, setMixes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/mixes")
      .then((response) => response.json())
      .then((data) => {
        setMixes(data);
      });
  }, [mixes]);
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
  const mixesDisplay = mixes.map((mix) => (
    <div key={mix.id} className="m-8">
      <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={mix.poster} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {mix.name}
          </h5>

          <audio controls className="flex justify-center">
            <source src={mix.audio_mp3} type="audio/mp3" />
          </audio>
          <div className="flex items-center text-white justify-around mt-4">
            <p> Plays {mix.plays} </p>
            <button
              className="bg-black p-2 text-white text-2xl"
              onClick={() => {
                handleDownload(mix.audio_mp3, mix.name);
              }}
            >
              Download
            </button>
            <div className="flex items-center">
              <AiFillHeart
                className="text-2xl "
                onClick={() => {
                  fetch(`http://localhost:3000/mixes/${mix.id}`, {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ likes: mix.likes + 1 }),
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      console.log(data);
                    });
                }}
              />

              <p>{mix.likes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <h1>Mixes</h1>
      <div className="flex justify-center gap-4">
        <div className="grid md:grid-cols-2 grid-cols-1">{mixesDisplay}</div>
      </div>
    </div>
  );
};

export default Mixes;
