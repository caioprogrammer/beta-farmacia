import React, { Component } from "react";
import Slider from "react-slick";
import { FrenteItalabs, Principal2, Principal3 } from "../assets";

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
            <img className="mw-100 rounded-lg" alt="slider" src={FrenteItalabs} />
          </div>
          <div>
            <img className="mw-100 rounded-lg" alt="slider" src={Principal2} />
          </div>
          <div>
            <img className="mw-100 rounded-lg" alt="slider" src={Principal3} />
          </div>
        </Slider>
      </div>
    );
  }
}