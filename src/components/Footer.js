import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsSnapchat, BsSpotify, BsApple } from "react-icons/bs";
import { SiTwitch } from "react-icons/si";
import { ImPlus, ImCross } from "react-icons/im";
import {FaFacebookF} from "react-icons/fa"
import {IoLogoTiktok} from "react-icons/io5"
const Footer = () => {
  return (
    <div className="bg-black h-full text-white md:p-4 p-2">
      <p className="text-center p-3 text-4xl">Follow me</p>
      <section className="w-full md:w-full  flex-wrap flex bg-dark   justify-center items-center ">
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 md:p-4 p-2 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <AiFillInstagram className="text-4xl  group-hover:text-black hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 md:p-4 p-2 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <FaFacebookF className="text-4xl group-hover:text-black   group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 md:p-4 p-2 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <AiFillTwitterCircle className="text-4xl  group-hover:text-black group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 md:p-4 p-2 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <IoLogoTiktok className="text-4xl  group-hover:text-black  group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 md:p-4 p-2 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <BsApple className="text-4xl group-hover:text-black   group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 md:p-4 p-2 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <BsSpotify className="text-4xl group-hover:text-black  group-hover:scale-110 duration-300  mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 md:p-4 p-2 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <BsSnapchat className="text-4xl group-hover:text-black group-hover:scale-110 duration-300 mx-2 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 md:p-4 p-2 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <SiTwitch className="text-4xl group-hover:text-black   group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
      </section>

      <section className="flex flex-col mt-10 md:gap-24 gap-10 md:flex-row justify-center my-4 items-center">
        <div className="flex flex-col justify-center items-center ">
          <p className="text-center p-3 text-4xl">MIXES</p>
          <p className="text-center p-1  text-gray-400 ">Video Mixes</p>
          <p className="text-center p-1  text-gray-400  ">Audio Mixes</p>
          <p className="text-center p-1  text-gray-400  ">Live Mixes</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center p-3 text-4xl">Mercandise</p>
          <p className="text-center p-1  text-gray-400  ">T-Shirts</p>
          <p className="text-center p-1  text-gray-400  ">Hoodies</p>
          <p className="text-center p-1  text-gray-400  ">Caps</p>

        </div>
       
        <div className="flex flex-col justify-center items-center">
          <p className="text-center p-3 text-4xl">Contact</p>
          <p className="text-center p-1  text-gray-400 ">daqchild@gmail.com </p>
          <p className="text-center p-1  text-gray-400  ">+234 803 000 0000</p>
          <p className="text-center p-1  text-gray-400  ">@daqchild</p>
        </div>
      </section>

      <section className="flex my-6 flex-row justify-between items-center">
        <div className="flex mx-2 group">
          <ImPlus className="text-6xl text-gray-300 group-hover:text-white md:text-4xl mx-2 cursor-pointer animate-bounce" />
          <ImCross className="text-6xl text-gray-300 group-hover:text-white md:text-4xl mx-2 cursor-pointer animate-bounce" />
        </div>
        <div className="flex  flex-col mx-2 items-start md:flex-row">
          <p className="text-center p-1  text-gray-400  ">© 2023</p>
          <p className="text-center p-1  text-gray-400  ">daqchild ent </p>
          <p className="text-center p-1  text-gray-400  ">All rights reserved</p>
        </div>
      </section>

    </div>
  );
};

export default Footer;
