import React from "react";

import masterCard from "../../assets/all_images/master_card.jpg";
import paypal from "../../assets/all_images/paypal.jpg";


const PaymentMethod = () => {
  return (
    <>
      <div className="payment">
        <label htmlFor="" className="flex items-center gap-2 font-semibold text-[#000d6b]">
          <input type="radio" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="flex items-center gap-2 font-semibold text-[#000d6b]">
          <input type="radio" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 flex items-center justify-between">
        <label htmlFor="" className="flex items-center gap-2 font-semibold text-[#000d6b]">
          <input type="radio" /> Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 flex items-center justify-between">
        <label htmlFor="" className="flex items-center gap-2 font-semibold text-[#000d6b]">
          <input type="radio" /> Paypal
        </label>

        <img src={paypal} alt="" />
      </div>
      <div className="payment text-end mt-5">
        <button className="py-[8px] px-[15px] rounded bg-[#000d6b] text-[#fff] border-none outline-none">Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;