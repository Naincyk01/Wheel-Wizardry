import React from "react";
import { Container } from "reactstrap";


const CommonSection = ({ title }) => {
  return (
    <section className="common__section mb-5">
      <Container className="text-center">
        <h1 className="border text-base">{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection;