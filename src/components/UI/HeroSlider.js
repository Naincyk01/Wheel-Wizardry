import React from "react";
// import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Image from "../../assets/all_images/slider_img/slider_1.jpg"
// import ImageB from "../../assets/all_images/slider_img/slider_2.jpg"
// import ImageF from "../../assets/all_images/slider_img/slider_3.jpg"

const HeroSlider = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //  };
  return (
    <div>

     {/* <Slider {...settings} className="overflow-hidden"> */}

      {/* <div className="h-[700px] max-w-full bg-cover bg-no-repeat bg-center mt-0" 
      style = {{backgroundImage:`url(${Image})`}}> */}
      <div className="slider__item-01 h-[700px] max-w-full">
        <Container>
          <div className="pt-[150px]">
            <h4 className="text-lg mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-5xl font-semibold  mb-4">Reserve Now and Get 50% Off</h1>

            <button className="py-[7px] px-[15px] border-none outline-none rounded-md
             transition-transform hover:scale-125 hover:duration-200  bg-[#fff] mt-4 hover:bg-[#fff] hover:text-[#000d6b]
            text-[#fff]">
              <Link to="/cars" className="text-[#000d6b] no-underline font-semibold text-xl ">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>


{/* 
      <div className="h-[700px] max-w-full bg-cover bg-no-repeat bg-center mt-0 bg-gradient-to-b from-[rgb(0,13,107,0.5)] to-[rgb(0,13,107,0.5)]" style={{backgroundImage:`url(${ImageB})`}}>
      <Container>
          <div className="pt-[150px]">
            <h4 className="text-lg mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-5xl font-semibold mb-4">Reserve Now and Get 50% Off</h1>

            <button className="py-[7px] px-[15px] border-none outline-none rounded-md transition-transform hover:scale-125 hover:duration-200 hover:text-[#fff] hover:bg-[#000c6bd0] bg-[#fff] text-[#000d6b]  mt-4 hover:bg-[#000d6b]">
              <Link to="/cars" className="text-[#000d6b] no-underline font-semibold">Reserve Now</Link>
            </button>
          </div>
       </Container>
      </div>


      
      <div className="h-[700px] max-w-full bg-cover bg-no-repeat bg-center mt-0 bg-gradient-to-b from-[rgb(0,13,107,0.5)] to-[rgb(0,13,107,0.5)]" style={{backgroundImage:`url(${ImageF})`}}>
         <Container>
          <div className="pt-[150px]">
             <h4 className="text-lg mb-3">For Rent $70 Per Day</h4>
             <h1 className="text-5xl font-semibold  mb-4">Reserve Now and Get 50% Off</h1>

             <button className=" py-[7px] px-[15px] border-none outline-none rounded-md transition-transform hover:scale-125 hover:duration-200 hover:text-[#fff] hover:bg-[#000c6bd0] bg-[#fff] text-[#000d6b]  mt-4 hover:bg-[#000d6b]">
               <Link to="/cars" className="text-[#000d6b] no-underline font-semibold">Reserve Now</Link>
             </button>
           </div>
         </Container>
     </div>
 */}

     {/* </Slider> */}
 
      </div>
  );
};

export default HeroSlider;