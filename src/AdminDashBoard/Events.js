import React, { useState, useEffect } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, [events]);

  const deleteEvent = (id) => {
    fetch(`http://localhost:3000/events/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvents(events.filter((event) => event.id !== id));
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <table className="w-full  flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead className="text-white h-[100%]">
            {events.map((event) => (
              <tr className="bg-[#9d6ef4] mb-8 flex flex-col flex-no  wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-left">Poster</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left" width="110px">
                  Actions
                </th>
              </tr>
            ))}
          </thead>
          <tbody className="flex-1 sm:flex-none h-[100%]">
            {events.map((event) => (
              <tr className="flex flex-col h-[100%] flex-no wrap sm:table-row pb-8 sm:mb-0">
                <td className="border-grey-light  border hover:bg-gray-100 p-3">
                  <img
                    className="h-[40px] w-[40px] mr-2 rounded-full"
                    src={event.poster}
                    alt={event.location}
                  />
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                  {event.location}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                  {event.date}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => deleteEvent(event.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
