import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductPage from '../components/ProductPage';
import Header from '../components/Header';
import CartPage from "../components/CartPage";
import ProductDetails from '../components/ProductDetails';


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default Routing;
