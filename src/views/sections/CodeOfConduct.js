import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function CodeOfConduct() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="code-of-conduct-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Oval North High School Code of Conduct</h3>
              <h5 className="description">
                As members of the Oval North Community, We pride ourselves in abiding by the School's Code of Conduct.      
              </h5>
              <h5>DO's:</h5>
              <ol>
                <li>Arrive at school everyday, neatly attired in your school uniform, before 07h55 and attend ALL your classes, including the invigilation classes</li>
                <li>Do homework, study for tests and examinations, complete PATs and hand in assignments before or on the due date.</li>
                <li>Be fully attired in the school uniform and have no disallowed garments, jewellery and electronic devices with you.</li>
                <li>Protect and enhance the school's name and honour in every possible way you can - at school, at home and in public.</li>
                <li>Greet each other, the staff and visitors to our school. Use "please" and "thank you" all the time.</li>
                <li>use water and electricty sparingly.</li>
              </ol>
              <hr style={{color:"#fff"}}></hr>
              <h5>DONT's:</h5>
              <ol>
                <li>Do not buy, sell, keep, smoke or even be near people who smoke dagga or any other substance including cigarettes.</li>
                <li>Do not pick-up, keep or have knives or other dangerous objects.</li>
                <li>Do not harrass anyone sexually, racially, physically, emotionally or in any other way.</li>
                <li>DO not damage, deface, dirty, steal or break any school property or the property of any other person.</li>
                <li>Do not get involved in any form of gambling.</li>
              </ol>

            </Col>
            <Col className="text-center" lg="8" md="12">
              
            </Col>
          </Row>
         
        </Container>
      </div>
    </>
  );
}

export default CodeOfConduct;
