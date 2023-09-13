import React from "react";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all_images/toyota.png";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver mb-4">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="text-[#fff] font-semibold text-4xl leading-[65px]">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <button className="py-[7px] px-[15px] bg-[#fff] text-[#000d6b] border-none outline-none rounded-md transition-transform hover:scale-125 hover:duration-200 hover:text-[#000d6b] become__driver-btn mt-4 ">
              Become a Driver
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;