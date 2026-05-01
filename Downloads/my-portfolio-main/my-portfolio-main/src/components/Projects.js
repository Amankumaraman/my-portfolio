import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SiteBuilt AI",
    category: "AI/ML",
    description: "AI-powered system that converts site photos into accurate As-Built drawings using image processing and LLMs.",
    tech: ["FastAPI", "Next.js", "LLM", "OpenCV"],
    link: "https://sitebuilt.vercel.app/"
  },
  {
    id: 2,
    title: "Railway Tender Automation",
    category: "Automation",
    description: "Automated daily tender retrieval system with Selenium, Google Drive integration, and email notifications.",
    tech: ["Python", "Selenium", "Django", "PostgreSQL"],
    link: "https://ireps.suvidhaen.com/"
  },
  {
    id: 3,
    title: "CCTV Wagon Monitoring",
    category: "IoT",
    description: "IoT platform for live train tracking and historical video monitoring using CCTV camera streams.",
    tech: ["FastAPI", "React", "AWS S3", "IoT"],
    link: "https://cctv-wagon.suvidhaen.com/"
  },
  {
    id: 4,
    title: "Orbit Marketplace",
    category: "Web/E-comm",
    description: "Odoo-integrated E-commerce platform with RAG chatbot for contextual product recommendations.",
    tech: ["Django", "LangChain", "Flutter", "FAISS"],
    link: "#"
  },
  {
    id: 5,
    title: "RAG Chatbot",
    category: "AI/ML",
    description: "Domain-specific AI assistant using RAG pipeline for context-aware document answering.",
    tech: ["FastAPI", "FAISS", "Transformers", "OpenAI"],
    link: "https://github.com/Amankumaraman/RAG-ChatApp"
  },
  {
    id: 6,
    title: "Doc Scanner OCR",
    category: "AI/ML",
    description: "High-accuracy document scanning and text extraction pipeline with OpenCV and Tesseract.",
    tech: ["Python", "OpenCV", "Tesseract", "Lambda"],
    link: "https://github.com/Amankumaraman/Scanner-App"
  }
];

const ProjectCard = ({ project }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="cyber-panel mission-card"
    style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
      <span className="retro-font" style={{ fontSize: '0.6rem', color: 'var(--neon-purple)' }}>MISSION_0{project.id}</span>
      <span className="retro-font" style={{ fontSize: '0.6rem', color: 'var(--neon-cyan)' }}>[{project.category}]</span>
    </div>
    <h3 className="gaming-font" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{project.title}</h3>
    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', flexGrow: 1 }}>{project.description}</p>
    <div style={{ margin: '1rem 0', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
      {project.tech.map((t, i) => (
        <span key={i} className="retro-font" style={{ fontSize: '0.5rem', background: '#1a1a1a', padding: '3px 6px', border: '1px solid #333' }}>
          {t}
        </span>
      ))}
    </div>
    <a href={project.link} target="_blank" rel="noreferrer" className="cyber-button-small">LAUNCH MISSION</a>
  </motion.div>
);

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AI/ML", "Web/E-comm", "Automation", "IoT"];

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter || (filter === "AI/ML" && p.category === "AI/ML"));

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="text-center glow-text" style={{ marginBottom: '3rem' }}>MISSION CONTROL</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <Row>
          {filteredProjects.map((project) => (
            <Col key={project.id} xs={12} md={6} lg={4} style={{ marginBottom: '2rem' }}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
      <style>{`
        .filter-btn {
          background: transparent;
          border: 1px solid #333;
          color: var(--text-dim);
          padding: 8px 15px;
          font-family: var(--font-gaming);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s;
        }
        .filter-btn:hover, .filter-btn.active {
          border-color: var(--neon-cyan);
          color: var(--neon-cyan);
          box-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
        }
        .cyber-button-small {
          display: block;
          text-align: center;
          border: 1px solid var(--neon-cyan);
          color: var(--neon-cyan);
          text-decoration: none;
          font-family: var(--font-retro);
          font-size: 0.6rem;
          padding: 10px;
          transition: all 0.3s;
          background: rgba(0, 243, 255, 0.05);
        }
        .cyber-button-small:hover {
          background: var(--neon-cyan);
          color: #000;
          box-shadow: 0 0 15px var(--neon-cyan);
        }
        .mission-card {
          transition: transform 0.3s;
        }
        .mission-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};

export default Projects;
