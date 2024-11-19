import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about-section"
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h2>About Me</h2>
            <p>
              I am a passionate Full-Stack Developer with experience in building robust web applications using modern technologies. I love solving complex problems and am always eager to learn new skills.
            </p>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default About;
