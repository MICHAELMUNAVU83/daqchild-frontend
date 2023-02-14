import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMix from "./components/AddMix";
import AddEvents from "./components/AddEvents";
import AddMerch from "./components/AddMerch";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-mix" element={<AddMix />} />
          <Route path="/add-events" element={<AddEvents />} />
          <Route path="/add-merch" element={<AddMerch />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
