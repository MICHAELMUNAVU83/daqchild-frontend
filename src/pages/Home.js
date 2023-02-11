import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Mixes from "../components/Mixes";
import Events from "../components/Events";

const Home = () => {
  return (
    <div>
      <Hero />
      <Events />
      <Mixes />
      <Footer />
    </div>
  );
};

export default Home;
