import React, { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import ReactPlayer from "react-player";
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

          <audio
            controls
            className="flex justify-center"
            onPlay={() => {
              fetch(`http://localhost:3000/mixes/${mix.id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ plays: mix.plays + 1 }),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                });
            }}
          >
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

  const mixDisplay = mixes.map((mix) => (
    <div className=" p-4  antialiased text-gray-900">
      <div>
        <img
          src={mix.poster}
          alt=" random imgee"
          className="rounded-lg shadow-md"
          style={{ width: "400px", height: "300px" }}
        />

        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="bg-purple-500 text-white text-xs px-2  inline-block rounded-full  uppercase font-semibold tracking-wide">
                New
              </span>
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                {mix.likes} likes &bull; {mix.plays} plays
              </div>
            </div>

            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {mix.name}
            </h4>

            <div className="flex justify-between mt-3">
              <div className="flex items-center gap-2">
                <p>{mix.likes}</p>
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
              </div>
              <div className="flex gap-2 items-center">
                <p> {mix.plays} </p>
                <p>Plays</p>
              </div>
            </div>
            <div className="mt-4">
              <audio
                controls
                className="flex justify-center  p-2 rounded-lg shadow-lg shadow-purple-500 overflow-hidden"
                onPlay={() => {
                  fetch(`http://localhost:3000/mixes/${mix.id}`, {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ plays: mix.plays + 1 }),
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      console.log(data);
                    });
                }}
              >
                <source src={mix.audio_mp3} type="audio/mp3" />
              </audio>
            </div>

           

            <div className="flex place-content-center mt-4">
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  handleDownload(mix.audio_mp3, mix.name);
                }}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Mixes</h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 md:gap-20 gap-10 grid-cols-1">
          {mixDisplay}
        </div>
      </div>
    </div>
  );
};

export default Mixes;
