import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsSnapchat, BsSpotify, BsApple } from "react-icons/bs";
import { SiTwitch } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-black h-full text-white md:p-4 p-2">
      <p className="text-center p-3 text-4xl">Follow me</p>
      <section className="w-full md:w-full  flex-wrap flex bg-dark   justify-center items-center ">
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 md:p-4 p-2 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <AiFillInstagram className="text-4xl group-hover:text-black group-hover:text-black hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 md:p-4 p-2 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <AiFillFacebook className="text-4xl group-hover:text-black   group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
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
          <FaTiktok className="text-4xl  group-hover:text-black  group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
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

      <section className="flex flex-col mt-10 gap-10 md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center ">
          <p className="text-center p-3 text-4xl">Contact</p>
          <p className="text-center p-1  text-gray-400 ">Email: </p>
          <p className="text-center p-1  text-gray-400  ">Phone: </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center p-3 text-4xl">Contact</p>
          <p className="text-center p-1  text-gray-400  ">Email: </p>
          <p className="text-center p-1  text-gray-400  ">Phone: </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center p-3 text-4xl">Contact</p>
          <p className="text-center p-1  text-gray-400  ">Email: </p>
          <p className="text-center p-1  text-gray-400  ">Phone: </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center p-3 text-4xl">Contact</p>
          <p className="text-center p-1  text-gray-400 ">Email: </p>
          <p className="text-center p-1  text-gray-400  ">Phone: </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
