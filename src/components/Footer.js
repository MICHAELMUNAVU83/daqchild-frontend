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
      <section className="w-full md:w-full  flex-wrap flex bg-dark   justify-center items-center mx-auto">
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 group p-4 hover:bg-white duration-300  ease-in-out   "
        >
          <AiFillInstagram className="text-4xl group-hover:text-black group-hover:text-black hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 p-4   border-l-0  group hover:bg-white duration-300  ease-in-out "
        >
          <AiFillFacebook className="text-4xl group-hover:text-black   group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 md:border-r-0 p-4 cursor-pointer  border-l-0 group hover:bg-white duration-300  ease-in-out  "
        >
          <AiFillTwitterCircle className="text-4xl  group-hover:text-black group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2  border-l-0 md:border-l-2 md:border-t-2 group hover:bg-white duration-300  ease-in-out    p-4 cursor-pointer    "
        >
          <FaTiktok className="text-4xl  group-hover:text-black  group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 border-t-0 p-4 group hover:bg-white duration-300  ease-in-out  cursor-pointer  md:border-l-0 md:border-t-2   "
        >
          <BsApple className="text-4xl group-hover:text-black   group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 group hover:bg-white duration-300  ease-in-out  border-t-0 p-4 cursor-pointer   border-l-0 md:border-t-2  "
        >
          <BsSpotify className="text-4xl group-hover:text-black  group-hover:scale-110 duration-300  mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 border-t-0 p-4 group hover:bg-white duration-300  ease-in-out  cursor-pointer   border-l-0  md:border-t-2 "
        >
          <BsSnapchat className="text-4xl group-hover:text-black group-hover:scale-110 duration-300 mx-2 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/"
          className="border-white border-2 p-4  group hover:bg-white duration-300  ease-in-out   border-t-0 border-l-0 md:border-t-2  "
        >
          <SiTwitch className="text-4xl group-hover:text-black   group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
      </section>
    </div>
  );
};

export default Footer;
