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
    <div className="bg-black h-full text-white p-4">
      <p className="text-center p-3 text-4xl">Follow me</p>
      <section className="w-full md:w-full  flex-wrap flex bg-dark   justify-center items-center ">
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 p-4 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <AiFillInstagram className="text-4xl group-hover:text-black group-hover:text-black hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 p-4 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <AiFillFacebook className="text-4xl group-hover:text-black   group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 p-4 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <AiFillTwitterCircle className="text-4xl  group-hover:text-black group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 p-4 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <FaTiktok className="text-4xl  group-hover:text-black  group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 p-4 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <BsApple className="text-4xl group-hover:text-black   group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 p-4 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <BsSpotify className="text-4xl group-hover:text-black  group-hover:scale-110 duration-300  mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 p-4 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <BsSnapchat className="text-4xl group-hover:text-black group-hover:scale-110 duration-300 mx-2 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 p-4 group hover:bg-white duration-300  ease-in-out  cursor-pointer   "
        >
          <SiTwitch className="text-4xl group-hover:text-black   group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
      </section>
    </div>
  );
};

export default Footer;
