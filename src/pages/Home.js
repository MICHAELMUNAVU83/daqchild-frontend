import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Mixes from "../components/Mixes";
import Events from "../components/Events";
import Merch from "../components/Merch";
import Stepper from "../components/Stepper";

const Home = () => {
  return (
    <div>
      <Hero />
      <Events />
      <Mixes />
      <Merch />
      <Stepper />
     
      <Footer />
    </div>
  );
};

export default Home;
