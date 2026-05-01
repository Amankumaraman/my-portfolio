import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="text-center glow-text" style={{ marginBottom: '4rem' }}>SECURE_COMMS [Initiate]</h2>
        <Row>
          <Col md={6} style={{ marginBottom: '2rem' }}>
            <div className="cyber-panel">
              <h4 className="gaming-font" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', color: 'var(--neon-cyan)' }}>COMMUNICATION_CHANNELS</h4>
              <div className="contact-nodes">
                <div className="contact-node">
                  <span className="retro-font">EMAIL:</span>
                  <a href="mailto:amanking177@gmail.com">amanking177@gmail.com</a>
                </div>
                <div className="contact-node">
                  <span className="retro-font">PHONE:</span>
                  <span>+91 7505922883</span>
                </div>
                <div className="contact-node">
                  <span className="retro-font">LINKEDIN:</span>
                  <a href="https://linkedin.com/in/aman-kumar-here-for-you" target="_blank" rel="noreferrer">aman-kumar-here-for-you</a>
                </div>
                <div className="contact-node">
                  <span className="retro-font">GITHUB:</span>
                  <a href="https://github.com/Amankumaraman" target="_blank" rel="noreferrer">Amankumaraman</a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="cyber-panel terminal-style">
              <div className="terminal-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="retro-font" style={{ marginLeft: '10px', fontSize: '0.6rem' }}>TERMINAL_V1.0</span>
              </div>
              <form className="mt-4">
                <div className="mb-3">
                  <label className="retro-font" style={{ fontSize: '0.6rem' }}>{'>'} USERNAME:</label>
                  <input 
                    type="text" 
                    className="cyber-input" 
                    placeholder="Enter Identification"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="retro-font" style={{ fontSize: '0.6rem' }}>{'>'} EMAIL_ENTRY:</label>
                  <input 
                    type="email" 
                    className="cyber-input" 
                    placeholder="Enter Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="retro-font" style={{ fontSize: '0.6rem' }}>{'>'} ENCRYPTED_MESSAGE:</label>
                  <textarea 
                    className="cyber-input" 
                    rows="4" 
                    placeholder="Transmission Content"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="button" className="cyber-button-link w-100" style={{ border: '1px solid var(--neon-cyan)', background: 'transparent', color: 'var(--neon-cyan)', fontFamily: 'var(--font-gaming)' }}>
                  SEND_TRANSMISSION
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <style>{`
        .contact-node {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
        }
        .contact-node a, .contact-node span:not(.retro-font) {
          color: var(--text-dim);
          text-decoration: none;
          font-size: 0.9rem;
          margin-top: 5px;
          transition: color 0.3s;
        }
        .contact-node a:hover {
          color: var(--neon-cyan);
        }
        .contact-node .retro-font {
          font-size: 0.7rem;
          color: var(--neon-purple);
        }
        .terminal-style {
          background: #000 !important;
          padding: 1.5rem !important;
        }
        .terminal-header {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #333;
          padding-bottom: 10px;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 5px;
        }
        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }
        .cyber-input {
          width: 100%;
          background: #0a0a0a;
          border: 1px solid #333;
          color: var(--neon-cyan);
          padding: 10px;
          font-family: var(--font-body);
          outline: none;
          margin-top: 5px;
        }
        .cyber-input:focus {
          border-color: var(--neon-cyan);
          box-shadow: 0 0 10px rgba(0, 243, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Contact;
