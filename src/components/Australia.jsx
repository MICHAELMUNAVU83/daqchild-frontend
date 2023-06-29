import React from "react";

const Australia = () => {
  const shows = [
    {
      id: 1,
      location: "Njugush After Party",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1688014867/WhatsApp_Image_2023-06-29_at_5.10.34_AM_cthsmq.jpg",
    },
    {
      id: 2,
      location: "Vodka Temple",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1688014866/WhatsApp_Image_2023-06-29_at_5.10.34_AM_1_kfvdwm.jpg",
    },
    {
      id: 3,
      location: "Wakanda Place",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1688014866/WhatsApp_Image_2023-06-29_at_5.10.35_AM_grmxn1.jpg",
    },
    {
      id: 4,
      location: "Dirty Sultan Rooftop",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1688014867/WhatsApp_Image_2023-06-29_at_5.10.35_AM_1_xzw4va.jpg",
    },
  ];
  return (
    <div className="md:h-[100vh]  bg-[#DDA3B2]/80  ">
      <p className="p-8 text-7xl font-bold bebas">Australian Tour Dates</p>
      <p className="p-8 playfair text-center text-xl">
        Catch me live in Asutralia from July 7th to July 16th .
      </p>
      <div className=" w-[90%] mx-auto grid md:grid-cols-4 gap-8">
        {shows.map((show) => (
          <div className="bg-black rounded-xl hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
            <img
              src={show.poster}
              className="h-[400px] rounded-t-xl object-cover"
            />

            <div className="text-white text-center bebas text-xl py-2">
              {show.location}
            </div>
            <a
              href="https://www.eventbrite.co.uk/e/njugush-ft-wakavinye-dj-gibbz-australian-tour-melbourne-tickets-616238795827?aff=ebdssbdestsearch&keep_tld=1"
              rel="noreferrer"
              target="_blank"
              className="bg-[#DDA3B2] my-4 p-2 flex justify-center items-center w-[50%] mx-auto krona uppercase hover:scale-105 transition-all duration-500 ease-in-out"
            >
              Buy Ticket
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Australia;
