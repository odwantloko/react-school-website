import React from "react";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" style={{color: "#fff", backgroundColor: "#a9a9a9"}}>
        <Container style={{margin: "0px 25px"}}>
          <div className="navbar-translate">
            <NavbarBrand

            >
              <div className="team-player" style={{fontSize:'18px'}}>
                    <img
                      alt="logo"
                      src={require("assets/img/trans_logo.png")}
                      style={{maxHeight:'100px'}}></img> 
              Oval North High School
              </div>
            </NavbarBrand>
          
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar className="navbar-right">
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("home-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons business_bank"></i>
                  <p>Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("code-of-conduct-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons files_paper"></i>
                  <p>Code of Conduct</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("explore-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons education_atom"></i>
                  <p>Explore</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("admissions-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons education_hat"></i>
                  <p>Admissions</p>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("matric-spot-section")
                      .scrollIntoView();
                  }}
                >                  
                <i className="now-ui-icons education_glasses"></i>
                  <p>Matric Spot</p>
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact-us-section")
                      .scrollIntoView();
                  }}
                >                
                <i className="now-ui-icons ui-1_email-85"></i>
                  <p>Contact Us</p>
                </NavLink>
              </NavItem>
   
  
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
