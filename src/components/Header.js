import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col xs={12} md={8} className="header-content">
            <motion.h1
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
            >
              Welcome to My Portfolio
            </motion.h1>
            <p className="lead">
              I'm Aman Kumar, a Full-Stack Developer with a passion for creating dynamic and responsive web applications.
            </p>
            <Button variant="primary" href="#about">
              Learn More About Me
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
