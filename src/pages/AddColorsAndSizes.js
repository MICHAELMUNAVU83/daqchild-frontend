import React, { useState } from "react";
import ExtraNavbar from "../components/ExtraNavbar";
import ExtrAdminNavBar from "../components/ExtraAdminNavbar";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const AddColorsAndSizes = ({ storedToken, setStoredToken }) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const addColor = () => {
    if (color !== "") {
      fetch("https://gibbzthadaqchild-backend.onrender.com/colors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: color,
          product_id: Number(id),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            navigate(`/products/${id}`);
          }, 1000);
        });
    } else {
      toast.error("Please select a color", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const addSize = () => {
    if (size !== "") {
      fetch("https://gibbzthadaqchild-backend.onrender.com/sizes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: size,
          product_id: Number(id),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            navigate(`/products/${id}`);
          }, 1000);
        });
    } else {
      toast.error("Please select a size", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <>
        {storedToken ? (
          <ExtrAdminNavBar setStoredToken={setStoredToken} />
        ) : (
          <ExtraNavbar />
        )}
      </>

      <div className="mt-20 flex md:flex-row flex-col gap-2 justify-around">
        <div className="md:w-1/3 px-8 text-center">
          <label className="block mb-2 text-md font-medium text-gray-900 ">
            Select a color to add
          </label>
          <select
            className="bg-black border text-white border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          >
            <option selected value="">
              Choose a color
            </option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
            <option value="brown">Brown</option>
            <option value="grey">Grey</option>
          </select>

          <div className=" my-4 flex flex-col items-center">
            <button
              className="px-4 py-2 bg-[#9d6ef4] my-2  md:my-0 text-white hover:scale-110 transition duration-500 font-bold krona ease-in-out"
              onClick={() => {
                addColor();
              }}
            >
              Add Color
            </button>
          </div>
        </div>

        <div className="md:w-1/3 px-8 text-center">
          <label className="block mb-2 text-md font-medium text-gray-900 ">
            Select a size to add
          </label>
          <select
            className="bg-black border text-white border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          >
            <option selected value="">
              Choose a size
            </option>
            <option value="extra small">Extra Small</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra large">Extra Large</option>
            <option value="2xl">2xl</option>
            <option value="3xl">3xl</option>
          </select>

          <div className=" my-4 flex flex-col items-center">
            <button
              className="px-4 py-2 bg-[#9d6ef4] my-2  md:my-0 text-white hover:scale-110 transition duration-500 font-bold krona ease-in-out"
              onClick={() => {
                addSize();
              }}
            >
              Add Size
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddColorsAndSizes;
