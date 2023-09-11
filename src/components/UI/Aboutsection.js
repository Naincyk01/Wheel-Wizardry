import React from "react";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/all_images/cars_img/bmw_offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="text-[#f9a826] font-semibold text-xl">About Us</h4>
              <h2 className="text-[#000d6b] font-semibold text-3xl">Welcome to car rent service</h2>
              <p className="text-[#7c8a97] text-base leading-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.
              </p>

              <div className="flex items-center gap-12">
                <p className="text-[#7c8a97] text-base leading-8 flex items-center gap-x-8">
                  <i class="ri-checkbox-circle-line text-[#f9a826] text-lg "></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="text-[#7c8a97] text-base leading-8 flex items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className="gap-x-8 flex items-center">
                <p className="text-[#7c8a97] text-base leading-8 flex items-center gap-2">
                  <i class="ri-checkbox-circle-line text-[#f9a826] text-lg "></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="text-[#7c8a97] text-base leading-8 flex items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;