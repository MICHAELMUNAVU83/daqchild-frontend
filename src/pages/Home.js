import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HorizontalText from "../components/HorizontalText";
import LatestMixes from "../components/LatestMixes";
import StackableDivs from "../components/StackableDivs";
import AddMix from "../components/AddMix";
const Home = () => {
  return (
    <div>
      <Hero />
      <AddMix/>
      <Footer />
    </div>
  );
};

export default Home;
