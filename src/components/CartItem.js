import React from "react";

const CartItem = ({ item, removeFromArray }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center pt-6 mt-6 border-t">
        <div className="flex  items-center">
          <img
            src={item.product_image}
            width="60"
            className="rounded-full "
            alt="gibbz tha daqchild product "
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
  );
};

export default CartItem;
