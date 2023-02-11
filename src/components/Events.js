import React, { useState, useEffect } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import moment from "moment";
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
            <h2 className="text-4xl  font-bold">KING OF GOOD TIMES EVENTS</h2>
            {events.map((event) => (
              <div className="flex flex-col md:flex-row justify-around pt-10">
                <div className="md:w-1/2">
                  <h2 className="text-4xl  font-bold">{event.location}</h2>
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
