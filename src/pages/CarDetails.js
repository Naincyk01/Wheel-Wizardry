import React, { useEffect } from "react";

import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
 import BookingForm from "../components/UI/BookingForm";
// import PaymentMethod from "../components/UI/PaymentMethod";

const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className=" mt-10 w-[550px]" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="text-[#000d6b] font-semibold text-3xl">{singleCarItem.carName}</h2>

                <div className="flex items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price font-bold text-2xl">
                    ${singleCarItem.price}.00 / Day
                  </h6>

                  <span className="flex align-items-center gap-2">
                    <span className="text-[#f9a826]">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="text-[#7c8a97] text-base leading-8">
                  {singleCarItem.description}
                </p>

                <div
                  className="flex items-center mt-3 gap-x-16"
                 
                >
                  <span className="flex items-center gap-1 text-[#7c8a97] text-base leading-8">
                    <i
                      class="ri-roadster-line text-[#f9a826]"
                      
                    ></i>{" "}
                    {singleCarItem.model}
                  </span>

                  <span className="flex items-center gap-1 text-[#7c8a97] text-base leading-8">
                    <i
                      class="ri-settings-2-line text-[#f9a826]"
            
                    ></i>{" "}
                    {singleCarItem.automatic}
                  </span>

                  <span className="flex items-center gap-1 text-[#7c8a97] text-base leading-8">
                    <i
                      class="ri-timer-flash-line text-[#f9a826]"
                      
                    ></i>{" "}
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className="flex items-center mt-3 gap-x-11"

                >
                  <span className="flex items-center gap-1 text-[#7c8a97] text-base leading-8">
                    <i class="ri-map-pin-line text-[#f9a826]"></i>{" "}
                    {singleCarItem.gps}
                  </span>

                  <span className="flex items-center gap-1 text-[#7c8a97] text-base leading-8">
                    <i
                      class="ri-wheelchair-line text-[#f9a826]"
                    ></i>{" "}
                    {singleCarItem.seatType}
                  </span>

                  <span className="flex items-center gap-1 text-[#7c8a97] text-base leading-8">
                    <i
                      class="ri-building-2-line text-[#f9a826]"
              
                    ></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col> 

             <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 font-bold text-3xl text-[#000d6b]">Booking Information</h5>
                 <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 font-bold text-3xl text-[#000d6b]">Payment Information</h5>
                 {/* <PaymentMethod /> */}
              </div>
            </Col> 
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;