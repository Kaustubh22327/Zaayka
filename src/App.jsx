import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";

const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
