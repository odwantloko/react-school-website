import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";

// core components

function CodeOfConduct() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="code-of-conduct-section"
      >
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Oval North High School Code of Conduct</h3>
              <h5 className="description">
                As members of the Oval North Community, We pride ourselves in abiding by the School's Code of Conduct.
                <br></br><br></br><br></br>


                Our School Conduct is as follows:
              </h5>
              <h5>DO's:</h5>
              <ol style={text}>
                <li>Arrive at school everyday, neatly attired in your school uniform, before 07h55 and attend ALL your classes, including the invigilation classes</li>
                <li>Do homework, study for tests and examinations, complete PATs and hand in assignments before or on the due date.</li>
                <li>Be fully attired in the school uniform and have no disallowed garments, jewellery and electronic devices with you.</li>
               <Button>
               <Link to="/code-of-conduct"> READ MORE  <i className="fa fa-arrow-right"></i></Link>

               </Button>

              </ol>

            </Col>
           
          </Row>
         
      </div>
    </>
  );
}

export default CodeOfConduct;
const text = {
  textAlign:'left',
  lineHeight:'2.5'

}