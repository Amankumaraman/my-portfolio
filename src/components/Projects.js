import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const projectsData = [
  { id: 1, title: "AI Chatbot", category: "AI", description: "An AI-powered chatbot built with Python and TensorFlow.", repo: "https://github.com/Amankumaraman/RAG-ChatApp" },
  { id: 2, title: "E-Commerce Website", category: "Web Development", description: "A fully functional e-commerce website using Django and React.", repo: "https://github.com/Amankumaraman/Homes.web" },
  { id: 3, title: "Portfolio Website", category: "Web Development", description: "A personal portfolio website showcasing my skills and projects.", repo: "https://github.com/Amankumaraman/Portfolio_demo" },
  { id: 4, title: "Stock Prediction Model", category: "AI", description: "A machine learning model to predict stock prices using Python.", repo: "https://github.com/yourusername/stock-prediction-model" },
  { id: 5, title: "Telegram Bot", category: "AI", description: "A bot for Telegram, automating tasks and providing quick responses to queries.", repo: "https://github.com/Amankumaraman/TeleBot" },
  { id: 6, title: "Scanner App", category: "AI", description: "An application for scanning documents using OpenCV and Tesseract.", repo: "https://github.com/Amankumaraman/Scanner-App" },
  { id: 7, title: "Student Exam Preparation Website", category: "Web Development", description: "A platform with APIs to help students prepare for exams efficiently.", repo: "https://github.com/Amankumaraman/Student-Exam-Prep" },
  { id: 8, title: "Video Processing Platform", category: "AI", description: "A tool for processing and analyzing videos with advanced AI algorithms.", repo: "https://github.com/Amankumaraman/Video_processor" },
  { id: 9, title: "Vendor Management System", category: "Web Development", description: "A system to manage vendor relationships and track performance.", repo: "https://github.com/Amankumaraman/vendor_management_system" },
  { id: 10, title: "PDF Summarizer", category: "AI", description: "An application to summarize large PDFs into concise, readable content.", repo: "https://github.com/Amankumaraman/Pdf-Summarizer" },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projectsData : projectsData.filter((project) => project.category === filter);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="projects-section"
    >
      <Container>
        <h2>Projects</h2>
        <div className="filter-buttons">
          <Button variant="outline-primary" onClick={() => setFilter("All")}>
            All
          </Button>
          <Button variant="outline-primary" onClick={() => setFilter("Web Development")}>
            Web Development
          </Button>
          <Button variant="outline-primary" onClick={() => setFilter("AI")}>
            AI
          </Button>
        </div>
        <Row>
          {filteredProjects.map((project) => (
            <Col key={project.id} xs={12} md={6} lg={4}>
              <Card className="project-card mb-4">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="outline-secondary" href={project.repo} target="_blank">
                    GitHub Repo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
};

export default Projects;
