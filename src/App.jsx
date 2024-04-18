import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
