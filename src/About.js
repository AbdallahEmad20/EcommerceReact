import React from 'react'
import "./About.css"
import MyNavbar from './MyNavbar'
import Footer from './Footer'
import { Col, Container, Row } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai';

const About = () => {
  return (
    <div className='AboutSec'>
      <MyNavbar/>

<div className='ImageAbout'>

<img src='/Images/autumn-woman-EHKK4J9-1.jpg' alt='photo'/>

</div>



<div className='AboutUs'>

    <Container className='AboutContainer'>
<h3 >About Us</h3>
     
<Row>

{/* col1 */}
<Col  style={{display:"flex" , justifyContent:"center"}} lg={6}  md={6} sm={12}>
    <img width={"400px"} src='/Images/azamat-zhanisov (1).jpg' alt='pho'/>  
</Col>


{/* End Col1 */}
    
    {/* Col 2 */}
<Col  className='colAboutContent'  lg={6}  md={6} sm={12}>
      
<div className='Aa'>

<h4> E-commerce website</h4>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dolore accusantium, officiis voluptatem excepturi iste dolorem qui corrupti veniam, necessitatibus nobis aliquid repellat minus et aut! Explicabo porro ducimus, beatae, dolor debitis iusto architecto a quos numquam fugiat facere necessitatibus.</p>


<p style={{fontWeight:"bold" , fontSize:"22px" , color:"#000"}}>Rate <span className='spanStar'><AiFillStar className='specialStar'/></span></p>  
   <div className='GoldIcons d-flex'>
<AiFillStar className='icc'/>
<AiFillStar className='icc'/>
<AiFillStar className='icc'/>
<AiFillStar className='icc'/>
<AiFillStar className='icc'/>

   </div>
  
  <button>Read More</button>

</div>

 </Col>
    

</Row>

    </Container>
</div>



<Footer/>
    </div>


  )
}

export default About
