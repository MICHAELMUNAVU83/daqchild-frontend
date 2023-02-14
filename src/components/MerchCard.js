import React from "react";
import { Link } from "react-router-dom";
const MerchCard = ({ product }) => {
  return (
    <Link
      className="group relative block mx-4 bg-pink-500/80"
      to={`/products/${product.id}`}
    >
      <img
        alt="Developer"
        src={product.product_image}
        className="absolute inset-0 h-[400px] w-full object-cover opacity-80 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-8 ">
        <p className="text-sm bg-white w-[50%] py-2 text-center  font-bold uppercase  text-black">
          {product.name}
        </p>

        <p className="text-2xl font-bold text-white">Ksh {product.price} </p>

        <div className="mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{product.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MerchCard;
