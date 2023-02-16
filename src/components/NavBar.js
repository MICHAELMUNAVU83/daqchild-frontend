import React, { useState, useEffect } from "react";
import { ImCross, ImPlus } from "react-icons/im";

import J6 from "./images/J6.jpg";
import J11 from "./images/J11.jpg";
import V1 from "./images/v1.jpg";
import V2 from "./images/v2.jpg";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const images = [J6, J11, V1, V2, J6];
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const changeImage = () => {
    setTimeout(() => {
      setCurrent(current === images.length - 1 ? 0 : current + 1);
    }, 500);
  };
  const location = useLocation();

  useEffect(() => {
    if (window.scrollY >= 200 && location.pathname === "/") {
      setBackgroundColor("pink");
      setTextColor("black");
    } else if (location.pathname !== "/") {
      setBackgroundColor("pink");
      setTextColor("black");
    } else if (location.pathname === "/" && window.scrollY < 200) {
      setBackgroundColor("transparent");
      setTextColor("white");
    }

    
  }, [location.pathname, window.scrollY]);

  return (
    <div
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300  p-4 "
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <section className="flex justify-between ">
        <div className="flex  " style={{ color: `${textColor}` }}>
          <ImCross className="text-3xl mx-2" />
          <ImPlus className="text-3xl" />
        </div>

        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex group cursor-pointer"
        >
          <div>
            <p
              style={{ backgroundColor: `${textColor}` }}
              className="md:h-3 h-2 md:w-10 w-8 my-1 group-hover:rotate-90  duration-500 ease-in-out"
            />
            <p
              style={{ backgroundColor: `${textColor}` }}
              className="md:h-3 h-2 md:w-10 w-8  group-hover:absolute top-5  duration-500 ease-in-out"
            />
          </div>
          <div>
            <p
              style={{ color: `${textColor}` }}
              className="md:text-3xl text-xl  font-bold mx-2 "
            >
              MENU
            </p>
          </div>
        </div>
        <div
          className={
            isOpen
              ? "absolute top-0 z-10 right-0 bottom-0 left-0 w-full h-[130vh] md:h-[100vh] bg-black text-white duration-500 ease-in"
              : "absolute top-0 right-0 left-[-120%] bottom-0 flex justify-center items-center w-full h-screen bg-black/70 text-white duration-500 ease-out"
          }
        >
          <div
            className="flex justify-end pr-6 pt-3 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ImCross className="text-3xl " />
          </div>
          <div className="flex md:justify-around md:flex-row flex-col items-center gap-10">
            <ol
              className=" list-[upper-roman] ml-10"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <li
                className="text-2xl border-b-2 hover:border-white duration-600 ease-in-out border-gray-600 w-72 md:w-96 p-4 cursor-pointer"
                onMouseEnter={changeImage}
              >
                <div className="flex align-baseline text-gray-300 hover:text-white">
                  <Link to="/" className="flex ">
                    <p className="md:text-3xl text-xl font-bold uppercase">
                      Home
                    </p>

                    <small className="font-normal text-sm md:mt-3 mt-2  ml-2">
                      homepage
                    </small>
                  </Link>
                </div>
              </li>
              <li
                onMouseEnter={changeImage}
                className="text-2xl border-b-2 hover:border-white duration-600 ease-in-out border-gray-600 w-72 md:w-96 p-4 cursor-pointer"
              >
                <div className="flex align-baseline text-gray-300 hover:text-white">
                  <Link to="/add-mix" className="flex ">
                    <p className="md:text-3xl text-xl font-bold uppercase">
                      Add Mix
                    </p>
                    <small className="font-normal text-sm md:mt-3 mt-2   ml-2">
                      homepage
                    </small>
                  </Link>
                </div>
              </li>
              <li
                onMouseEnter={changeImage}
                className="text-2xl border-b-2 hover:border-white duration-600 ease-in-out border-gray-600 w-72 md:w-96 p-4 cursor-pointer"
              >
                <div className="flex align-baseline text-gray-300 hover:text-white">
                  <Link to="/add-events" className="flex ">
                    <p className="md:text-3xl text-xl font-bold uppercase">
                      Add Events
                    </p>
                    <small className="font-normal text-sm md:mt-3 mt-2   ml-2">
                      events
                    </small>
                  </Link>
                </div>
              </li>
              <li
                onMouseEnter={changeImage}
                className="text-2xl border-b-2 hover:border-white duration-600 ease-in-out border-gray-600 w-72 md:w-96 p-4 cursor-pointer"
              >
                <div className="flex align-baseline text-gray-300 hover:text-white">
                  <Link to="/add-merch" className="flex ">
                    <p className="md:text-3xl text-xl font-bold uppercase">
                      Add Merch
                    </p>

                    <small className="font-normal text-sm md:mt-3 mt-2   ml-2">
                      add merchandises
                    </small>
                  </Link>
                </div>
              </li>
              <li
                onMouseEnter={changeImage}
                className="text-2xl border-b-2 hover:border-white duration-600 ease-in-out border-gray-600 w-72 md:w-96 p-4 cursor-pointer"
              >
                <div className="flex align-baseline text-gray-300 hover:text-white">
                  <p className="md:text-3xl text-xl font-bold uppercase">
                    Home
                  </p>
                  <small className="font-normal text-sm md:mt-3 mt-2   ml-2">
                    homepage
                  </small>
                </div>
              </li>
            </ol>

            <motion.div
              className="text-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={images[current]}
                alt="navbarImage"
                className=" md:h-96 md:w-96   h-80"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
