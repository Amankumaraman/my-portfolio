import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const projectsData = [
  // Existing projects (kept, only refined to match your resume)

  {
    id: 1,
    title: "RAG Chatbot (GenAI Chat App)",
    category: "AI",
    description:
      "A Retrieval-Augmented Generation chatbot using Transformers, FAISS, and LangChain to answer domain-specific queries with context-aware responses.",
    repo: "https://github.com/Amankumaraman/RAG-ChatApp",
  },
  {
    id: 2,
    title: "E-Commerce Website (Homes.web)",
    category: "Web Development",
    description:
      "A full-stack e-commerce platform built with Django on the backend and React on the frontend, featuring product listing, cart, and checkout flows.",
    repo: "https://github.com/Amankumaraman/Homes.web",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "A personal portfolio website showcasing my skills, experience, and projects built with modern frontend best practices.",
    repo: "https://github.com/Amankumaraman/Portfolio_demo",
  },
  {
    id: 4,
    title: "Stock Prediction Model",
    category: "AI",
    description:
      "A machine learning model for stock price prediction using Python and time-series analysis techniques.",
    repo: "https://github.com/yourusername/stock-prediction-model",
  },
  {
    id: 5,
    title: "Telegram Bot (TeleBot)",
    category: "AI",
    description:
      "A Telegram bot that automates tasks, responds to user queries, and integrates with external APIs for smart automation.",
    repo: "https://github.com/Amankumaraman/TeleBot",
  },
  {
    id: 6,
    title: "Doc Scanner App (OCR)",
    category: "AI",
    description:
      "A document scanning and OCR application using OpenCV and Tesseract to detect document edges and extract text with high accuracy.",
    repo: "https://github.com/Amankumaraman/Scanner-App",
  },
  {
    id: 7,
    title: "Student Exam Preparation Website",
    category: "Web Development",
    description:
      "A web platform providing APIs and tools to help students prepare for exams efficiently with organized resources.",
    repo: "https://github.com/Amankumaraman/Student-Exam-Prep",
  },
  {
    id: 8,
    title: "Video Processing Platform",
    category: "AI",
    description:
      "A tool for processing and analyzing videos using computer vision and AI-based pipelines.",
    repo: "https://github.com/Amankumaraman/Video_processor",
  },
  {
    id: 9,
    title: "Vendor Management System",
    category: "Web Development",
    description:
      "A web application to manage vendor onboarding, performance tracking, and vendor-related operations.",
    repo: "https://github.com/Amankumaraman/vendor_management_system",
  },
  {
    id: 10,
    title: "PDF Summarizer",
    category: "AI",
    description:
      "An AI-powered tool to summarize long PDF documents into concise, readable content using NLP techniques.",
    repo: "https://github.com/Amankumaraman/Pdf-Summarizer",
  },

  // New projects from your resume (no GitHub link required)

  {
    id: 11,
    title: "Orbit Marketplace (Odoo-Integrated App)",
    category: "Web Development",
    description:
      "A marketplace application with Flutter frontend and Django backend integrated with Odoo APIs for product, order, and user management, including payment gateway and OTP-based onboarding.",
    repo: "", // no repo yet / private
  },
  {
    id: 12,
    title: "Sales Dashboard (VoIP Campaign App)",
    category: "AI",
    description:
      "An intelligent sales analytics dashboard with NLP-powered search, Twilio VoIP integration, and real-time campaign and lead tracking.",
    repo: "", // no repo yet / private
  },
  {
    id: 13,
    title: "Study Tracker (Progress Analytics App)",
    category: "Web Development",
    description:
      "A productivity and learning progress tracking app with Django REST APIs and React dashboards visualizing daily, weekly, and monthly study metrics.",
    repo: "", // no repo yet / private
  },
  {
    id: 14,
    title: "Web Scraper Automation Tool",
    category: "Web Development",
    description:
      "An automation tool built with Scrapy and BeautifulSoup to scrape, clean, and export structured data from multiple web sources.",
    repo: "", // no repo yet / private
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="projects-section"
    >
      <Container>
        <h2>Projects</h2>
        <div className="filter-buttons mb-3">
          <Button
            variant={filter === "All" ? "primary" : "outline-primary"}
            className="me-2 mb-2"
            onClick={() => setFilter("All")}
          >
            All
          </Button>
          <Button
            variant={filter === "Web Development" ? "primary" : "outline-primary"}
            className="me-2 mb-2"
            onClick={() => setFilter("Web Development")}
          >
            Web Development
          </Button>
          <Button
            variant={filter === "AI" ? "primary" : "outline-primary"}
            className="mb-2"
            onClick={() => setFilter("AI")}
          >
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
                  {project.repo && (
                    <Button
                      variant="outline-secondary"
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Repo
                    </Button>
                  )}
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
