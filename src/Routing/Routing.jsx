import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductPage from '../components/ProductPage';
import Header from '../components/Header';

const Routing = () => {
    return (
        <>
            {/* Include Navbar on all pages */}

            {/* Define Routes */}
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="shop" element={<ProductPage />} />
                <Route path="cart" element={<h1>Your Cart is Empty</h1>} />
                <Route path="profile" element={<h1>Profile Page</h1>} />
            </Routes>
        </>
    );
};

export default Routing;
