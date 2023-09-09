import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col} from "reactstrap";
const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];
const footer = () => {
  return (
    <footer className="bg-[#000d6b] pb-4 pt-12">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" flex items-center gap-2 no-underline">
                  <i class="ri-car-line text-[#fff] font-normal"></i>
                  <span className="text-[#fff] font-medium">
                    Wheel Wizardry <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="text-[#ffffff] mt-4 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinction, itaque reiciendis ab cupiditate har
              quam veniam, omnis expedita animi quibusdam obcaecati molliti
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4 flex flex-col items-center">
              <h5 className="text-[#fff]">Quick Links</h5>
              <div className="flex flex-col items-center ">
                {quickLinks.map((item, index) => (
                     <Link
                      to={item.path}
                      key={index}
                      className="text-[#ffffff] no-underline mt-1 p-1 font-light transition-transform hover:scale-125 hover:duration-200 hover:text-[#f9a826]"
                    >
                      {item.display}
                    </Link>
                  
                ))}
              </div>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="text-[#fff] mb-4">Head Office</h5>
              <p className="font-light text-[#ffffff]">
                123 Zindabazar, Mumbai City, India
              </p>
              <p className="font-light text-[#ffffff]">Phone: +0995345875365</p>

              <p className="font-light text-[#ffffff]">
                Email: muhib5532@gmail.com
              </p>

              <p className="font-light text-[#ffffff]">
                Office Time: 10am - 7pm
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="text-[#fff]">Newsletter</h5>
              <p className="text-[#7c8a97] text-base leading-8">Subscribe our newsletter</p>
              <div className="flex items-center justify-between py-2 px-3 border border-[#7c8a972f] rounded-[50px] bg-[#020a4de9]">
                <input type="email" placeholder="Email" className="text-[#fff] border-none outline-none bg-transparent"/>
                <span>
                  <i class="ri-send-plane-line text-[#fff]"></i>
                </span>
              </div>
            </div>
          </Col>

           <Col lg="12">
            <div className="border-t border-[#7c8a972f]">
              <p className="text-[#7c8a97]  flex items-center justify-center gap-1 pt-2 text-base leading-8">
                <i class="ri-copyright-line"></ i>Copyright 
                {/* {year} */} 2023
                , Developed by
                Naincy Singh. All rights reserved.
              </p>
            </div>
          </Col> 
        </Row>
      </Container>
    </footer>
  );
};

export default footer;
