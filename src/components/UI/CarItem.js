import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";


const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-4">
      <div className="border border-[#7c8a9736] p-3 rounded-md h-full w-full">
        <div className="car__img">
          <img src={imgUrl} alt="" className="" />
        </div>

        <div className="mt-2">
          <h4 className="text-[#000d6b] font-semibold text-2xl text-center">{carName}</h4>
          <h6 className="rent__price text-center text-xl font-semibold">
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info flex items-center justify-between mt-3 mb-4 max-lg:text-xs">
            <span className="flex items-center gap-1">
              <i class="ri-car-line text-[#f9a826] text-lg"></i> {model}
            </span>
            <span className="flex items-center gap-1">
              <i class="ri-settings-2-line text-[#f9a826] text-lg"></i> {automatic}
            </span>
            <span className=" flex items-center gap-1">
              <i class="ri-timer-flash-line text-[#f9a826] text-lg"></i> {speed}
            </span>
          </div>

          <button className="w-50 border-none outline-none bg-[#000d6b] py-[8px] px-[0px] rounded-l-lg ">
            <Link to={`/cars/${carName}`} className="no-underline text-[#fff] font-medium hover:text-[#fff]">Rent</Link>
          </button>

          <button className="w-50 rounded-none border-none outline-none bg-[#f9a826] py-[8px] px-[0px] rounded-r-lg ">
            <Link to={`/cars/${carName}`} className="no-underline text-[#fff] font-medium hover:text-[#fff]">Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;