import React from "react";

const Cart = () => {
  return (
    <div className="">
      <div className="py-20">
        <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
          <div className="md:flex ">
            <div className="w-full p-4 px-5 py-5">
              <div className="md:grid md:grid-cols-3 gap-2 ">
                <div className="col-span-2 p-5">
                  <h1 className="text-xl font-medium ">Shopping Cart</h1>

                  <div className="flex justify-between items-center pt-6 mt-6 border-t">
                    <div className="flex  items-center">
                      <img
                        src="https://i.imgur.com/Uv2Yqzo.jpg"
                        width="60"
                        className="rounded-full "
                      />

                      <div className="flex flex-col ml-3 ">
                        <span className="text-md font-medium w-auto">
                          Spicy Mexican potatoes
                        </span>
                        <span className="text-xs font-light text-gray-400">
                          #66999
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center items-center">
                      <div className="pr-8 flex">
                        <span className="font-semibold">-</span>
                        <input
                          type="text"
                          className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                          value="1"
                        />
                        <span className="font-semibold">+</span>
                      </div>

                      <div className="pr-8">
                        <span className="text-xs font-medium">$10.50</span>
                      </div>
                      <div>
                        <i className="fa fa-close text-xs font-medium"></i>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-6 pt-6">
                    <div className="flex  items-center">
                     

                      <div className="flex flex-col ml-3">
                        <span className="md:text-md font-medium">
                          Chicken momo
                        </span>
                        <span className="text-xs font-light text-gray-400">
                          #41551
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center items-center">
                      <div className="pr-8 flex ">
                        <span className="font-semibold">-</span>
                        <input
                          type="text"
                          className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                          value="1"
                        />
                        <span className="font-semibold">+</span>
                      </div>

                      <div className="pr-8 ">
                        <span className="text-xs font-medium">$10.50</span>
                      </div>
                      <div>
                        <i className="fa fa-close text-xs font-medium"></i>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-6 border-t">
                    <div className="flex items-center">
                      <i className="fa fa-arrow-left text-sm pr-2"></i>
                      <span className="text-md  font-medium text-blue-500">
                        Continue Shopping
                      </span>
                    </div>

                    <div className="flex justify-center items-end">
                      <span className="text-sm font-medium text-gray-400 mr-1">
                        Subtotal:
                      </span>
                      <span className="text-lg font-bold text-gray-800 ">
                        {" "}
                        $24.90
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" p-5 bg-gray-800 rounded overflow-visible">
                  <span className="text-xl font-medium text-gray-100 block pb-3">
                    Card Details
                  </span>

                  <span className="text-xs text-gray-400 ">Card Type</span>

                  <div className="overflow-visible flex justify-center items-center mt-2">
                    <div className="flex justify-center  items-center flex-col">
                      <img
                        src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
                        className="relative w-[100%] h-[100%] object-contain"
                      />
                      <span className="text-xs font-medium text-gray-200 bottom-2 text-center">
                        mastercard.
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center flex-col pt-3">
                    <label className="text-xs text-center text-gray-400 ">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                      placeholder="Giga Tamarashvili"
                    />
                  </div>

                  <div className="flex justify-center flex-col pt-3">
                    <label className="text-xs text-gray-400 ">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                      placeholder="****     ****      ****      ****"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
                    <div className="col-span-2 ">
                      <label className="text-xs text-gray-400">
                        Expiration Date
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                          placeholder="mm"
                        />
                        <input
                          type="text"
                          className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                          placeholder="yyyy"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label className="text-xs text-gray-400">CVV</label>
                      <input
                        type="text"
                        className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                        placeholder="XXX"
                      />
                    </div>
                  </div>

                  <button className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">
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
