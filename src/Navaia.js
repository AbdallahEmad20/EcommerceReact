

import React from 'react';
import "./NAvia.css"
import  { Component } from "react";
import Slider from "react-slick";


export default class Navaia extends Component {


  state = {
    activeSlide: 0,
    activeSlide2: 0
};
render(){
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => this.setState({ activeSlide: next }),
        afterChange: current => this.setState({ activeSlide2: current })
    };


    var settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 4,
        autoplay: true,

        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
    };
  return (
    <div>
      



      <section className="fslider">

<p className="pppslide">
  {this.state.activeSlide + 1}/2
</p>
<Slider {...settings}   >

  <div className="firstslide">
    <h3 className="slideh3">The White <br /> Collection</h3>
    <img src="images/Home-default-1510-3.png" alt="" />
  </div>
  <div className="secondslide">
    <h3 className="slideh3">The Black <br /> Collection</h3>

    <img src="images/Home-default-1510-4.png" alt="" />

  </div>

</Slider>
</section>
 





</div>
  )
}
 }

