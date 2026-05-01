import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <h2 className="text-center glow-text" style={{ marginBottom: '4rem' }}>PLAYER_PROFILE [Bio]</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="cyber-panel"
              style={{ position: 'relative' }}
            >
              <div className="profile-overlay" style={{ position: 'absolute', top: '10px', left: '10px', color: 'var(--neon-cyan)', fontSize: '0.6rem' }}>
                STATUS: ONLINE
              </div>
              <p className="lead" style={{ marginTop: '1.5rem' }}>
                Python Full Stack Developer with 2.5+ years of hands-on experience building scalable backend systems, 
                automation tools, and AI-powered applications.
              </p>
              <p style={{ color: 'var(--text-dim)' }}>
                Specialized in REST API architecture, LLM integration, OCR pipelines, and Retrieval-Augmented Generation (RAG). 
                Experienced in developing production-ready systems, optimizing performance, and automating business workflows using modern AI tools.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <h5 className="gaming-font" style={{ fontSize: '0.8rem', color: 'var(--neon-purple)' }}>TRAITS:</h5>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
                  {["Scalability", "Optimization", "Automation", "AI Integration"].map(trait => (
                    <span key={trait} className="retro-font" style={{ fontSize: '0.5rem', border: '1px solid #444', padding: '5px 10px' }}>
                      +{trait}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>
          <Col md={6}>
            <div className="cyber-panel" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
              <h3 className="gaming-font" style={{ color: 'var(--neon-cyan)', fontSize: '1.2rem' }}>KEY_ACHIEVEMENTS:</h3>
              <ul className="achievement-list" style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
                {[
                  "Built 15+ production APIs for automation",
                  "Developed LLM-powered applications using RAG",
                  "Improved backend performance by 30–40%",
                  "Deployed applications using AWS, Docker, Nginx"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}
                  >
                    <span style={{ color: 'var(--neon-pink)' }}>▶</span> {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
