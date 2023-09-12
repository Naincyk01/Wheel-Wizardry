import React from 'react'
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from '../components/UI/Aboutsection';
import { Container, Row, Col } from "reactstrap";
import ServicesList from '../components/UI/ServicesList';
import FindCarForm from "../components/UI/FindCarform";
//import Image from "../assets/all_images/toyota.png"
const Home = () => {
  return (
   <Helmet title="Home">

     {/* ============= hero section =========== */}

    <section className='p-0 relative z-10 mb-[200px]'>

      <HeroSlider/>

      <div className="absolute bottom-[-150px] z-11 w-full">
          <Container>
            <Row className="bg-[#fff] shadow-2xl shadow-gray-500">
              <Col lg="4" md="4">
                <div className=" find_cars-left max-w-full h-[200px] mt-3 mb-3">
                  <h2 className='font-semibold text-3xl'>Find your best car here</h2>
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
   </Helmet>
  )
}

export default Home