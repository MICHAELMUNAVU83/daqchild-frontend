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
      <form className="flex flex-col gap-4" onSubmit={addMerchFunctionality}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="integer"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="file" onChange={(e) => uploadImage(e.target.files)} />
        <button className="bg-black text-white p-4" type="submit">
          Add Merch
        </button>
      </form>
    </div>
  );
};

export default AddMerch;
