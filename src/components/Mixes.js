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
    link.href = url;
    link.download = name;
    link.click();
  };

  const mixDisplay =
    mixes.length > 0 &&
    mixes.map((mix) => (
      <div className=" p-4  antialiased text-gray-900">
        <div>
          <img
            src={mix.poster}
            alt=" random imgee"
            className="rounded-lg md:ml-2 shadow-md"
            style={{ width: "400px", height: "300px" }}
          />

          <div className="relative px-4 -mt-16  ">
            <div className="bg-white p-2 md:ml-2 rounded-lg shadow-lg ">
              <div className="flex items-baseline">
                <span className="bg-[#9d6ef4] text-white text-xs px-2  inline-block rounded-full  uppercase font-semibold tracking-wide">
                  {mix.genre}
                </span>
                <div className="ml-2 text-gray-600 uppercase text-sm font-semibold tracking-wider">
                  {mix.likes} likes &bull; {mix.plays}{" "}
                  {mix.plays > 1 ? "plays" : "play"} &bull;
                  {mix.downloads} downloads
                </div>
              </div>

              <h4 className="mt-1 text-4xl font-semibold bebas  uppercase leading-tight truncate">
                {mix.name}
              </h4>

              <div className="flex justify-between delius mt-3">
                <div className="flex items-center gap-2">
                  <p>{mix.likes}</p>
                  <AiFillHeart
                    className="text-2xl hover:text-red-500 cursor-pointer"
                    onClick={() => {
                      fetch(`http://localhost:3000/mixes/${mix.id}`, {
                        method: "PATCH",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ likes: mix.likes + 1 }),
                      });
                    }}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <p> {mix.plays} </p>
                  <p> {mix.plays > 1 ? "plays" : "play"}</p>
                </div>
              </div>
              <div className="mt-4">
                <audio
                  controls
                  className="flex justify-center  p-2 rounded-lg shadow-xl shadow-[#af88fd] overflow-hidden w-[95%]"
                  onPlay={() => {
                    fetch(`http://localhost:3000/mixes/${mix.id}`, {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ plays: mix.plays + 1 }),
                    }).then((response) => response.json());
                  }}
                >
                  <source src={mix.audio_mp3} type="audio/mp3" />
                </audio>
              </div>

              <div className="flex place-content-center mt-4">
                <button
                  className="bg-[#9d6ef4] krona text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    handleDownload(mix.audio_mp3, mix.name);
                    fetch(`http://localhost:3000/mixes/${mix.id}`, {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ downloads: mix.downloads + 1 }),
                    });
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
    <div className="bg-black py-6 text-white">
      <h1 className="text-7xl krona text-white font-bold text-start ml-6 mt-10">
        Mixes
      </h1>
      <p className="md:text-2xl  tetx-sm delius text-[#9d6ef4] text-start ml-6 my-4">
        Enjoy the best audio mixes from the Daqchild ranging from amapiano mixes
        , afrobeat mixes and hiphop mixes. Download and enjoy
      </p>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 md:gap-20 gap-10 grid-cols-1">
          {mixDisplay}
        </div>
      </div>
    </div>
  );
};

export default Mixes;
