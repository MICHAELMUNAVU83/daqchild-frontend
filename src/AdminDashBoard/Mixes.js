import React, { useState, useEffect } from "react";
import MixAudio from "./MixAudio";

const Mixes = () => {
  const [mixes, setMixes] = useState([]);
  useEffect(() => {
    fetch("https://gibbz-tha-daqchild-api.herokuapp.com/mixes")
      .then((response) => response.json())
      .then((data) => setMixes(data));
  }, [mixes]);

  const deleteMix = (id) => {
    fetch(`https://gibbz-tha-daqchild-api.herokuapp.com/mixes/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setMixes(mixes.filter((mix) => mix.id !== id));
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead className="text-white">
            {mixes.map((mix) => (
              <tr className="bg-[#9d6ef4]  flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                {window.innerWidth > 768 && (
                  <th className="p-3 text-left">Poster</th>
                )}

                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left md:h-auto h-[100px]">Audio</th>
                <th className="p-3 text-left" width="110px">
                  Actions
                </th>
              </tr>
            ))}
          </thead>
          <tbody className="flex-1 sm:flex-none">
            {mixes.map((mix) => (
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                {window.innerWidth > 768 && (
                  <td className="border-grey-light border hover:bg-gray-100 p-3">
                    <img
                      className="w-24 h-24 rounded-full"
                      alt="gibbz tha daqchild event poster"
                      src={mix.poster}
                    />
                  </td>
                )}
                <td className="border-grey-light border text-xs md:text-md hover:bg-gray-100 p-3">
                  {mix.name}
                </td>
                <td className="border-grey-light border  p-3 truncate">
                  <MixAudio mix={mix} />
                </td>
                <td
                  className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"
                  onClick={() => deleteMix(mix.id)}
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

export default Mixes;
