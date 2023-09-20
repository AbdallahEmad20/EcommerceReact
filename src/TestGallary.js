import React, { useEffect } from 'react'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Col  , Container, Row } from 'react-bootstrap'
import MyNavbar from './MyNavbar'
import Footer from './Footer'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

//Calling WOWjs
import WOW from 'wowjs';




  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);
  



class TestGallary extends React.Component{

  


  // Defining WOW 
componentDidMount() {
  new WOW.WOW({
    live: false
}).init();
}


render(){


  


  return (
    <div>
      
<MyNavbar/>

<Container className='TestGallary'>

      <Gallery >

<Row>





       
<Item 
      original="/Images/81r6jFYrC0500_540x.jpg"
      thumbnail="thumb-1.jpg"
      width="600"
      height="768"
      className="itemm"
    >
      {({ ref, open }) => (

  <Col lg={3} md={6} sm={12} className="ColImage    animate__bounceInLeft"  ><img ref={ref}   className='MyImageee'   onClick={open} src="/Images/81r6jFYrC0500_540x.jpg" /></Col  >

      )}
    </Item>




 
    <Item 
      original="/Images/0150220428_2_3_3_1024x1024@2x.jpg"
      thumbnail="thumb-1.jpg"
      width="600"
      height="768"
      className="itemm"
    >
      {({ ref, open }) => (
        <Col lg={3} md={6} sm={12} className="ColImage "   ><img ref={ref} className='MyImageee' onClick={open} src="/Images/0150220428_2_3_3_1024x1024@2x.jpg" /></Col  >
      )}
    </Item>


    <Item 
      original="/Images/0248251428_2_3_3_1024x1024@2x.jpg"
      thumbnail="thumb-1.jpg"
      width="600"
      height="768"
      className="itemm"
    >
      {({ ref, open }) => (
        <Col lg={3} md={6} sm={12} className="ColImage"  ><img ref={ref} className='MyImageee' onClick={open} src="/Images/0248251428_2_3_3_1024x1024@2x.jpg" /></Col  >
      )}
    </Item>


    <Item 
      original="/Images/6348644800_1-1_540x.jpg"
      thumbnail="thumb-1.jpg"
      width="600"
      height="768"
      className="itemm"
    >
      {({ ref, open }) => (
        <Col  lg={3} md={6} sm={12} className="ColImage  animate__bounceInRight"  ><img ref={ref} className='MyImageee' onClick={open} src="/Images/6348644800_1-1_540x.jpg" /></Col  >
      )}
    </Item>



    <Item 
      original="/Images/6350552300_1_1_1-1_540x.jpg"
      thumbnail="thumb-1.jpg"
      width="600"
      height="768"
      className="itemm"
    >
      {({ ref, open }) => (
        <Col lg={3} md={6} sm={12} className="ColImage animate__bounceInLeft "  ><img ref={ref} className='MyImageee' onClick={open} src="/Images/6350552300_1_1_1-1_540x.jpg" /></Col  >
      )}
    </Item>

    <Item 
      original="/Images/6703777712_2_2_3_1024x1024@2x.jpg"
      thumbnail="thumb-1.jpg"
      width="600"
      height="768"
      className="itemm"
    >
      {({ ref, open }) => (
        <Col lg={3} md={6} sm={12} className="ColImage"   ><img ref={ref} className='MyImageee' onClick={open} src="/Images/6703777712_2_2_3_1024x1024@2x.jpg" /></Col  >
      )}
    </Item>


    <Item 
      original="/Images/5814619742_1_1_1_fb5007b1-b424-4ed0-8556-06ea1c2ac9f1_1024x1024@2x.jpg"
      thumbnail="thumb-1.jpg"
      width="600"
      height="768"
      className="itemm"
    >
      {({ ref, open }) => (
        <Col lg={3} md={6} sm={12} className="ColImage"  ><img ref={ref} className='MyImageee' onClick={open} src="/Images/5814619742_1_1_1_fb5007b1-b424-4ed0-8556-06ea1c2ac9f1_1024x1024@2x.jpg" /></Col  >
      )}
    </Item> 



    <Item 
      original="/Images/minimalist-img-61_1024x1024@2x.jpg"
      thumbnail="thumb-1.jpg"
      width="600"
      height="768"
      className="itemm"
    >
      {({ ref, open }) => (
        <Col  lg={3} md={6} sm={12} className="ColImage   animate__delay-0.9s 1s	 animate__bounceInRight"  ><img ref={ref} className='MyImageee' onClick={open} src="/Images/minimalist-img-61_1024x1024@2x.jpg" /></Col  >
      )}
    </Item>








</Row>






  </Gallery>
  
</Container>


<Footer/>
    </div>
  )
      }
}

export default TestGallary



