
import React, { useState, useEffect, useRef } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Slider from "./slider/Slider";
import ControlPanel from "./controls/ControlPanel";


const Mix = ({ mix }) => {
  const handleDownload = async (audiofile, name) => {
    const response = await fetch(audiofile);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.click();
  };
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.1;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  return (
    <div className=" p-4  antialiased text-gray-900">
      <div>
        <img
          src={mix.poster}
          alt=" random imgee"
          className="rounded-lg md:ml-2 shadow-md"
          style={{ width: "400px", height: "250px" }}
        />

        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-2 md:ml-2 rounded-lg shadow-lg h-[280px] ">
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

            <h4 className="mt-1 text-center text-2xl  bebas w-[300px]  uppercase ml-4 ">
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
              {/* <audio
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
                </audio> */}
              <Slider percentage={percentage} onChange={onChange} />
              <audio
                ref={audioRef}
                onTimeUpdate={getCurrDuration}
                onLoadedData={(e) => {
                  setDuration(e.currentTarget.duration.toFixed(2));
                }}
                src={mix.audio_mp3}
              ></audio>
              <ControlPanel
                play={play}
                isPlaying={isPlaying}
                duration={duration}
                currentTime={currentTime}
              />
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
  );
};

export default Mix;
