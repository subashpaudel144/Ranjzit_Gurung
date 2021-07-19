import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./css/Navbar.css";

class Navbars extends React.Component {
  render() {
    return (
      // <div className = "navbar">
      //    <a href='/' className="Title"> <h1>Ranjzit Photography</h1></a>

      // <ul>
      //    <li><a href='/'>Home</a></li>
      //    <li><a href='/gallery'>Gallery</a></li>
      //   <li> <a href=''>Blog</a></li>
      //    <li><a href='/contact'>Contact</a></li>
      // </ul>

      //    </div>
      <div className='navbar'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className='heading' href="/">Ranjzit Photography</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                <Nav.Link className='nav' href="/">Home</Nav.Link>
                <Nav.Link className='nav' eventKey={3} href="/gallery">
                  Gallery
                </Nav.Link>
                <Nav.Link className='nav' eventKey={2} href="/contact">
                  Contact
                </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default Navbars;
