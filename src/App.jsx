import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ProductProvider from "./context/Productcontext";
const App = () => {
  return (
    <div className="overflow-hidden">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
        <Sidebar />
        <Footer />
      </BrowserRouter>

    </div>
  );
};

export default App;
