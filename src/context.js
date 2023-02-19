import React, { createContext, useState } from "react";
export const RoomContext = createContext();

export function RoomProvider({ children }) {
  const [saved, setSaved] = useState([]);

  const addCart = (obj) => {
    setSaved((prevState) => [...prevState, obj]);
  };
  const removeFromArray = (objectid) => {
    setSaved((prevState) =>
      prevState.filter((product) => {
        return product.id !== objectid;
      })
    );
  };

  const ItemsInCart = saved.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    product_image: item.product_image,
    quantity: 1,
    selected_color: "red",
    selected_size: "small",
    colors: item.colors,
    sizes: item.sizes,
  }));

  const addQuant = (id) =>
    ItemsInCart.map((item) => {
      if (item.id === id) {
        item.quantity = item.quantity + 1;
      }
    });

  return (
    <RoomContext.Provider
      value={{ saved, addCart, removeFromArray, ItemsInCart, addQuant }}
    >
      {children}
    </RoomContext.Provider>
  );
}
