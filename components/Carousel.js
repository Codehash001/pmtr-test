import React, { Component } from "react";
import Slider from "react-slick";

export default class Autoplay extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1200,
      autoplaySpeed: 2000,
      cssEase: "ease-in-out",
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1280,
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 640,
          settings: { slidesToShow: 1 }
        }
      ]
    };
    return (
      <div className="w-full px-4">
        <h2 className="font-Kanit text-yellow-300 text-xl md:text-2xl mb-3 tracking-wide">Featured</h2>
        <Slider {...settings}>
          <div className="mx-3">
            <img src='1.png' alt="Item 1" className="w-[110px] h-[110px] rounded-lg border border-white/10 shadow-xl soft-glow card-float"/>
          </div>
          <div className="mx-3">
            <img src='2.png' alt="Item 2" className="w-[110px] h-[110px] rounded-lg border border-white/10 shadow-xl soft-glow card-float"/>
          </div>
          <div className="mx-3">
            <img src='3.png' alt="Item 3" className="w-[110px] h-[110px] rounded-lg border border-white/10 shadow-xl soft-glow card-float"/>
          </div>
          <div className="mx-3">
            <img src='4.png' alt="Item 4" className="w-[110px] h-[110px] rounded-lg border border-white/10 shadow-xl soft-glow card-float"/>
          </div>
          <div className="mx-3">
            <img src='5.png' alt="Item 5" className="w-[110px] h-[110px] rounded-lg border border-white/10 shadow-xl soft-glow card-float"/>
          </div>
        </Slider>
      </div>
    );
  }
}
