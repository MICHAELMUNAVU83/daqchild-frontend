import React, { useContext, useState, useEffect } from "react";
import { RoomContext } from "../context";
import mpesa from "./mpesa.png";
import ExtraNavbar from "../components/ExtraNavbar";
import ExtrAdminNavBar from "../components/ExtraAdminNavbar";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
const Cart = ({ setStoredToken, storedToken }) => {
  const { saved, removeFromArray, addQuantity } = useContext(RoomContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (saved.length > 0) {
      let total = 0;
      saved.forEach((product) => {
        total += Number(product.price);
      });
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [saved]);

  const savedItems =
    saved.length > 0 &&
    saved.map((item) => (
      <CartItem
        key={item.id}
        item={item}
        removeFromArray={removeFromArray}
        saved={saved}
        addQuantity={addQuantity}
      />
    ));
  return (
    <>
      {storedToken ? (
        <ExtrAdminNavBar setStoredToken={setStoredToken} />
      ) : (
        <ExtraNavbar />
      )}
      <div className="">
        <div className="py-20">
          <div className="max-w-md mx-auto bg-gray-100 shadow-purple-500  shadow-lg rounded-lg  md:max-w-5xl">
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
                          <Link to="/">Continue Shopping</Link>
                        </span>
                      </div>

                      <div className="flex justify-center items-end">
                        <span className="text-lg font-medium text-gray-400 mr-1">
                          Subtotal:
                        </span>
                        <span className="md:text-lg text-md font-bold text-gray-800 ">
                          {" "}
                          KSh {totalPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" p-5 bg-black rounded overflow-visible">
                    <span className="text-xl font-medium text-gray-100 block pb-3">
                      Lipa na Mpesa
                    </span>

                    <div className="overflow-visible flex justify-center items-center mt-2">
                      <div className="flex justify-center  items-center flex-col">
                        <img
                          src={mpesa}
                          className="relative w-[100%] h-[100%] object-contain"
                          alt="gibbz tha daqchild mpesa"
                        />
                        <span className="text-xs font-medium text-[#9d6ef4] bottom-2 text-center">
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
                        className="focus:outline-none w-full h-6 bg-black text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                        placeholder="+254 700 000 000"
                      />
                    </div>

                    <button className="h-12 mt-12 w-full  bg-[#9d6ef4] rounded focus:outline-none text-white hover:bg-purple-500">
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
