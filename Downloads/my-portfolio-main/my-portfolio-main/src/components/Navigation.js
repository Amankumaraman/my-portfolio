import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <Navbar expand="lg" fixed="top" style={{ background: 'rgba(5, 5, 5, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #333' }}>
      <Container>
        <Navbar.Brand href="#" className="gaming-font glow-text" style={{ color: 'var(--neon-cyan)', fontSize: '1.5rem' }}>
          AMAN_DEV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'var(--neon-cyan)' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {["game", "about", "skills", "experience", "projects", "contact"].map((item) => (
              <Nav.Link 
                key={item}
                as={Link} 
                to={item} 
                smooth 
                duration={500} 
                className="retro-font nav-mission-link"
                style={{ cursor: 'pointer', color: 'var(--text-main)', margin: '0 10px', fontSize: '0.6rem' }}
              >
                [{item.toUpperCase()}]
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <style>{`
        .nav-mission-link:hover {
          color: var(--neon-cyan) !important;
          text-shadow: 0 0 10px var(--neon-cyan);
        }
        .navbar-toggler-icon {
          filter: invert(1) sepia(1) saturate(10000%) hue-rotate(180deg);
        }
      `}</style>
    </Navbar>
  );
};

export default Navigation;
