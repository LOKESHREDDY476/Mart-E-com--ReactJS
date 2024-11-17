import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from '../components/Navbar';

const Routing = () => {
  return <Routes>
        <Route path='home' element={<Navbar />} />
        <Route path='#' element={<Cart />} />

    </Routes>;
  
}

export default Routing;