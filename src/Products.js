import React, { useEffect, useState } from 'react'
import MyNavbar from './MyNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './rtk/ProductSlice'
import {Button} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";

import { Container , Col , Row } from 'react-bootstrap';

import "./App.css"
import { event } from 'jquery'
import Footer from './Footer'
// Dont Reload

function NotPeyload(e){
e.preventDefault()
}


const Products = () => {
  const [query , setQyery] =useState("")
    const product =useSelector(state=>state.products)
    console.log("my product"  , product.arr)


    // store my products in local Storage 
    


    // console.log("store" , storee)

    const dispatch =useDispatch()

    useEffect(()=>{
 dispatch(fetchProduct())
    },[])
  return (
    <div>
      <MyNavbar/>


<Col  className='backGroundPhoto'>
  <img src='/Images/d2c46b4a25816a9c5f07ed83b984991a.jpg' />
  <div className='ContentShop'>
    <h3>Shop</h3>
    <div className='SmallContent'>
     <Link to="/">Home</Link>
     <p className='p'>/</p>
     <p>shop</p>
    </div>
  </div>
</Col>



<Container className='Products'>

<Col lg="9"   className='Inputaiaa'>
  
  <input type="text" placeholder="Enter your Search" onChange={event => setQyery(event.target.value) }></input>
  <FcSearch className='BSIcon'/>
</Col>

    <Row>


    {

      product.arr &&

   product.arr.filter(pro=>{
  
    if(query === ""){
      return pro
    }else if(pro.title.toLowerCase().includes(query.toLowerCase())){
      return pro
    }
   }).map((product)=>(
<Col className='divvvv'  key={product.id}  lg={3} md={6}  sm={12}>
<div className='Imagiaaa'>{<img src={product.image}/>}</div>
<div><p style={{color:"#000" , fontSize:"17px" , fontWeight:"400" , marginTop:"20px"}}>{product.title}</p></div>
<p>{product.price}$</p>

<div className='Continaiaaa'>
<button onClick={(e)=>NotPeyload}  className='btnnn '><Link to={`${product.id}`} className='myLink'>view product</Link> </button>
<div className='MyIcon'>
       <AiOutlineShoppingCart />
            </div>
</div>




</Col>



    ))
}



    </Row>
</Container>

<Footer/>
    </div>
  )
}

export default Products
