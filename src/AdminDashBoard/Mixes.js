import React, { useState, useEffect } from "react";

const Mixes = () => {
  const [mixes, setMixes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/mixes")
      .then((response) => response.json())
      .then((data) => setMixes(data));
  }, [mixes]);

  const deleteMix = (id) => {
    fetch(`http://localhost:3000/mixes/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMixes(mixes.filter((mix) => mix.id !== id));
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead className="text-white">
            {mixes.map((mix) => (
              <tr className="bg-[#9d6ef4]  flex flex-col flex-no  h-full wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-left">Poster</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Mix Audio</th>
                <th className="p-3 text-left" width="110px">
                  Actions
                </th>
              </tr>
            ))}
          </thead>
          <tbody className="flex-1 sm:flex-none">
            {mixes.map((mix) => (
              <tr className="flex flex-col h-[100%] flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td className="border-grey-light  border hover:bg-gray-100 p-3">
                  {mix.name}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                  <img className="w-24 h-24" src={mix.poster} alt={mix.name} />
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                  <audio controls>
                    <source src={mix.audio_mp3} type="audio/mp3" style={{width: "200px"}} />
                  </audio>
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => deleteMix(mix.id)}
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

export default Mixes;
