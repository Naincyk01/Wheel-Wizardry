import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import image01 from '../../assets/all_images/slider_img/slider_1.jpg'
import image02 from '../../assets/all_images/slider_img/slider_2.jpg'
import image03 from '../../assets/all_images/slider_img/slider_3.jpg'

console.log(image01)
console.log(image02)
console.log(image03)
const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="overflow-hidden">
      <div className="h-[700px] max-w-full bg-cover bg-no-repeat bg-center mt-0 bg-black bg-gradient-to-b from-[rgb(0,13,107,0.5)] to-[rgb(0,13,107,0.5)]" style={{backgroundImage:`url(${image01})`}}>
        <Container>
          <div className="pt-[150px]">
            <h4 className="text-lg mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-5xl font-semibold  mb-4">Reserve Now and Get 50% Off</h1>

            <button className="btn bg-[#fff] text-[#000d6b] border-none outline-none mt-4 hover:bg-[#000d6b] hover:text-[#fff]">
              <Link to="/cars" className="text-[#000d6b] no-underline font-semibold">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="h-[700px] max-w-full bg-cover bg-no-repeat bg-center mt-0 bg-gradient-to-b from-[rgb(0,13,107,0.5)] to-[rgb(0,13,107,0.5)]" style={{backgroundImage:`url(${image02})`}}>
        <Container>
          <div className="pt-[150px]">
            <h4 className="text-lg mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-5xl font-semibold mb-4">Reserve Now and Get 50% Off</h1>

            <button className="btn bg-[#fff] text-[#000d6b] border-none outline-none mt-4 hover:bg-[#000d6b] hover:text-[#fff]">
              <Link to="/cars" className="text-[#000d6b] no-underline font-semibold">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="h-[700px] max-w-full bg-cover bg-no-repeat bg-center mt-0 bg-gradient-to-b from-[rgb(0,13,107,0.5)] to-[rgb(0,13,107,0.5)]" style={{backgroundImage:`url(${image03})`}}>
        <Container>
          <div className="pt-[150px]">
            <h4 className="text-lg mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-5xl font-semibold  mb-4">Reserve Now and Get 50% Off</h1>

            <button className="btn bg-[#fff] text-[#000d6b] border-none outline-none mt-4 hover:bg-[#000d6b] hover:text-[#fff]">
              <Link to="/cars" className="text-[#000d6b] no-underline font-semibold">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;