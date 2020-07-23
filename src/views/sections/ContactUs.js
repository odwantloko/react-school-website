import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Container, Row, Col } from "reactstrap";
import { MapContainer } from "./MapContainer";

const apiMaps = "AIzaSyBgULUwucUDVGOu_12brCamNiaUgQKUc-I";

const mapStyles = {
  width: '65%',
  height: '20rem',
  position: 'relative'

};


export class ContactUs extends React.Component {
render () {
  return (
    
      <div
        className="section"
        data-background-color="black"
        id="contact-us-section"
        style={{minHeight: '50rem'}}

      >
        <Row className="justify-content-md-center">
          <Col lg="8" md="12">
            <h3 className="title">Want to get in touch with us?</h3>
            <h5 className="description"></h5>
              <p>            
                <i className="fa fa-phone" aria-hidden="true"></i> &nbsp;
                <b>Telephone number: </b>(021) 376 1067
              </p>
              <p>
                <i className="fa fa-envelope" aria-hidden="true"></i> &nbsp;
                <b>E-mail:</b> example@example.co.za
              </p>
              <p>
                <i className="fa fa-map" aria-hidden="true"></i> &nbsp;
                <b>Address:<br/> </b>Oval North Crescent
                <br/>
                Beacon Valley 
                <br/>
                Mitchell's Plain
                <br/>
                7785
                <br/>
              </p>
              <Container>
                <Map
                    google={this.props.google}
                    zoom={16.9}
                    style={mapStyles}
                    initialCenter={{ lat: -34.037523, lng: 18.631795 }}>
                    
                    <Marker position={{ lat: -34.037523, lng: 18.631795 }} />
                </Map>  

              </Container>
          </Col>            
        </Row>

      
         
      </div>


    
  );
}

}

export default GoogleApiWrapper({
  apiKey: apiMaps
})(ContactUs);

const map = {
  //position: 
}