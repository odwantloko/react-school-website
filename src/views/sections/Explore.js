import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";

// core components

function Explore() {
  return (
    <>
      <div
        className="section section-download"
        id="explore-section"
        style={green}
      >
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">What we can offer you</h3>
                <h4><b>Academic</b></h4>
                  <h5 style={text}>We offer the following subjects to choose from:</h5>   

                  <h5 style={text}><b>Choices</b></h5>   
                  <ul style={list}>
                   <li>Engineering Graphics & Design</li>
                   <li>Electrical Technology</li>
                   <li>Mechanical Technology</li>
                   <li>Civil Technology</li>
                   <Button style={{backgroundColor:'#2c2c2c' ,color:'#fff'}}>
              <Link to="/explore"> READ MORE  <i className="fa fa-arrow-right"></i></Link>
            </Button>
                  </ul>
             
           
            </Col>
          </Row>
        </div>
    </>
  );
}

export default Explore;

const green = {
  backgroundColor: "#797979",
  color: "#ffffff",
  paddingBottom:'0px'
}

const text = {
  color:'#fff'
}

const list = {
  textAlign:'left',
  lineHeight:'2.2'

}