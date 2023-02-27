import React, { useState, useEffect } from "react";

import ExtraNavbar from "../components/ExtraNavbar";
import Mix from "../components/Mix";
import ExtrAdminNavBar from "../components/ExtraAdminNavbar";
const Mixes = ({ setStoredToken, storedToken }) => {
  const [mixes, setMixes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/mixes")
      .then((response) => response.json())
      .then((data) => {
        setMixes(data);
      });
  }, [mixes]);

  const mixDisplay =
    mixes.length > 0 &&
    mixes.map((mix) => (
      <Mix
        key={mix.id}
        mix={mix}
        // handleDownload={handleDownload}
      />
    ));

  return (
    <>
      {storedToken ? (
        <ExtrAdminNavBar setStoredToken={setStoredToken} />
      ) : (
        <ExtraNavbar />
      )}
      <div className="bg-black min-h-[100vh] pt-20">
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 md:gap-20 gap-10 grid-cols-1">
            {mixDisplay}
          </div>
        </div>
        <div className="flex justify-center mt-10"></div>
      </div>
    </>
  );
};

export default Mixes;
