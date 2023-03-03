import React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaMixcloud } from "react-icons/fa";
import { ImPlus, ImCross } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="bg-black h-full text-white md:p-4 p-2 z-0 ">
      <p className="text-center p-3 krona text-[#9d6ef4] text-4xl">FOLLOW ME</p>
      <section className="w-full md:w-full  flex-wrap flex bg-dark   justify-center items-center ">
        <a
          href="https://www.instagram.com/tha_daqchild/"
          rel="noopener noreferrer"
          target="_blank"
          className=" md:p-4 p-2 group hover:bg-purple-500 duration-300  ease-in-out  cursor-pointer   "
          style={{ border: "1px solid white" }}
        >
          <AiFillInstagram className="text-4xl  group-hover:text-black hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.facebook.com/darkchild.mudoga/"
          rel="noopener noreferrer"

          target="_blank"
          className=" md:p-4 p-2 group hover:bg-purple-500 duration-300  ease-in-out  cursor-pointer   "
          style={{ border: "1px solid white" }}
        >
          <FaFacebookF className="text-4xl group-hover:text-black   group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://twitter.com/thadaqchild"
          rel="noopener noreferrer"
          target="_blank"
          style={{ border: "1px solid white" }}
          className=" md:p-4 p-2 group hover:bg-purple-500 duration-300  ease-in-out  cursor-pointer   "
        >
          <AiFillTwitterCircle className="text-4xl  group-hover:text-black group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
        <a
          href="https://www.tiktok.com/@gibbzthadaqchild"
          rel="noopener noreferrer"
          style={{ border: "1px solid white" }}
          className=" md:p-4 p-2 group hover:bg-purple-500 duration-300  ease-in-out  cursor-pointer   "
        >
          <IoLogoTiktok className="text-4xl  group-hover:text-black  group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>

        <a
          href="tel:0720038150"
          rel="noopener noreferrer"
          target="_blank"
          style={{ border: "1px solid white" }}
          className=" md:p-4 p-2 group hover:bg-purple-500 duration-300  ease-in-out  cursor-pointer   "
        >
          <FiPhoneCall className="text-4xl group-hover:text-black group-hover:scale-110 duration-300 mx-2 cursor-pointer" />
        </a>
        <a
          href="tel:0720038150"
          rel="noopener noreferrer"
          target="_blank"
          style={{ border: "1px solid white" }}
          className=" md:p-4 p-2 group hover:bg-purple-500 duration-300  ease-in-out  cursor-pointer   "
        >
          <FaWhatsapp className="text-4xl group-hover:text-black group-hover:scale-110 duration-300 mx-2 cursor-pointer" />
        </a>
        <a
          href="https://www.mixcloud.com/Thadaqchild/"
          style={{ border: "1px solid white" }}
          target="_blank"
          className=" md:p-4 p-2 group hover:bg-purple-500 duration-300  ease-in-out  cursor-pointer   "
        >
          <FaMixcloud className="text-4xl group-hover:text-black   group-hover:scale-110 duration-300 mx-2 cursor-pointer " />
        </a>
      </section>

      <section className="flex flex-col mt-10 md:gap-24 gap-10 md:flex-row justify-center my-4 items-center">
        <div className="flex flex-col group justify-center items-center ">
          <p className="text-center p-3  text-[#9d6ef4] text-4xl krona">
            MIXES
          </p>
          <p className="text-center p-1 group-hover:text-white text-gray-400 ">
            Video Mixes
          </p>
          <p className="text-center p-1 group-hover:text-white text-gray-400  ">
            Audio Mixes
          </p>
          <p className="text-center p-1 group-hover:text-white text-gray-400  ">
            Live Mixes
          </p>
        </div>
        <div className="flex flex-col group justify-center items-center">
          <p className="text-center p-3 text-[#9d6ef4] krona text-4xl">
            Merchandise
          </p>
          <p className="text-center p-1 group-hover:text-white  text-gray-400  ">
            T-Shirts
          </p>
          <p className="text-center p-1 group-hover:text-white  text-gray-400  ">
            Hoodies
          </p>
          <p className="text-center p-1 group-hover:text-white text-gray-400  ">
            Caps
          </p>
        </div>

        <div className="flex flex-col group justify-center items-center">
          <p className="text-center p-3 text-[#9d6ef4] krona text-4xl">
            Contact
          </p>
          <p className="text-center p-1 group-hover:text-white text-gray-400 ">
            gibbzmudoga@gmail.com {""}
          </p>
          <p className="text-center p-1 group-hover:text-white  text-gray-400  ">
            + 254 720 038 150
          </p>
          <p className="text-center p-1  group-hover:text-white text-gray-400  ">
            @the_daqchild
          </p>
        </div>
      </section>

      <section className="flex my-6 flex-row justify-between items-center">
        <div className="flex mx-2 group">
          <ImPlus className="text-6xl text-gray-300 group-hover:text-white md:text-4xl mx-2 cursor-pointer animate-bounce" />
          <ImCross className="text-6xl text-gray-300 group-hover:text-white md:text-4xl mx-2 cursor-pointer animate-bounce" />
        </div>
        <div className="flex  flex-col mx-2 items-start md:flex-row">
          <p className="text-center p-1  text-gray-400  ">© 2023</p>
          <p className="text-center p-1 flex flex-col align-start md:flex-row gap-2  text-gray-400  ">
            Developed by{" "}
            <a
              className="text-white"
              href="https://michael-munavu.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Michael Munavu
            </a>
          </p>
          <p className="text-center p-1  text-gray-400  ">
            All rights reserved
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
