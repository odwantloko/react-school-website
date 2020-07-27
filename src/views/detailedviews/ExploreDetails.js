import React , {Component} from "react";
import {  Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

class ExploreDetails extends Component {

  render(){
    return (
      <>
        <div
          className="section section-download"
          id="explore-section"
          style={green}>

        <Breadcrumb>
            <BreadcrumbItem><Link to="/"><u>Back to Home</u></Link></BreadcrumbItem>
            <BreadcrumbItem active>Our Code of Conduct</BreadcrumbItem>
        </Breadcrumb> 
            <Row className="justify-content-md-center">
              <Col className="text-center" lg="8" md="12">
            
                <h3 className="title">What we can offer you</h3>
                  <h4><b>Academic</b></h4>
                    <h5 style={text}>We offer the following subjects to choose from:</h5>   
                    <h5 style={text}><b>Compulsory Subjects</b></h5>   
                    <ul style={list}>
                      <li>English Home Language/English First Addition Language</li>
                      <li>Afrikaans Home Language/English First Addition Language</li>
                      <li>Life Orientation</li>
                      <li>Mathematics/Mathematical Literacy/Technical Mathematics</li>
                    </ul>
  
                    <h5 style={text}><b>Subjects To Choose from</b></h5>   
                    <ul style={list}>
                     <li>Engineering Graphics & Design</li>
                     <li>Electrical Technology</li>
                     <li>Mechanical Technology</li>
                     <li>Civil Technology</li>
                     <li>Life Sciences</li>
                     <li>Physical Sciences</li>
                     <li>Accounting</li>
                     <li>Business Studies</li>
                     <li>Accounting</li>
                     <li>Computer Applications Technology</li>
                    </ul>
  
                  <h4 className="title">Non-Academic</h4>
                    <h5 style={text}>[insert list of Activities]</h5>
  
              </Col>
              <Col className="text-center" lg="8" md="12">
                
              </Col>
            </Row>
          </div>
      </>
    );
  }
  
}

export default ExploreDetails;

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