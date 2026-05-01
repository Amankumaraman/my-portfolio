import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Header = () => {
  const [text, setText] = useState("");
  const fullText = "AMAN KUMAR";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="cyber-panel" style={{ padding: '4rem' }}>
              <div className="hud-corner top-left" />
              <div className="hud-corner top-right" />
              <div className="hud-corner bottom-left" />
              <div className="hud-corner bottom-right" />

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <span className="retro-font pulse" style={{ color: 'var(--neon-green)' }}>● SYSTEM_ONLINE</span>
                <span className="retro-font" style={{ color: 'var(--text-dim)' }}>LOC: INDIA_REGION</span>
              </div>
              
              <div className="title-wrapper" style={{ position: 'relative' }}>
                <h1 className="glow-text hero-title">
                  {text}<span className="cursor-blink">_</span>
                </h1>
                <p className="retro-font hero-subtitle">[ELITE_FULLSTACK_DEVELOPER]</p>
              </div>

              <div className="divider" style={{ width: '100px', height: '4px', background: 'var(--neon-cyan)', margin: '30px 0' }} />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
              >
                <p className="lead" style={{ fontSize: '1.4rem', fontWeight: '300', maxWidth: '800px' }}>
                  Engineering high-performance <span className="glow-text">AI Systems</span>, 
                  scalable <span className="glow-text-purple">Backend Architectures</span>, 
                  and immersive digital experiences.
                </p>

                <div style={{ marginTop: '4rem', display: 'flex', gap: '20px' }}>
                  <a href="#game" className="cyber-btn">ENTER ADVENTURE</a>
                  <a href="#projects" className="cyber-btn" style={{ borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)' }}>VIEW ARCHIVE</a>
                </div>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
      <style>{`
        .hud-corner {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 2px solid var(--neon-cyan);
          opacity: 0.5;
        }
        .top-left { top: 10px; left: 10px; border-right: none; border-bottom: none; }
        .top-right { top: 10px; right: 10px; border-left: none; border-bottom: none; }
        .bottom-left { bottom: 10px; left: 10px; border-right: none; border-top: none; }
        .bottom-right { bottom: 10px; right: 10px; border-left: none; border-top: none; }
        
        .cursor-blink {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .hero-title {
          font-size: 5rem;
          line-height: 1;
          margin: 0;
        }
        .hero-subtitle {
          color: var(--neon-purple);
          margin-top: 10px;
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .hero-subtitle { font-size: 0.5rem; }
          .cyber-panel { padding: 1.5rem !important; }
        }
        @media (max-width: 576px) {
          .hero-title { font-size: 1.8rem; }
        }
      `}</style>
    </header>
  );
};

export default Header;
