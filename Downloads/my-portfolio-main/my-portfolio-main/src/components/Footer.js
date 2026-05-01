import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer" style={{ padding: '4rem 0', borderTop: '1px solid #222', background: '#000' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h4 className="gaming-font" style={{ fontSize: '1rem', color: 'var(--neon-cyan)' }}>AMAN_KUMAR</h4>
            <p className="retro-font" style={{ fontSize: '0.5rem', color: 'var(--text-dim)', marginTop: '10px' }}>
              DESIGNED & DEVELOPED FOR NEXT-GEN WEB PERFORMANCE.
            </p>
          </Col>
          <Col md={6} style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
              <span className="retro-font" style={{ fontSize: '0.6rem', color: 'var(--neon-green)' }}>[SECURE_CONNECTION]</span>
              <span className="retro-font" style={{ fontSize: '0.6rem' }}>V2.5.0</span>
            </div>
            <p style={{ margin: '10px 0 0', fontSize: '0.8rem', color: '#444' }}>
              © 2026 ELITE PROTOCOL. ALL RIGHTS RESERVED.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
