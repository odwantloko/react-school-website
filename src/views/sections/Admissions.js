import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Admissions() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="admissions-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Admissions</h3>
              <h5 className="description">
                [insert admissions process, requirements, what parents need to bring with]
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

export default Admissions;


