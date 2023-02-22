import React, { useState } from "react";

const AddMerch = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [description, setDescription] = useState("");
  const uploadImage = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setProductImage(data.secure_url);
      });
  };

  const addMerchFunctionality = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
        product_image: productImage,
        description: description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="mt-20">
      <div className="md:max-w-[50%] w-[80%] mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={addMerchFunctionality}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div>
                  <label
                    for="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type={"text"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Hoodies, T-shirts, etc."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Give the name of the merchaandise.
                  </p>
                </div>

                <div>
                  <label
                    for="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <input
                      type={"text"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={description}
                      placeholder="The jumper has high quality material and has many pockets."
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Add a description of the merchandise on sale .
                  </p>
                </div>
                <div>
                  <label
                    for="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price
                  </label>
                  <div className="mt-1">
                    <input
                      type={"number"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={price}
                      placeholder="2500, 5000, etc."
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Add a price for the merchandise.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Merchandise Image
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="text-center text-sm text-gray-600">
                        <label
                          for="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span className="text-center">
                            Add merchandise image
                          </span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            accept="image/*"
                            type="file"
                            className="sr-only"
                            onChange={(e) => uploadImage(e.target.files)}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {name && description && price && productImage ? (
                <div className="bg-gray-50 flex justify-center px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className=" text-center rounded-md border border-transparent bg-indigo-600 py-2 px-4  font-bold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add Merchandise
                  </button>
                </div>
              ) : (
                <div className="bg-gray-50 flex justify-center px-4 py-3 text-right sm:px-6">
                  <button
                    type="button"
                    className=" text-center rounded-md border border-transparent bg-pink-600 py-2 px-4  font-bold text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add Your Merchandise Details
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMerch;
