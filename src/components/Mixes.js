import React, { useEffect } from "react";
import Mix from "./Mix";
import { Link } from "react-router-dom";
const Mixes = ({ mixes }) => {
  // const [mixes, setMixes] = useState([]);
  // useEffect(() => {
  //   fetch("https://gibbz-tha-daqchild-api.herokuapp.com/latest_mixes")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMixes(data);
  //     });
  // }, [mixes]);
  useEffect(() => {
    console.log("mixes", mixes);
  }, [mixes]);

  const mixDisplay =
    mixes.length > 0 &&
    mixes.map((mix) => (
      <div key={mix.id}>
        <Mix mix={mix} />
      </div>
    ));

  return (
    <div id="mixes" className="bg-black  py-6 ">
      <h1 className="mt-4 ml-2 ">
        <span className="text-4xl text-[#9d6ef4] font-bold krona">
          Latest Mixes
        </span>
      </h1>
      <p className="text-white ml-2 text-sm  roboto md:text-md mb-2">
        Listen to Daqchild's latest mixes including live sets, sets from the
        lockdown sessions and more.
      </p>

      <div className="flex bakbak  justify-center">
        <div className="grid mt-4  md:grid-cols-2 md:gap-20 gap-10 grid-cols-1">
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
