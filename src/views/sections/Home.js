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
              <h3 className="title">Do you love this Bootstrap 4 UI Kit?</h3>
              <h5 className="description">
                Cause if you do, it can be yours for FREE. Hit the button below
                to navigate to Creative Tim or Invision where you can find the
                kit in HTML or Sketch/PSD format. Start a new project or give an
                old Bootstrap project a new look!
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