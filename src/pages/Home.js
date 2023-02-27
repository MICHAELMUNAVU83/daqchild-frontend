import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Mixes from "../components/Mixes";
import Events from "../components/Events";
import Photos from "../components/Photos";
import Merch from "../components/Merch";
import NavBar from "../components/NavBar";
import AdminNavbar from "../components/AdminNavbar";


const Home = ({ setStoredToken, storedToken }) => {
  const [mixes, setMixes] = useState([]);
  const [events, setEvents] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/mixes")
      .then((response) => response.json())
      .then((data) => {
        setMixes(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      {storedToken ? (
        <AdminNavbar setStoredToken={setStoredToken} />
      ) : (
        <NavBar />
      )}
      <Hero />
      {events.length > 0 && <Events />}
      {mixes.length > 0 && <Mixes />}
      {products.length > 0 && <Merch />}

      <Photos />
     
      <Footer />
    </div>
  );
};

export default Home;
