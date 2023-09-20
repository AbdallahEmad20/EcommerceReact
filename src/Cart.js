import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { AiTwotoneStar } from "react-icons/ai";
import { Container } from 'react-bootstrap';
import "./App.css" 
import MyNavbar from './MyNavbar';
import { MinusQuan, PlusQuan, clearCart, removeFromCart } from './rtk/CartSlice';
import "./A.css"
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Cart = () => {

    const cart =useSelector(state=>state.cart);

const dispatch =useDispatch()

//  Open section  Empty Cart
const handala =()=>{
  dispatch(clearCart()) 
 
}


// Total Prices in My Cart 
var TotalPrices =cart.reduce((acc , pro)=>{
  return acc+=(pro.price *pro.quantity) 
 } ,0)
 
 

  return (
    <div>
<MyNavbar/>






 
{
 cart.length > 0  && TotalPrices > 0 ?
<Container className='CartPage'>
<h2 style={{fontWeight:"bold" , fontSize:"22px" , textAlign:"center"}}>Shopping Cart</h2>


<div className='scrolaia'>


<table  className='tablee'>
<thead>

<th>PRODUCT DETAILS</th>
<th>UNIT PRICE</th>
<th>QUANTITY</th>
<th>Remove</th>
<th>AMOUNT</th>
<th></th>


</thead>

<tbody>


{
    cart.map(productt=>(
        <tr key={productt.id}>
       <td style={{display:"flex" , alignItems:"center"}}>
        <img width={"50px"} src={productt.image}/>
      <h4 style={{fontSize:"14px" , marginLeft:"5px"}}>{productt.title}</h4>
      </td>
      <td> <h4>{productt.price * productt.quantity}$</h4></td>
      <td>{productt.quantity }</td>
      <td><button className='RomoveBtn' onClick={()=>dispatch(removeFromCart(productt))}>Delete</button></td>


<td className='PlusAndMiuns' >

  <button onClick={()=>dispatch(PlusQuan(productt)) }>+</button>
  <button onClick={()=>dispatch(MinusQuan(productt)) } >-</button>


</td>
      </tr>        
       ))

    
        }

<tr>Total Price: {TotalPrices}</tr>


 
</tbody>

</table>



</div>







<div className='Empty'>

<button onClick={handala}  >Empty Cart</button>
</div> 




    </Container>:



<div className='PageFinal'>
<div className="cartxy">
<p>Your cart is currently empty.</p>
<Link to="/products" >
  <button className="bttncarttt">Back to Shop</button></Link>
</div>

  </div>






      }     



<Footer/>
    </div>

      

      
      
  )
}

export default Cart

// onClick={}