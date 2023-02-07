import React from "react";
import { ImCross, ImPlus } from "react-icons/im";
const NavBar = () => {
  return (
    <div className="mb-20">
      <section className="flex justify-between p-4">
        <div className="flex ">
          <ImCross className="text-2xl " />
          <ImPlus className="text-2xl" />
        </div>

        <div className="group">
          <p className="h-2 w-8 bg-black my-1 group-hover:rotate-90  duration-500 ease-in-out" />
          <p className="h-2 w-8 bg-black group-hover:absolute top-5  duration-500 ease-in-out" />
        </div>
      </section>
    </div>
  );
};

export default NavBar;
