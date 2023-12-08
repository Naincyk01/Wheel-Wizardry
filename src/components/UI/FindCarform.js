import React from "react";
import { Form, FormGroup } from "reactstrap";

const FindCarform = () => {
  return (
    <Form className="bg-[#fff] pt-14 pb-12 pl-4 pr-4 max-lg:py-[30px] max-lg:px-[10px] max-md:py-[20px] max-md:px-[10px]">
      <div className=" flex items-center justify-between flex-wrap">

        <FormGroup className="w-[30%] mb-0">
          <input type="text" placeholder="From address" required  className="border border-[#7c8a972a] w-full outline-none py-[8px] px-[12px] placeholder-[#7c8a97] max-lg:py-[7px] max-lg:px-[10px] max-lg:text-sm"/>
        </FormGroup>


        <FormGroup className="w-[30%] mb-0">
          <input type="text" placeholder="To address" required  className="border border-[#7c8a972a] w-full outline-none py-[8px] px-[12px] placeholder-[#7c8a97]  max-lg:py-[7px] max-lg:px-[10px] max-lg:text-sm"/>
        </FormGroup>


        <FormGroup className="w-[30%] mb-0">
          <input type="date" placeholder="Journey date" required className="border border-[#7c8a972a] w-full outline-none py-[8px] px-[12px] placeholder-[#7c8a97]  max-lg:py-[7px] max-lg:px-[10px] max-lg:text-sm"/>
        </FormGroup>


        <FormGroup className="w-[30%] mb-0">
          <input
            className="journey__time border border-[#7c8a972a] w-full outline-none py-[8px] px-[12px] placeholder-[#7c8a97] max-lg:py-[7px] max-lg:px-[10px] max-lg:text-sm"
            type="time"
            placeholder="Journey time"
            required/>
        </FormGroup>


        <FormGroup className="w-[30%]">
          <select className="w-[100%] py-[10px] px-[15px] border border-[#7c8a972a] max-lg:py-[7px] max-lg:px-[10px] max-lg:text-sm">
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>


        <FormGroup className="w-[30%] mb-0">
          <button className="bg-[#000d6b] py-[8px] px-[15px] text-[#fff] border-none outline-none rounded-md transition-transform hover:scale-125 hover:duration-200 hover:text-[#fff] hover:bg-[#000d6b] w-full">Find Car</button>
        </FormGroup>


      </div>
    </Form>
  );
};

export default FindCarform;