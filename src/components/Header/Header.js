import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      {/* header top */}
      <div className="bg-[#000d6b] text-[#fff] py-[10px] px-0">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="flex items-center gap-x-4">
                <span className="text-sm">Need Help?</span>
                <span className="flex items-center gap-x-2">
                  <i class="ri-phone-fill bg-[#fff] text-[#000d6b] rounded-[50px] text-sm py-[2px] px-[4px]"></i>{" "}
                  +1-202-555-0149
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="flex items-center justify-end gap-4">
                <Link
                  to="#"
                  className="flex items-center gap-1 no-underline text-[#fff] text-base hover:text-[#fff]"
                >
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link
                  to="#"
                  className="flex items-center gap-1 no-underline text-[#fff] text-base hover:text-[#fff]"
                >
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* header middle */}

      <div className="py-[20px] px-0">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="">
                <h1 className="leading-6">
                  <Link to="/home" className="flex items-center gap-2 no-underline text-[#000d6b] font-bold">
                    <i class="ri-car-line text-4xl"></i>
                    <span className="text-2xl">
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="flex items-center gap-2">
                <span>
                  <i class="ri-earth-line text-4xl text-[#000d6b]"></i>
                </span>
                <div className="">
                  <h4 className="text-xl font-bold text-[#000d6b]">Bangladesh</h4>
                  <h6 className="font-semibold">Sylhet City, Bangladesh</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="flex items-center gap-2">
                <span>
                  <i class="ri-time-line text-4xl text-[#000d6b]"></i>
                </span>
                <div className="header__location-content">
                  <h4 className="text-xl font-bold text-[#000d6b]">Sunday to Friday</h4>
                  <h6 className="font-semibold">10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="flex items-center justify-end"
            >
              <button className="bg-[#000d6b] py-[10px] px-[20px] border-none outline-none rounded-md">
                <Link to="/contact" className="flex items-center gap-x-2 no-underline text-[#fff] justify-end text-base hover:text-[#fff]">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>



      
    </header>
  );
};

export default Header;
