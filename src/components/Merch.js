import React, { useState, useEffect } from "react";
import MerchCard from "./MerchCard";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
const Merch = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://thadaqchild.onrender.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <>
      <h1 className="mt-4 ml-2">
        <span className="md:text-4xl text-3xl font-bold krona">
          Daqchild Merch{" "}
        </span>
      </h1>
      <p className="text-gray-500 roboto ml-2 text-sm  md:text-md">
        Daqchild Merch is a collection of Daqchild's merchandise. Shop now for
        Daqchild's latest merch.
      </p>
      <div id="merch" className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop="true"
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // when window width is >= 1024px
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <MerchCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Merch;
