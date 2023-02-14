import React from "react";
import MerchCard from "./MerchCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "swiper/css";
const Merch = () => {
  return (
    <div className="md:ml-20 ml-10">
      <Splide
        options={{
          rewind: true,
          perPage: 3,
          perMove: 1,
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
        <SplideSlide>
          <MerchCard />
        </SplideSlide>
        <SplideSlide>
          <MerchCard />
        </SplideSlide>
        <SplideSlide>
          <MerchCard />
        </SplideSlide>
        <SplideSlide>
          <MerchCard />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Merch;
