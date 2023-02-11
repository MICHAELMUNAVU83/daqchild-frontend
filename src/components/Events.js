import React, { useState, useEffect } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import moment from "moment";
import { AiOutlineSmallDash } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";
const Events = () => {
  const dateformat = moment().format("dddd");
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
    <div>
      {events.length > 0 && (
        <div className="flex flex-col md:flex-row justify-around pt-10">
          <div>
            <h2 className="text-6xl  font-bold">KING OF GOOD TIMES </h2>

            <h2 className="text-3xl  font-bold"> THIS WEEKS' EVENT SCHEDULE</h2>

            <ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Individual configuration</span>
              </li>
            </ul>

            {events.map((event) => (
              <div className="text-start">
                <div className="flex ">
                  <h2 className="text-2xl  font-bold">{event.location}</h2>
                  <AiOutlineCaretRight className="text-3xl animate-bounce" />
                  <p className="text-2xl font-bold">
                    {moment(event.date).format("dddd")}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-1/2">
            <Splide
              options={{
                perPage: 1,
                perMove: 1,
                rewind: true,
                gap: "1rem",
                pagination: true,
                autoplay: true,
                drag: true,
                interval: 4000,
                arrows: true,
                loop: "true",
              }}
            >
              {events.map((event) => (
                <SplideSlide key={event.id}>
                  <img
                    src={event.poster}
                    alt="event poster"
                    className="w-[100%]  md:px-0 px-4 h-96 "
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
