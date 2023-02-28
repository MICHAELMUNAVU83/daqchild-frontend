import React, { useState, useEffect } from "react";
import MerchCard from "./MerchCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "swiper/css";
const Merch = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://gibbzthadaqchild-backend.onrender.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <>
      <h1 className="mt-4 ">
        <span className="text-4xl font-bold krona">Daqchild Merch </span>
      </h1>
      <p className="text-gray-500 text-md">
        Daqchild Merch is a collection of Daqchild's merchandise. Shop now for
        Daqchild's latest merch.
      </p>
      <div id="merch" className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            speed: 400,
            drag: true,
            autoplay: true,
            gap: "2rem",
            arrows: false,
            pagination: false,
            breakpoints: {
              640: {
                perPage: 1,
                gap: "1rem",
              },
              768: {
                perPage: 2,
                gap: "1rem",
              },
              1024: {
                perPage: 3,
                gap: "1rem",
              },
            },
          }}
        >
          {products.map((product) => (
            <SplideSlide key={product.id}>
              <MerchCard product={product} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default Merch;
