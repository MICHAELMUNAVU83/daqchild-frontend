import React, { useState, useEffect } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import moment from "moment";
import { ImMusic } from "react-icons/im";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      });
  }, []);

  return (
    <div className="py-8  ">
      {events.length > 0 && (
        <div className="flex flex-col md:flex-row justify-around pt-10">
          <div>
            <h2 className="text-6xl   font-bold">KING OF GOOD TIMES </h2>

            <h2 className="text-3xl text-gray-900  font-bold underline "
              
            >
              {" "}
              THIS WEEKS' EVENT SCHEDULE
            </h2>
            <ul className="flex flex-col bg-[#9d6ef4] p-4 rounded-lg mt-4 ">
              {events.map((event) => (
                <li className="border-gray-400 flex flex-row mb-2 h-[50px]">
                  <div className="select-none cursor-pointer text-white bg-black  flex flex-1 items-center p-2  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex flex-col rounded-md w-8 h-8 bg-[#9d6ef4] p-2 justify-center items-center mr-4">
                      <ImMusic className="text-2xl text-white" />
                    </div>
                    <div className="flex-1 pl-1 mr-16">
                      <div className="font-medium">
                        {" "}
                        {moment(event.date).format("dddd")}{" "}
                      </div>
                      <div className=" text-sm">
                        {moment(event.date).format("MMM Do YYYY")}{" "}
                      </div>
                    </div>
                    <div className=" text-3xl">{event.location} </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 md:pl-32">
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
                    className="w-[100%] rounded-2xl md:px-0 px-4 h-[500px] "
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
