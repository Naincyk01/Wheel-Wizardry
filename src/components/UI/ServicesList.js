import React from "react";
import { Col } from "reactstrap";
import serviceData from "../../assets/data/serviceData";

const ServicesList = () => {
  return (
    <>
      {serviceData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <span className="mb-3 flex justify-center">
        <i class={item.icon}/>
      </span>

      <h6 className="flex justify-center text-xl font-bold transition-transform hover:scale-125 hover:duration-200 hover:text-[#000d6b]">{item.title}</h6>
      <p className="text-[#7c8a97] text-base leading-8">{item.desc}</p>
    </div>
  </Col>
);

export default ServicesList;