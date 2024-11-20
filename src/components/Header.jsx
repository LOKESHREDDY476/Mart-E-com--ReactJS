import React from 'react';
import Navbar from './Navbar';
import FeatureCards from './FeatureCards';
import ProductSlider from './ProductSlider';
import Footer from './Footer';
import HomeData from './HomeData';

const Header = () => (
  <>
    <Navbar />
    <ProductSlider />
    <FeatureCards />
    <HomeData />
    <Footer />
  </>
);

export default Header;
