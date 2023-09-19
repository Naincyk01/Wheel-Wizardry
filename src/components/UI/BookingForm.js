import React from "react";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="w-[47%] inline-block me-4 mb-4">
        <input
          type="text"
          placeholder="First Name"
          className="focus:outline-none border border-[#7c8a972a] text-[#7c8a97] py-[8px] px-[15px] w-full"
        />
      </FormGroup>

      <FormGroup className="w-[47%] inline-block ms-1 mb-4">
        <input
          type="text"
          placeholder="Last Name"
          className="border focus:outline-none border-[#7c8a972a] text-[#7c8a97] py-[8px] px-[15px] w-full"
        />
      </FormGroup>

      <FormGroup className="w-[47%] inline-block me-4 mb-4">
        <input
          type="email"
          placeholder="Email"
          className="border focus:outline-none border-[#7c8a972a] text-[#7c8a97] py-[8px] px-[15px] w-full"
        />
      </FormGroup>

      <FormGroup className="w-[47%] inline-block ms-1 mb-4">
        <input
          type="number"
          placeholder="Phone Number"
          className="border focus:outline-none border-[#7c8a972a] text-[#7c8a97] py-[8px] px-[15px] w-full"
        />
      </FormGroup>

      <FormGroup className="w-[47%] inline-block me-4 mb-4">
        <input
          type="text"
          placeholder="From Address"
          className="border focus:outline-none border-[#7c8a972a] text-[#7c8a97] py-[8px] px-[15px] w-full"
        />
      </FormGroup>

      <FormGroup className="w-[47%] inline-block ms-1 mb-4">
        <input
          type="text"
          placeholder="To Address"
          className="border focus:outline-none border-[#7c8a972a] text-[#7c8a97] py-[8px] px-[15px] w-full"
        />
      </FormGroup>

      <FormGroup className="w-[47%] inline-block me-4 mb-4">
        <select
          name=""
          id=""
          className="w-full py-[10px] px-[15px] text-[#7c8a97] focus:outline-none border rounded border-[#7c8a972a]"
        >
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>

      <FormGroup className="w-[47%] inline-block ms-1 mb-4">
        <select
          name=""
          id=""
          className="w-full py-[10px] px-[15px] focus:outline-none text-[#7c8a97] border rounded border-[#7c8a972a]"
        >
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="w-[47%] inline-block me-4 mb-4">
        <input
          type="date"
          placeholder="Journey Date"
          className="border focus:outline-none border-[#7c8a972a] text-[#7c8a97] py-[8px] px-[15px] w-full"
        />
      </FormGroup>

      <FormGroup className="w-[47%] inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="before:text-[#7c8a97] before:mr-2 border border-[#7c8a972a] before:content-['Journey-Time'] text-[#7c8a97] focus:outline-none py-[8px] px-[15px] w-full"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={6}
          type="textarea"
          className="focus:outline-none w-full py-[10px] px-[15px] text-[#7c8a97] border rounded border-[#7c8a972a]"
          placeholder="Write"
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
