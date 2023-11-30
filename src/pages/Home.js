import React from 'react'
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from '../components/UI/Aboutsection';
import { Container, Row, Col } from "reactstrap";
import ServicesList from '../components/UI/ServicesList';
import FindCarForm from "../components/UI/FindCarform";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from '../components/UI/BecomeDriverSection';
import Testimonial from '../components/UI/Testimonial';
import BlogList from '../components/UI/BlogList';
//import Image from "../assets/all_images/toyota.png"
const Home = () => {
  return (
   <Helmet title="Home">

     {/* ============= hero section =========== */}

    <section className='p-0 relative z-10 mb-[200px]'>

      <HeroSlider/>

      <div className="absolute bottom-[-150px] z-11 w-full max-lg:bottom-[-100px] max-sm:bottom-[-330px] max-md:bottom-[-290px]">
          <Container>
            <Row className="bg-[#fff] shadow-2xl shadow-gray-500">
              <Col lg="4" md="4">
                <div className="find_cars-left max-w-full h-[200px] mt-3 mb-3 max-lg:py-[65px] max-lg:px-[22px] max-md:pt-[20px] max-md:pb-0 max-md:bg-[#fff] max-md:text-center">
                  <h2 className='font-semibold text-3xl max-md:text-2xl max-sm:text-base'>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>

    </section>
      {/* =========== about section ================ */}
      <AboutSection />
       {/* ========== services section ============ */}
       <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="text-[#f9a826] font-semibold text-xl">See our</h6>
              <h2 className="text-[#000d6b] font-semibold text-3xl">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
        {/* =========== car offer section ============= */}
        <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="text-[#f9a826] font-semibold text-xl">Come with</h6>
              <h2 className="text-[#000d6b] font-semibold text-3xl">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
       {/* =========== become a driver section ============ */}
       <BecomeDriverSection/>

        {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="text-[#f9a826] font-semibold text-xl">Our clients says</h6>
              <h2 className="text-[#000d6b] font-semibold text-3xl">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

 {/* =============== blog section =========== */}
 <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="text-[#f9a826] font-semibold text-xl">Explore our blogs</h6>
              <h2 className="text-[#000d6b] font-semibold text-3xl">Latest Blogs</h2>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>
   </Helmet>
  )
}

export default Home