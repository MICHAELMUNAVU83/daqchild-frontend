import React, { useState, useEffect } from "react";
import Mix from "./Mix";
import { Link } from "react-router-dom";
const Mixes = () => {
  const [mixes, setMixes] = useState([]);
  useEffect(() => {
    fetch("https://gibbzthadaqchild-backend.onrender.com/latest_mixes")
      .then((response) => response.json())
      .then((data) => {
        setMixes(data);
      });
  }, [mixes]);

  const mixDisplay =
    mixes.length > 0 &&
    mixes.map((mix) => (
      <div key={mix.id}>
        <Mix mix={mix} />
      </div>
    ));

  return (
    <div id="mixes" className="bg-black py-6 ">
      <h1 className="text-7xl krona text-white font-bold text-start ml-6 mt-10 pb-2">
        Latest Mixes
      </h1>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 md:gap-20 gap-10 grid-cols-1">
          {mixDisplay}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/mixes">
          <button className="px-4 py-2 bg-[#9d6ef4] my-16  md:my-0 text-white hover:scale-110 transition duration-500 font-bold krona ease-in-out ">
            ALL MIXES
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Mixes;
