import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Aman Kumar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="about" smooth duration={500}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to="skills" smooth duration={500}>
            Skills
          </Nav.Link>
          <Nav.Link as={Link} to="projects" smooth duration={500}>
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="testimonials" smooth duration={500}>
            Testimonials
          </Nav.Link>
          <Nav.Link as={Link} to="contact" smooth duration={500}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
