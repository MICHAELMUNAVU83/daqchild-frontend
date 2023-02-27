import React, { useState, useRef } from "react";
import { AiFillHeart } from "react-icons/ai";
import Slider from "./slider/Slider";
import ControlPanel from "./controls/ControlPanel";
import { BiCloudDownload } from "react-icons/bi";
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
    <div className=" flex flex-col items-center shadow-[#9d6ef4]  bg-white shadow-lg w-[350px] rounded-lg h-full py-4">
      <div>
        <img
          src={mix.poster}
          alt=" random imgee"
          className="rounded-full  md:ml-2 shadow-md"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <span className="bg-[#9d6ef4] my-2 text-white text-xs px-2  text-end rounded-full  uppercase font-semibold tracking-wide">
        {mix.genre}
      </span>
      <div className="ml-2 text-gray-600 uppercase text-sm font-semibold tracking-wider">
        {mix.likes}
        {mix.likes === 1 ? "like" : "likes"} &bull; {mix.plays}{" "}
        {mix.plays === 1 ? "play" : "plays"} &bull;{""}
        {mix.downloads} {""} 
        {mix.downloads === 1 ? "download" : "downloads"}{" "}
      </div>
      <h4 className="mt-1 text-center text-xl  bebas w-[300px]    uppercase ml-4 ">
        {mix.name}
      </h4>

      <div className="mt-4 w-full px-4">
        <div className="flex justify-between">
          <div>
            <BiCloudDownload
              size={25}
              className="cursor-pointer mx-1 text-[#9d6ef4]"
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
            />
          </div>
          <div>
            <Slider
              percentage={percentage}
              onChange={onChange}
              className="w-[100%]"
            />
          </div>
          <div className="flex items-center kanit font-bold gap-2">
            <p>{mix.likes}</p>
            <AiFillHeart
              className="text-2xl text-[#9d6ef4] hover:text-red-500 cursor-pointer "
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
        </div>
        <audio
          ref={audioRef}
          className="mt-2"
          onTimeUpdate={getCurrDuration}
          onLoadedData={(e) => {
            setDuration(e.currentTarget.duration.toFixed(2));
          }}
          src={mix.audio_mp3}
          volume="1.0"
        ></audio>
        <ControlPanel
          play={play}
          isPlaying={isPlaying}
          duration={duration}
          currentTime={currentTime}
        />
      </div>
    </div>
  );
};

export default Mix;
