import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import Aboutsection from "../components/UI/Aboutsection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all_images/drive.jpg";
// import OurMembers from "../components/UI/OurMembers";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <Aboutsection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="rounded-lg w-[500px]" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="text-[#000d6b] font-semibold text-3xl">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="text-[#7c8a97] text-base leading-8">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <p className="text-[#7c8a97] text-base leading-8">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <div className=" flex items-center gap-3 mt-4">
                  <span className="h-1 ">
                    <i class="ri-phone-line text-2xl font-medium"></i>
                  </span>

                  <div>
                    <h6 className="text-[#f9a826] font-semibold text-xl">
                      Need Any Help?
                    </h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="text-[#f9a826] font-semibold text-xl">Experts</h6>
              <h2 className="text-[#000d6b] font-semibold text-3xl">Our Members</h2>
            </Col>
            {/* <OurMembers /> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
