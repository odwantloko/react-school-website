import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page

import Carousel from "./index-sections/Carousel.js";

import Home from "./sections/Home.js";
import Admissions from "./sections/Admissions.js";
import CodeOfConduct from "./sections/CodeOfConduct.js";
import Explore from "./sections/Explore.js";
import ContactUs from "./sections/ContactUs.js";
import MatricSpot from "./sections/MatricSpot.js";
import OfferCarouselSection from "./index-sections/OfferCarousel.js";


function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Home/>
          <CodeOfConduct/>
          <Explore/>
          <OfferCarouselSection/>
          <Admissions/>
          <Carousel />

          {/* <MatricSpot/> */}
          <ContactUs/>
        </div>
        {/* <DarkFooter /> */}
      </div>
    </>
  );
}

export default Index;
