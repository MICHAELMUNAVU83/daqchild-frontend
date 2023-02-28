import React, { useState, useEffect } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://gibbzthadaqchild-backend.onrender.com/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, [events]);

  const deleteEvent = (id) => {
    fetch(`https://gibbzthadaqchild-backend.onrender.com/events/${id}`, {
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
        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead className="text-white">
            {events.map((event) => (
              <tr className="bg-[#9d6ef4]  flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                {window.innerWidth > 768 && (
                  <th className="p-3 text-left">Poster</th>
                )}

                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left" width="110px">
                  Actions
                </th>
              </tr>
            ))}
          </thead>
          <tbody className="flex-1 sm:flex-none">
            {events.map((event) => (
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                {window.innerWidth > 768 && (
                  <td className="border-grey-light border hover:bg-gray-100 p-3">
                    <img
                      className="w-24 h-24 rounded-full"
                      alt="poster"
                      src={event.poster}
                    />
                  </td>
                )}
                <td className="border-grey-light border hover:bg-gray-100 p-3">
                  {event.location}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                  {event.date}
                </td>
                <td
                  className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"
                  onClick={() => deleteEvent(event.id)}
                >
                  Delete
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
