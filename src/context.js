import React, { createContext, useState } from "react";
export const RoomContext = createContext();

export function RoomProvider({ children }) {
  const [quantity, setQuantity] = useState(0);
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

  const savedItemsInCart = saved.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.product_image,
    description: item.description,
    quantity: quantity,
    colors: item.colors,
    sizes: item.sizes,
  }));

  const addQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  return (
    <RoomContext.Provider
      value={{
        saved,
        addCart,
        removeFromArray,
        savedItemsInCart,
        addQuantity,
        quantity,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}
export const RoomConsumer = RoomContext.Consumer;
