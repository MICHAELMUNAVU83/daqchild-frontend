import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMix from "./components/AddMix";
import AddEvents from "./components/AddEvents";
import AddMerch from "./components/AddMerch";
import Product from "./components/Product";
import Cart from "./pages/Cart";
import Mixes from "./pages/Mixes";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    console.log(storedToken);
  }, [storedToken]);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home setStoredToken={setStoredToken} storedToken={storedToken} />
            }
          />
          <Route
            path="/add-mix"
            element={
              <AddMix
                setStoredToken={setStoredToken}
                storedToken={storedToken}
              />
            }
          />
          <Route
            path="/add-events"
            element={
              <AddEvents
                setStoredToken={setStoredToken}
                storedToken={storedToken}
              />
            }
          />
          <Route
            path="/add-merch"
            element={
              <AddMerch
                setStoredToken={setStoredToken}
                storedToken={storedToken}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashBoard
                setStoredToken={setStoredToken}
                storedToken={storedToken}
              />
            }
          />
          <Route
            path="/products/:id"
            element={
              <Product
                setStoredToken={setStoredToken}
                storedToken={storedToken}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart setStoredToken={setStoredToken} storedToken={storedToken} />
            }
          />
          <Route
            path="/mixes"
            element={
              <Mixes
                setStoredToken={setStoredToken}
                storedToken={storedToken}
              />
            }
          />
          <Route
            path="/login"
            element={<Login setStoredToken={setStoredToken} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
