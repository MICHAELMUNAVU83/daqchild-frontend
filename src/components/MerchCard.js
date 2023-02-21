import React from "react";
import { Link } from "react-router-dom";

const MerchCard = ({ product }) => {
  return (
    <div className="container hover:shadow-lg ">
      <div className=" bg-black shadow-lg rounded-xl p-4 ">
        <div className="flex flex-col ">
          <div className="">
            <div className="h-62 w-full mb-3">
              <div className="flex  justify-center  bg-gradient-to-b  from-purple-600 via  overflow-hidden rounded-md md:w-[350px] md:h-[300px] w-[320px] h-[270px]">
                <img
                  src={product.product_image}
                  alt="Just a flower"
                  className=" object-cover md:mr-2  object-fill  rounded-2xl h-[250px] w-[300px]"
                />
              </div>
            </div>
            <div className="flex-auto justify-evenly">
              <div className="flex flex-wrap ">
                <div className="w-full flex-none text-sm flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-purple-500 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-400 krona whitespace-nowrap mr-3">
                    Daqchild Merch
                  </span>
                  <span className="mr-2 comfortaa roboto text-gray-400">Kenya</span>
                </div>
                <div className="flex items-center w-full justify-between min-w-0 ">
                  <h2 className="text-2xl bebas mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                    {product.name}
                  </h2>
                  <div className="flex carter items-center font-bold bg-green-400/80 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                    INSTOCK
                  </div>
                </div>
              </div>
              <div className="text-xl krona text-white font-semibold mt-1">
                Ksh {product.price}
              </div>

              <div className="flex space-x-2 kanit text-sm font-bold my-2 justify-center">
                <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                  <Link to={`/products/${product.id}`}>
                    View {product.name}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchCard;
