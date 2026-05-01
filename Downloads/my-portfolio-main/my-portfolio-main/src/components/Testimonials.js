import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="testimonials-section"
    >
      <Container>
        <h2>Testimonials</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Text>
                  "Aman is a highly skilled developer with a deep understanding of modern web technologies. His contributions were invaluable to our project."
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">Sanjay Chandola, Software Engineer</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Text>
                  "Working with Aman was a great experience. His expertise in AI and machine learning helped us achieve our goals faster and more efficiently."
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">Anmol Rawat, Software Engineer</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Text>
                  "Aman’s ability to solve complex problems is impressive. He has a knack for delivering innovative solutions on time."
                </Card.Text>
                <Card.Footer>
                  <small className="text-muted">Aman Rajput, Software Engineer</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Testimonials;
