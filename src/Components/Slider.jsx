import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="mw-100 rounded-lg" alt="slider" src="https://via.placeholder.com/535x400" />
          </div>
          <div>
            <img className="mw-100 rounded-lg" alt="slider" src="https://via.placeholder.com/535x400" />
          </div>
          <div>
            <img className="mw-100 rounded-lg" alt="slider" src="https://via.placeholder.com/535x400" />
          </div>
        </Slider>
      </div>
    );
  }
}