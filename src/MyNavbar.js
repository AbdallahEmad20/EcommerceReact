
import React, { useState } from 'react'
import "./A.css"

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
const MyNavbar = () => {


  const cart =useSelector(state=>state.cart)


  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <div>
      




      <nav className="nav">
        
       <div id='devo' className={active} style={{display:"flex"}}>
 <Link to='/'>Home</Link>
 <Link to='/products'>Products</Link>
 <Link to='/testGallary'>Gallary</Link>
 <Link to='/about'>About</Link>


 </div>



 <div className="d-flex">

 <img src='/Images/logo-1_8505ef07-bee3-4d82-aaf7-dc2fdb2b7793.png'/>    

      </div>  



      <div className="d-flex iconsCart ">

      <Link to='/cart' style={{color:"black"}}><FaShoppingBasket style={{fontSize:"30px"}}/></Link> 
       <span>{cart.length}</span>
      </div>





      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      
  
    </nav>




    </div>
  )
}

export default MyNavbar




  // <div className="Nav">



  // <Navbar expand="lg" className="bg-body-tertiary navvv " >
  //       <Container>
  //         <Navbar.Toggle aria-controls="navbarScroll" />
  //         <Navbar.Collapse id="navbarScroll">
  //           <Nav 
  //             className="me-auto my-2 my-lg-0 navyy"
  //             style={{ maxHeight: '100px' }}
  //             navbarScroll
  //           >
    

  // <div className='d-flex'>

  // <Link to='/'>Home</Link>
  // <Link to='/products'>Products</Link>
  // <Link to='/gallary'>Gallary</Link>
  // <Link to='/sign'>Sign</Link>


  // </div>


  // <div className="d-flex">

  // <img src='/Images/logo-1_8505ef07-bee3-4d82-aaf7-dc2fdb2b7793.png'/>    

  //       </div>  


  //      <div className="d-flex iconsCart ">

  //      <Link to='/cart' style={{color:"black"}}><AiOutlineShoppingCart style={{fontSize:"30px"}}/></Link> 
  //       <span>{cart.length}</span>
  //       </div>
  //           </Nav>
 
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>


          
          // </div>
    
    