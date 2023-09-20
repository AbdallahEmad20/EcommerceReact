import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProDetails } from './rtk/ProductSlice'
import MyNavbar from './MyNavbar'
import { Container , Col , Row, Button } from 'react-bootstrap'
import { AiTwotoneStar } from "react-icons/ai";
import { LuListTree } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import "./App.css"
import Footer from"./Footer";
import { addToCart } from './rtk/CartSlice'
const ProductDetails = () => {

const params = useParams()
    const ProductDetails = useSelector(state=>state.products);
    console.log("Details" , ProductDetails.detail )
    const dispatch =useDispatch()
    

    useEffect(()=>{
     dispatch(ProDetails(params.ID))
    },[])

// cArttttt data

const cart =useSelector(state=>state.cart)
console.log("my cart data" , cart)

    return (
    <div>
      <MyNavbar/>
<Container className='productDetails'>

<Row>
<Col className='ImageDiv'  lg={5} md={6} sm={12} >
<img   style={{marginTop:"17px"}} src={ProductDetails.detail.image}/>
</Col>

<Col className='content-div' lg={7} md={6} sm={12}>

<h2>{ProductDetails.detail.category}</h2>
<h2 className='title'>{ProductDetails.detail.title}</h2>

<h4>{ ProductDetails.detail.rating && ProductDetails.detail.rating.rate}<AiTwotoneStar style={{fontSize:"15px"}}/></h4>

<h3>{ProductDetails.detail.price}$</h3>
<labell  style={{fontSize:"18px" , color:"#000"}}>Selsct Size  </labell>
<select  style={{width:"100px" , height:"30px" , marginTop:"15px"}} vakue='Select Size'>
  
  <option value={"XLL"}>XXl</option>
  <option value={"XL"}>Xl</option>
  <option value={"LARGE"}>LARGE</option>
  <option value={"MEDUIM"}>MEDUIM</option>
  <option value={"SMALL"}>SMALL</option>
 
</select>
<h2 style={{color:"#000" , fontWeight:"bold" , fontSize:"23px"}}>product Details <LuListTree/></h2>
<p>{ProductDetails.detail.description}</p>


  <button  onClick={()=>dispatch(addToCart(ProductDetails.detail))}>addToCart</button>
  <button> <Link to='/cart' style={{color:"#fff" , textDecoration:"none"}}>View Cart</Link></button>



</Col>

</Row>
</Container>

<Footer/>


    </div>
  )
}

export default ProductDetails
