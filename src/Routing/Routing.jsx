import React from 'react'
import {Routes, Route} from 'react-router-dom'

const Routing = () => {
  return <Routes>
        <Route path='/' element={<Header />} />
        <Route path='#' element={<Cart />} />

    </Routes>;
  
}

export default Routing;