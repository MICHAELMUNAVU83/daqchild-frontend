import React, { useState, useEffect } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import moment from "moment";
import { FaHandPointRight } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";

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
    <div className="py-3  ">
      {events.length > 0 && (
        <div className="flex flex-col md:flex-row justify-around pt-10">
          <div>
            <h2 className="text-6xl  font-bold">KING OF GOOD TIMES </h2>

            <h2 className="text-3xl  font-bold border-b-2 border-pink-600">
              {" "}
              THIS WEEKS' EVENT SCHEDULE
            </h2>

            {events.map((event) => (
              <div className="text-start">
                <div className="flex ">
                  <p className="text-2xl font-bold">
                    {moment(event.date).format("dddd")}
                  </p>
                  <FaHandPointRight className="text-2xl font-bold mt-2 mx-2" />
                  <h2 className="text-2xl  font-bold">{event.location}</h2>
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
                    className="w-[100%] rounded-2xl md:px-0 px-4 h-96 "
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
