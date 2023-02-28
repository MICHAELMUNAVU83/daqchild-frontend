import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { RoomContext } from "../context";
import ExtraNavbar from "../components/ExtraNavbar";
import ExtraAdminNavbar from "../components/ExtraAdminNavbar";
const Product = ({ setStoredToken, storedToken }) => {
  const { addCart, saved, removeFromArray } = useContext(RoomContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://gibbzthadaqchild-backend.onrender.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);
  console.log(saved.length);

  const isInCart = saved.some((item) => item.id === product.id);

  return (
    <>
      {storedToken ? (
        <ExtraAdminNavbar setStoredToken={setStoredToken} />
      ) : (
        <ExtraNavbar />
      )}

      <section className="text-gray-700  body-font overflow-hidden bg-white">
        <div className="container px-5 py-20 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={product.product_image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-xl bebas  text-gray-500 tracking-widest">
                DAQCHILD MERCHANIDSE
              </h2>
              <h1 className="text-gray-900 krona text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>

                  <span className="text-gray-600 ml-3">
                    Highest Quality {product.name}
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a
                    className="text-gray-500"
                    href="https://www.instagram.com/"
                  >
                    <AiFillInstagram size={25} />
                  </a>
                  <a
                    className="ml-2 text-gray-500"
                    href="https://www.instagram.com/"
                  >
                    <RiWhatsappFill size={25} />
                  </a>
                  <a
                    className="ml-2 text-gray-500"
                    href="https://www.instagram.com/"
                  >
                    <AiFillTwitterCircle size={25} />
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex flex-col md:flex-row mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex my-4">
                  <span className="text-2xl bakbak md:mt-1 md:text-md">Colors:</span>
                  {product.colors &&
                    product.colors.map((color) => (
                      <button
                        className="border-2 md:mx-0 mx-1 border-gray-300 md:mt-2 rounded-full md:w-6 md:h-6  w-8  h-8 focus:outline-none"
                        style={{ backgroundColor: color.name }}
                      ></button>
                    ))}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="text-2xl bakbak  md:text-md">Sizes : </span>
                  <div className="relative">
                    <select className="rounded mx-2 md:mx-0 w-[200px] md:w-full border appearance-none border-gray-400 py-2 focus:outline-none focus:border-purple-500 text-base pl-3 pr-10">
                      <option selected>See Sizes</option>
                      {product.sizes &&
                        product.sizes.map((size) => (
                          <option>{size.name}</option>
                        ))}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium krona text-2xl text-gray-900">
                  KSH {product.price}
                </span>
                {isInCart ? (
                  <button
                    className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:scale-110 duration-300 ease-in-out rounded"
                    onClick={() => removeFromArray(product.id)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:scale-110 duration-300 ease-in-out rounded"
                    onClick={() => addCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {storedToken && (
          <div className="flex flex-col text-center w-full mb-16 ">
            <Link to={`/add-colors-and-sizes/${product.id}`}>
              <button className="flex mx-auto mt-4 text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Add Colors and Sizes
              </button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Product;
