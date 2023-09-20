import React from 'react'

import MyNavbar from './MyNavbar'

import { Container  ,Col , Row } from 'react-bootstrap'
import { AiOutlineEye } from 'react-icons/ai'

import "./Footer.css"




import 'swiper/css';
import 'swiper/css/pagination';

import './App.css';

import Slider from "react-slick";
import Footer from './Footer'
import Navaia from './Navaia'
// import required modules


const Home = () => {



  const settings = {
    dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,


  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

}




  return (

    
    <div>
 <MyNavbar/>
 


<Navaia/>
<div className='section2' style={{padding:"50px 0"}}>
<Container className='Content-Home'>


  <Row>



  <Col lg={3} md={6} sm={12}  className='contentt'>
 <div className='Image'>
 <img width={"100%"} src='/Images/cate-df-3_360x.jpg'/>

 </div>

<div className='Content-small'>
<p className='title'>Clothing</p>
<p>5 items</p>
</div>
</Col>

<Col lg={3} md={6} sm={12}  className='contentt'>
 <div className='Image'>
 <img width={"100%"} src='/Images/minimalist-img-61_1024x1024@2x.jpg'/>

 </div>

<div className='Content-small'>
<p className='title'>Clothing</p>
<p>5 items</p>
</div>
</Col>


<Col lg={3} md={6} sm={12}  className='contentt'>
 <div className='Image'>
 <img width={"100%"} src='/Images/cate-df-1_360x.jpg'/>

 </div>

<div className='Content-small'>
<p className='title'>Clothing</p>
<p>5 items</p>
</div>
</Col>

<Col lg={3} md={6} sm={12}  className='contentt'>
 <div className='Image'>
 <img width={"100%"} src='/Images/cate-df-4_360x.jpg'/>

 </div>

<div className='Content-small'>
<p className='title'>Clothing</p>
<p>5 items</p>
</div>
</Col>

</Row>
</Container>
</div>



{/* Best Selling  */}




<div className='showSec'>

<Container>
  
  <Row>




  <Col lg={8} md={8}  sm={12} className=' Show-content'>
  

  
<img className='Image-card'   src='/Images/banner-2.png' alt='photo'/>

<div className="div11sec4">
                <h5>Your Next</h5>
                <h4>Purchase</h4>
                <div className="flexywrite">
                  <h3>10</h3>
                  <p> % Off</p>
                </div>
                <button className='btn-div' >Shop Now</button>

              </div>
 

  </Col>


  <Col  lg={3} md={3} sm={12}  className='divaia'>
    
  <div className="div11sec5">
                <h5>Your Next</h5>
                <h4>Purchase</h4>
                <div className="flexywrite">
                  <h3>10</h3>
                  <p> % Off</p>
                </div>
                <button className='btn-div' >Shop Now</button>

              </div>


  </Col>


  </Row>



  </Container>









</div>



{/* Best Selling */}



<div className='Best-Selling'>

<Container>

<h2> Best Selling </h2>

        <Slider {...settings}   className='MySLiderr' >


<div className='contaia'>

<div className='Image'>
<img width={"100%"} src='/Images/Layer-141-1000x1280_540x (1).jpg'/>
</div>

<div className='bigContent' style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>

<div className=''>
<p>Quilted with Hood</p>
<p>$179.00</p>
</div>
<AiOutlineEye/>

</div>

</div>






  
<div className='contaia'>

<div className='Image' style={{backgroundColor:"#fff"}}>
<img width={"100%"} src='/Images/6348644205_1_1_3-removebg-2_540x.png'/>
</div>

<div className='bigContent' style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>

<div className=''>
<p>Quilted with Hood</p>
<p>$179.00</p>
</div>
<AiOutlineEye/>

</div>

</div>





<div className='contaia'>

<div className='Image'>
<img width={"100%"} src='/Images/Layer-134_540x.jpg'/>
</div>

<div className='bigContent' style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>

<div className=''>
<p>Quilted with Hood</p>
<p>$179.00</p>
</div>
<AiOutlineEye/>

</div>

</div>







  
<div className='contaia'>

<div className='Image'>
<img width={"100%"} src='/Images/Layer-142_360x (1).jpg'/>
</div>

<div className='bigContent' style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>

<div className=''>
<p>Quilted with Hood</p>
<p>$179.00</p>
</div>
<AiOutlineEye/>

</div>

</div>





<div className='contaia'>

<div className='Image'>
<img width={"100%"} src='/Images/Layer-14-2_360x.jpg'/>
</div>

<div className='bigContent' style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>

<div className=''>
<p>Quilted with Hood</p>
<p>$179.00</p>
</div>
<AiOutlineEye/>

</div>

</div>





<div className='contaia'>

<div className='Image'>
<img width={"100%"} src='/Images/Untitled-2_c3deccf5-8c45-4eae-8ed0-63383cd413a0_540x.jpg'/>
</div>

<div className='bigContent' style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>

<div className=''>
<p>Quilted with Hood</p>
<p>$179.00</p>
</div>
<AiOutlineEye/>

</div>

</div>




<div className='contaia'>

<div className='Image'>
<img width={"100%"} src='/Images/Layer-133-1_540x.jpg'/>
</div>

<div className='bigContent' style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>

<div className=''>
<p>Quilted with Hood</p>
<p>$179.00</p>
</div>
<AiOutlineEye/>

</div>

</div>

</Slider>



        </Container>
      
      </div>


<div className='DivLast' style={{padding: "50px  0"}}>

{/* first column */}
<Container>


<Row>



<Col className='Home' lg={8} sm={12}>
  <Row>
    

<Col lg={4} md={4} sm={12} className='BackPhoto'>
<img   src='/Images/126092902_363731078221416_3923172392216927851_n.jpg'/>
</Col>



<Col lg={4} md={4} sm={12} className='BackPhoto'>
<img  src='/Images/125805091_1244092065966946_7480077131728639836_n.jpg'/>
</Col>



<Col lg={4} md={4} sm={12} className='BackPhoto'>
<img  src='/Images/126106436_366020964688525_7792254897032838113_n.jpg'/>
</Col>



<Col lg={4} md={4} sm={12} className='BackPhoto'>
<img  src='/Images/126398977_221851472632792_6291091317212891166_n.jpg'/>
</Col>



<Col lg={4} md={4} sm={12} className='BackPhoto'>
<img  src='/Images/126197996_385197312744633_6397005439344767247_n.jpg'/>
</Col>

<Col lg={4} md={4} sm={12} className='BackPhoto'>
<img   src='/Images/125474066_691332491496782_8130376826513537460_n.jpg'/>
</Col>




</Row>


</Col>

<Col   lg={4} md={6} sm={12}>
 <div className='Contant'style={{marginTop:"99px"}} > 

 <p style={{fontSize:"40px" ,   color:"#222" , fontWeight:"300" , marginBottom:"40px"  }}>Vintage Style</p>
 <p style={{fontWeight:"100" , color:"gray" , marginBottom:"20px"}}>No one  hard without any doubt without any doubt we love Body Emad Abdaalah Mohammed Bosy Emad Abdalah </p>
 </div>
<p style={{  marginTop:"70px"  ,fontSize:"24px" }}><span style={{color:"#000" , height:"90px" , display:"inline-block"}}>_________</span>#Lusionheme</p>
</Col>

  
</Row>

</Container>

</div>




  


<Footer/>

</div>



  )
  }

export default Home
