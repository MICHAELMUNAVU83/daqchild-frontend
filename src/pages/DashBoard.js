import React from "react";
import Events from "../AdminDashBoard/Events";
import ExtraNavbar from "../components/ExtraNavbar";
import ExtrAdminNavBar from "../components/ExtraAdminNavbar";
const DashBoard = ({ storedToken, setStoredToken }) => {
  return (
    <>
      {storedToken ? (
        <ExtrAdminNavBar setStoredToken={setStoredToken} />
      ) : (
        <ExtraNavbar />
      )}
      <div className="mt-20">
        <h1 className="text-2xl font-bold">DashBoard</h1>
        <Events />
      </div>
    </>
  );
};

export default DashBoard;