import React from 'react'
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
// import FindCarForm from "../components/UI/FindCarform";
import IMG from "../assets/all_images/toyota_offer_2 (1).png"
const Home = () => {
  return (
   <Helmet title="Home">

     {/* ============= hero section =========== */}

    <section className='p-0 relative z-10 mb-4 '>
      <HeroSlider/>

      <div className="absolute bottom-[-150px] z-11 w-full">
          <Container>
            <Row className="bg-[#fff] shadow-2xl shadow-gray-500">
              <Col lg="4" md="4">
                <div className="py-[65px] px-[35px] bg-center bg-no-repeat bg-cover"
                 style = {{backgroundImage:`url(${IMG})`}}>
                  <h2 className='font-semibold text-4xl'>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                {/* <FindCarForm /> */}
              </Col>
            </Row>
          </Container>
        </div>


    </section>
   </Helmet>
  )
}

export default Home