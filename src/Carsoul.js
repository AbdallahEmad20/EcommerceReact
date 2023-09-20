import React from 'react'
import  { Component } from "react";
import Slider from "react-slick";


export default class Carsoul extends Component {


    state = {
        activeSlide: 0,
        activeSlide2: 0
      };
      render() {
        var settings = {
           
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (current, next) => this.setState({ activeSlide: next }),
            afterChange: current => this.setState({ activeSlide2: current }),
          
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
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
          <section className='fslider'>
              
              <p className="pppslide">

              {this.state.activeSlide + 1}/2
            </p>
              
            <Slider {...settings}>
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
        );
      }


  }
 


