import React from 'react'
import Navbar from './Navbar'
import FeatureCards from './FeatureCards'
import ProductSlider from './ProductSlider'
import ProductList from './ProductList'

export default function Header() {
  return (
    <>
      <Navbar />
      <ProductSlider />
      <FeatureCards />
      <ProductList />


      
    </>
    
  )
}
