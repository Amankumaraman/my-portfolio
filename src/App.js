import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Element } from "react-scroll";
import { AnimatePresence } from "framer-motion";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import MarioGame from "./components/Gaming/MarioGame";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="gaming-app-wrapper">
      <Helmet>
        <title>AMAN_KUMAR | ELITE_DEV_PORTFOLIO</title>
        <meta name="description" content="Aman Kumar's High-Tech Gaming Portfolio. Full Stack Developer specializing in Python, Django, FastAPI, and AI." />
      </Helmet>
      
      <AnimatePresence>
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="tech-bg" />
      <CustomCursor />
      
      <Navigation />
      
      <main style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Header />

        <Container>
          <Element name="game">
            <MarioGame />
          </Element>

          <Element name="about">
            <About />
          </Element>

          <Element name="skills">
            <Skills />
          </Element>

          <Element name="experience">
            <Experience />
          </Element>

          <Element name="projects">
            <Projects />
          </Element>

          <Element name="contact">
            <Contact />
          </Element>
        </Container>

        <Footer />
      </main>
    </div>
  );
}

export default App;
