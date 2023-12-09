import React from "react";
import Slider from "react-slick";

import ava01 from "../../assets/all_images/ava_1.jpg";
import ava02 from "../../assets/all_images/ava_2.jpg";
import ava03 from "../../assets/all_images/ava_3.jpg";
import ava04 from "../../assets/all_images/ava_4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="flex justify-center h-full w-full overflow-hidden">
      <div className="testimonial py-4 px-3 flex">
        <p className="text-[#7c8a97] text-base leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p>

        <div className="mt-3 flex items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3 text-[#000d6b]">Jhon Doe</h6>
            <p className="text-[#7c8a97] text-base leading-8">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3 flex">
        <p className="text-[#7c8a97] text-base leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p>

        <div className="mt-3 flex items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3 text-[#000d6b]">Jhon Doe</h6>
            <p className="text-[#7c8a97] text-base leading-8">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3 flex">
        <p className="text-[#7c8a97] text-base leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p>

        <div className="mt-3 flex items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3 text-[#000d6b]">Jhon Doe</h6>
            <p className="text-[#7c8a97] text-base leading-8">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3 flex">
        <p className="text-[#7c8a97] text-base leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p>

        <div className="mt-3 flex items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3 text-[#000d6b]">Jhon Doe</h6>
            <p className="text-[#7c8a97] text-base leading-8">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;