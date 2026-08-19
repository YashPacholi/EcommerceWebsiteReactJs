import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Cateogries from "./components/Cateogries";
import FeaturedProducts from "./components/FeaturedProducts";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import { useSelector } from "react-redux";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import About from "./components/About";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"



const App = () => {


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
      />
    <div>
      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Cateogries />
              <FeaturedProducts />
              <NewsLetter />
            </>
          }
        />

        {/* Product Details */}
       
        <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<ProductDetails />} />
<Route path="/checkout" element={<Checkout/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/order-success" element={<OrderSuccess />} />
      </Routes>

      <Footer />
    </div>
    </>
  );
};

export default App;