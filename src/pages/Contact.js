import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";



const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="font-bold mb-4">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea border"
                  ></textarea>
                </FormGroup>

                <button className="py-[7px] px-[15px] bg-[#000d6b] text-[#fff] border-none outline-none rounded-md" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info max-md:mt-8">
                <h6 className="font-bold">Contact Information</h6>
                <p className="text-[#7c8a97] text-base leading-8 mb-0">
                  123 ZindaBazar, Sylhet, Bangladesh
                </p>
                <div className="flex items-center gap-2">
                  <h6 className="mb-0 text-lg">Phone:</h6>
                  <p className="text-[#7c8a97] text-base leading-8 mb-0">+88683896366</p>
                </div>

                <div className="flex align-items-center gap-2">
                  <h6 className="mb-0 text-lg">Email:</h6>
                  <p className="text-[#7c8a97] text-base leading-8 mb-0">example@gmail.com</p>
                </div>

                <h6 className="font-bold mt-4">Follow Us</h6>

                <div className="flex items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="no-underline text-[#000d6b] font-medium text-xl"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;