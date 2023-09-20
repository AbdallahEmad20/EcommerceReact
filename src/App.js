

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react'
import MyNavbar from './MyNavbar';
import Carsoul from './Carsoul';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Test from './Test';
import { ReactDOM } from 'react';

import { ScaleLoader } from 'react-spinners'
import Gallary from './Gallary';
import Sign from './Sign';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestGallary from "./TestGallary";
import About from "./About";
const App = () => {




  const [loading  , setloading] =useState(false);


  useEffect(()=>{
    setloading(true);
    setTimeout(()=>{
      setloading(false)
    } , 2000)
  } , [])


  return (

    <div>



{
      loading ? 
      <div className='preloaderr'>
  
      <ScaleLoader className='scaleLoad' color={"black"} loading={loading} height={100} margin={10}  />
          </div>:
    


     <Routes>
      <Route path='/' element={<Home/>}></Route>
    

         <Route path='products' element={<Products/>}></Route>
      <Route path='products/:ID' element={<ProductDetails/>}></Route>

      <Route path='cart' element={<Cart/>}></Route>
      <Route path='test' element={<Test/>}></Route>
      <Route path='testgallary' element={<TestGallary/>}></Route>
      <Route path='about' element={<About/>}></Route>




     </Routes>
}
    </div>

  )
}

export default App
