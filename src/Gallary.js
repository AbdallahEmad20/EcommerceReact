import React, { useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { Col, Container } from 'react-bootstrap'
import { AiOutlineClose } from "react-icons/ai";
import MyNavbar from './MyNavbar';
const Gallary = () => {
const [back , SetBack] =useState(false);
const [showPhoto ,SetShowPhoto] =useState('')

const ShowFun=(ImgSrc)=>{
SetBack(true)
SetShowPhoto(ImgSrc)

}

   var  images =[
      {
        id:1 ,
      imgSrc: "/Images/0150220428_2_3_3_1024x1024@2x.jpg" ,
      } , 

      {
        id:2 ,
      imgSrc: "/Images/0248251428_2_3_3_1024x1024@2x.jpg",

      } , 

      {
        id:3 ,
      imgSrc: "/Images/5576660812_1_1_1_b8284903-7788-4752-ac0c-e2728e364b75_1024x1024@2x.jpg" ,
      } , 

      {
        id:4,
      imgSrc: "/Images/5814619742_1_1_1_fb5007b1-b424-4ed0-8556-06ea1c2ac9f1_1024x1024@2x.jpg" ,
      } , 

      {
        id:5,
      imgSrc: "/Images/6348644800_1-1_540x.jpg" ,
      } , 


      {
        id:6,
      imgSrc: "/Images/t-shirt5w4_1024x1024@2x.jpg" ,
      } , 


      {
        id:7,
      imgSrc: "/Images/sggweater-1-1_540x.jpg" ,
      } , 



      {
        id:8,
      imgSrc: "/Images/Untitled-3-h1_540x.jpg" ,
      } , 


    ]
  
  return (


    <div className='Gallary'>

<MyNavbar/>
<p style={{textAlign:"center" , fontSize:"70px" , fontWeight:"400" , fontStyle:"italic"}}> Welcome In Gallary ...!</p>
<Container>

  <Col lg={12} md={12} sm={12} className={back? "model" : "modelOpen" /*class NAme*/  }>
    <img src={showPhoto} />
    <AiOutlineClose onClick={()=>SetBack(false)} className='iconia'/>
  </Col>
<ResponsiveMasonry 
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
            >
                <Masonry  gutter="20px">

                  {images.map((image)=>(
                    < div key={image.id} ><img  className="myImage" style={{width:"100%" ,  height :"100%" }} src={image.imgSrc}  onClick={()=>ShowFun(image.imgSrc)} /></div>
               
                
                  ))}
                </Masonry>
            </ResponsiveMasonry>
            </Container>
      
    </div>
  )
}

export default Gallary
