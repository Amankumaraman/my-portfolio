import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <p>&copy; {new Date().getFullYear()} Aman Kumar. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
