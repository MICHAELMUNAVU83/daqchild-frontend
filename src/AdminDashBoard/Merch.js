import React, { useState, useEffect } from "react";

const Merch = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://gibbz-tha-daqchild-api.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [products]);

  const deleteProduct = (id) => {
    fetch(`https://gibbz-tha-daqchild-api.herokuapp.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(products.filter((product) => product.id !== id));
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead className="text-white">
            {products.map((product) => (
              <tr className="bg-[#9d6ef4]  flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                {window.innerWidth > 768 && (
                  <th className="p-3 text-left">Product Image</th>
                )}

                <th className="p-3 text-left">Product Name</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left" width="110px">
                  Actions
                </th>
              </tr>
            ))}
          </thead>
          <tbody className="flex-1 sm:flex-none">
            {products.map((product) => (
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                {window.innerWidth > 768 && (
                  <td className="border-grey-light border hover:bg-gray-100 p-3">
                    <img
                      className="w-24 h-24 rounded-full"
                      alt="gibbz tha daqchild event poster"
                      src={product.product_image}
                    />
                  </td>
                )}
                <td className="border-grey-light border hover:bg-gray-100 p-3">
                  {product.name}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                  Ksh {product.price}
                </td>
                <td
                  className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Merch;
