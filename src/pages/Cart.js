import React, { useContext, useState, useEffect } from "react";
import { RoomContext } from "../context";
import mpesa from "./mpesa.png";
const Cart = () => {
  const { saved, removeFromArray } = useContext(RoomContext);
 

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (saved.length > 0) {
      let total = 0;
      saved.forEach((product) => {
        total += Number(product.price)
      });
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  });

  const savedItems =
    saved.length > 0 &&
    saved.map((item) => (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center pt-6 mt-6 border-t">
          <div className="flex  items-center">
            <img
              src={item.product_image}
              width="60"
              className="rounded-full "
              alt="product "
            />

            <div className="flex flex-col ml-3 ">
              <span className="text-md font-medium w-auto">{item.name}</span>
              <span className="text-xs font-light text-gray-400">
                Daqchild Merchandise
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="pr-8 flex">
              <span className="font-semibold">-</span>
              <p>1</p>
              <span className="font-semibold">+</span>
            </div>

            <div className="pr-8">
              <span className="text-xs font-medium">KSh {item.price}</span>
            </div>
            <div>
              <i className="fa fa-close text-xs font-medium"></i>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-2 mt-2 ">
          <div className="md:w-1/2">
            <p>Select color</p>
            <select className="bg-gray-100 border  w-56 p-4  rounded text-sm  mx-2">
              {item.colors.map((color) => (
                <option value={color.name}>{color.name}</option>
              ))}
            </select>
          </div>

          <div className="md:-1/2">
            <p>Select Size</p>
            <select className="bg-gray-100 border  w-56 p-4  rounded text-sm  mx-2">
              {item.sizes.map((size) => (
                <option value={size.name}>{size.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="text-center  ">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={() => removeFromArray(item.id)}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    ));
  return (
    <div className="">
      <div className="py-20">
        <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
          <div className="md:flex ">
            <div className="w-full p-4 px-5 py-5">
              <div className="md:grid md:grid-cols-3 gap-2 ">
                <div className="col-span-2 p-5">
                  <h1 className="text-xl font-medium ">Shopping Cart</h1>
                  {/* Each cart */}
                  {saved.length > 0 ? (
                    savedItems
                  ) : (
                    <div className="flex justify-center items-center">
                      <span className="text-md font-medium text-gray-400">
                        Your cart is empty
                      </span>
                    </div>
                  )}

                  {/* Each cart */}

                  <div className="flex justify-between items-center mt-6 pt-6 border-t">
                    <div className="flex items-center">
                      <i className="fa fa-arrow-left text-sm pr-2"></i>
                      <span className="text-md  font-medium text-blue-500">
                        Continue Shopping
                      </span>
                    </div>

                    <div className="flex justify-center items-end">
                      <span className="text-lg font-medium text-gray-400 mr-1">
                        Subtotal:
                      </span>
                      <span className="text-lg font-bold text-gray-800 ">
                        {" "}
                        KSh {totalPrice}
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" p-5 bg-gray-800 rounded overflow-visible">
                  <span className="text-xl font-medium text-gray-100 block pb-3">
                    Lipa na Mpesa
                  </span>

                  <div className="overflow-visible flex justify-center items-center mt-2">
                    <div className="flex justify-center  items-center flex-col">
                      <img
                        src={mpesa}
                        className="relative w-[100%] h-[100%] object-contain"
                      />
                      <span className="text-xs font-medium text-gray-200 bottom-2 text-center">
                        Pay with Mpesa
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center flex-col pt-3">
                    <label className="text-xs text-gray-400 ">
                      Your Phone Number
                    </label>
                    <input
                      type="text"
                      className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  <button className="h-12 mt-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
