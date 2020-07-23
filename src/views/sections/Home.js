import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Home() {
  return (
    <>
      <div
        className="section section-download"
        id="home-section"
        style={green}

      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Welcome to Oval North High School's Website</h3>
              <h5 className="description" style={{color: '#fff'}}>
                [Insert intro paragraph, e.g. Year school was founded, school values/beliefs etc.]
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
              
            </Col>
          </Row>
         
        </Container>
      </div>
    </>
  );
}

export default Home;

const green = {
  backgroundColor: "#3b853b",
  color: "#ffffff"
}