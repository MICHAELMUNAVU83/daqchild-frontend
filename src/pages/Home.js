import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Mixes from "../components/Mixes";
import Events from "../components/Events";
import Photos from "../components/Photos";
import Merch from "../components/Merch";
import NavBar from "../components/NavBar";
import AdminNavbar from "../components/AdminNavbar";

const Home = ({ setStoredToken , storedToken }) => {
  return (
    <div>
       {storedToken ? <AdminNavbar setStoredToken={setStoredToken} /> : <NavBar />}
      <Hero />
      <Events />
      <Mixes />
      <Merch />
      <Photos />
      <Footer />
    </div>
  );
};

export default Home;
