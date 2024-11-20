import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductPage from '../components/ProductPage';
import Header from '../components/Header';
import CartPage from "../components/CartPage";

const Routing = () => {
    return (
        <>
            {/* Include Navbar on all pages */}

            {/* Define Routes */}
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="shop" element={<ProductPage />} />
                <Route path="cart" element={<CartPage />} />
            </Routes>
        </>
    );
};

export default Routing;
