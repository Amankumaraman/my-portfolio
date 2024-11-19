import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      alert("Form submitted successfully!");
    }
    setValidated(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="contact-section"
    >
      <Container>
        <h2>Contact Me</h2>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">Please enter your message.</Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Contact;
