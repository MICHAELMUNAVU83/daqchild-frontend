import React, { useState, useEffect } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import moment from "moment";
import { ImMusic } from "react-icons/im";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://gibbzthadaqchild-backend.onrender.com/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <div id="events" className="py-4  ">
      {events.length > 0 && (
        <div className="flex flex-col-reverse md:flex-row justify-around pt-10">
          <div>
            <h2 className="md:text-4xl ml-2 hidden md:block krona text-2xl  font-bold">
              KING OF GOOD TIMES{" "}
            </h2>

            <h2 className="md:text-5xl ml-2 hidden md:block text-3xl text-gray-900  font-bold bebas ">
              {" "}
              This week's events
            </h2>
            <ul className="flex flex-col p-4 mx-2 rounded-lg my-4 ">
              {events.map((event) => (
                <li className="border-gray-400 flex flex-row mb-2  md:h-[70px] h-[70px]">
                  <div className="select-none cursor-pointer p-2  md:p-4 rounded-2xl text-white bg-black  flex flex-1 items-center  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex flex-col rounded-md w-8 h-8 bg-[#9d6ef4] p-2 justify-center items-center mr-4">
                      <ImMusic className="text-2xl text-white" />
                    </div>
                    <div className="flex-1 pl-1 mr-16">
                      <div className="font-bold text-2xl dancing">
                        {" "}
                        {moment(event.date).format("dddd")}{" "}
                      </div>
                      <div className=" text-sm inter ">
                        {moment(event.date).format("MMM Do YYYY")}{" "}
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl bebas">
                      {event.location}{" "}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <button className="px-4 py-2 bg-[#9d6ef4] md:my-8 my-4  text-white hover:scale-110 transition duration-500 font-bold krona ease-in-out ">
                <a rel="noopener noreferrer" href="tel:0720038150">
                  BOOK NOW
                </a>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-32">
            <h2 className="md:text-4xl ml-2 md:hidden block krona text-2xl  font-bold">
              KING OF GOOD TIMES{" "}
            </h2>

            <h2 className="md:text-5xl ml-2 md:hidden block text-3xl text-gray-900  font-bold bebas ">
              {" "}
              This week's events
            </h2>

            <Splide
              options={{
                perPage: 1,
                perMove: 1,
                rewind: "true",
                gap: "1rem",
                pagination: true,
                autoplay: true,
                drag: true,
                interval: 3000,
                arrows: true,
                loop: "true",
              }}
            >
              {events.map((event) => (
                <SplideSlide key={event.id} className="w-[80%]">
                  <img
                    src={event.poster}
                    alt="event poster"
                    className="md:w-[100%] w-full md:rounded-2xl  rounded-3xl md:px-0 px-2 h-[350px] md:h-[500px] "
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
