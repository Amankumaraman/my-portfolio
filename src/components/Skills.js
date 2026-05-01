import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaAws,
} from "react-icons/fa";
import {
  SiDjango,
  SiPostgresql,
  SiLangchain,
} from "react-icons/si";

const skillsData = [
  { name: "Python Core", icon: <FaPython />, level: 95, color: "var(--neon-cyan)", desc: "Metaprogramming, AsyncIO, Optimizing" },
  { name: "Django / FastAPI", icon: <SiDjango />, level: 90, color: "var(--neon-purple)", desc: "REST, GraphQL, Microservices" },
  { name: "GenAI / RAG", icon: <SiLangchain />, level: 88, color: "var(--neon-green)", desc: "LangChain, VectorDB, Prompt Eng." },
  { name: "React / Next.js", icon: <FaReact />, level: 85, color: "var(--neon-pink)", desc: "SSR, State Mgmt, Animations" },
  { name: "Database Arch", icon: <SiPostgresql />, level: 85, color: "var(--neon-cyan)", desc: "PostgreSQL, Redis, Query Tuning" },
  { name: "Cloud / DevOps", icon: <FaAws />, level: 80, color: "var(--neon-purple)", desc: "AWS, Docker, CI/CD, Nginx" },
];

const SkillBar = ({ name, icon, level, color, desc }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    style={{ marginBottom: '3rem', cursor: 'pointer' }}
    className="skill-item-wrapper"
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
      <div style={{ 
        width: '40px', 
        height: '40px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        background: 'rgba(255,255,255,0.05)',
        border: `1px solid ${color}`,
        color: color,
        boxShadow: `0 0 10px ${color}33`
      }}>
        {icon}
      </div>
      <div>
        <span className="gaming-font" style={{ fontSize: '1rem', color }}>{name}</span>
        <p style={{ margin: 0, fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{desc}</p>
      </div>
      <span className="retro-font" style={{ marginLeft: 'auto', color: 'var(--text-dim)' }}>XP_{level}</span>
    </div>
    <div style={{ width: '100%', height: '4px', background: '#111', position: 'relative', overflow: 'hidden' }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        style={{ height: '100%', background: color, boxShadow: `0 0 15px ${color}` }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 className="glow-text" style={{ fontSize: '3rem' }}>TECH_ARSENAL</h2>
          <p className="retro-font" style={{ color: 'var(--text-dim)' }}>[SKILLS_LOADOUT_V2.1]</p>
        </div>
        <Row>
          {skillsData.map((skill, index) => (
            <Col key={index} lg={6}>
              <SkillBar {...skill} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
