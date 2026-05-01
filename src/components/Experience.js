import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const experienceData = [
  {
    title: "Full Stack Engineer (Part-time)",
    company: "KRAFZEN | Remote (USA)",
    period: "Aug 2025 – Present",
    mission: "Architected SiteBuilt AI generator & company web infrastructure.",
    details: [
      "Built AI-powered system converting site photos into As-Built drawings.",
      "Integrated LLM APIs for structured data extraction.",
      "Translated Figma designs into responsive Next.js apps."
    ],
    tech: "FastAPI, Next.js, LLM API, Python"
  },
  {
    title: "Python Full Stack Developer (Freelance)",
    company: "Sarva Suvidhaen Private Limited",
    period: "Dec 2024 – Present",
    mission: "Automating tender retrieval and IoT wagon monitoring.",
    details: [
      "Built Selenium automation for daily tender extraction.",
      "Developed IoT dashboard for live CCTV wagon tracking.",
      "Integrated S3 & PostgreSQL for video metadata storage."
    ],
    tech: "Django, FastAPI, React, Selenium, S3"
  },
  {
    title: "Python Full Stack Developer",
    company: "Purpus Orgorbit, Hyderabad",
    period: "Jan 2025 – Oct 2025",
    mission: "E-commerce platform integration with Odoo & AI RAG.",
    details: [
      "Architected REST APIs for order & user management.",
      "Built RAG chatbot for contextual product recommendations.",
      "Optimized database queries with Redis caching."
    ],
    tech: "Django, LangChain, FAISS, Redis, Odoo API"
  },
  {
    title: "Python Developer",
    company: "Warals Technology, New Delhi",
    period: "Nov 2023 – Aug 2024",
    mission: "AI solutions for document processing and RAG systems.",
    details: [
      "Designed RAG pipeline for AI Knowledge Assistant.",
      "Developed OCR pipeline using OpenCV and Tesseract.",
      "Integrated serverless workflows using AWS Lambda."
    ],
    tech: "Python, FastAPI, OpenAI, OpenCV, AWS"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="text-center glow-text" style={{ marginBottom: '4rem' }}>QUEST LOG [Completed Missions]</h2>
        <div className="quest-timeline">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="cyber-panel" 
              style={{ marginBottom: '2rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '15px' }}>
                <h4 className="gaming-font" style={{ color: 'var(--neon-cyan)', margin: 0 }}>{exp.title}</h4>
                <span className="retro-font" style={{ fontSize: '0.6rem', color: 'var(--text-dim)' }}>{exp.period}</span>
              </div>
              <p className="retro-font" style={{ color: 'var(--neon-purple)', fontSize: '0.8rem' }}>MISSION: {exp.mission}</p>
              <ul style={{ color: 'var(--text-dim)', paddingLeft: '20px' }}>
                {exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
              </ul>
              <div style={{ marginTop: '15px' }}>
                <span className="retro-font" style={{ fontSize: '0.6rem', background: '#222', padding: '4px 8px', borderRadius: '4px' }}>
                  LOOT: {exp.tech}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
      <style>{`
        .quest-timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
}

export default Experience;
