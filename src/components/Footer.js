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
      <p>Follow me</p>
      <section className="w-56 md:w-full flex-wrap flex bg-dark   justify-center items-center mx-auto">
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 p-2    "
        >
          <AiFillInstagram className="text-4xl   hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 p-2   border-l-0  "
        >
          <AiFillFacebook className="text-4xl   hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 md:border-r-0 p-2 cursor-pointer  border-l-0  "
        >
          <AiFillTwitterCircle className="text-4xl   hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 border-t-0 md:border-t-2 md:border-r-2 border-r-0 border-l-2 p-2 cursor-pointer  border-l-0  "
        >
          <FaTiktok className="text-4xl   hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 border-t-0 p-2 cursor-pointer  md:border-l-0 md:border-t-2   "
        >
          <BsApple className="text-4xl   hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 border-t-0 p-2 cursor-pointer   border-l-0 md:border-t-2  "
        >
          <BsSpotify className="text-4xl  hover:scale-110 duration-300  mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 border-t-0 p-2 cursor-pointer   border-l-2 md:border-l-0  md:border-t-2 "
        >
          <BsSnapchat className="text-4xl hover:scale-110 duration-300 mx-2 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 p-2   border-t-0 border-l-0 md:border-t-2  "
        >
          <SiTwitch className="text-4xl    hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
      </section>
    </div>
  );
};

export default Footer;
