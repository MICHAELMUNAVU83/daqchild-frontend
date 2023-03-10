import React from "react";
import Events from "../AdminDashBoard/Events";
import Mixes from "../AdminDashBoard/Mixes";
import ExtraNavbar from "../components/ExtraNavbar";
import ExtrAdminNavBar from "../components/ExtraAdminNavbar";
import Merch from "../AdminDashBoard/Merch";
const DashBoard = ({ storedToken, setStoredToken }) => {
  return (
    <>
      {storedToken ? (
        <ExtrAdminNavBar setStoredToken={setStoredToken} />
      ) : (
        <ExtraNavbar />
      )}
      <div className="mt-20">
        <h1 className="text-center">
          <span className="text-7xl my-2 text-center font-bold">Events</span>
        </h1>
        <Events />
        <h1 className="text-center">
          <span className="text-7xl my-2 text-center font-bold">Mixes</span>
        </h1>
        <Mixes />
        <h1 className="text-center">
          <span className="text-7xl my-2 text-center font-bold">Merch</span>
        </h1>
        <Merch />
      </div>
    </>
  );
};

export default DashBoard;
