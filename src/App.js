import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { Helmet } from "react-helmet";
import { Element } from "react-scroll";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Helmet>
        <title>Aman Kumar | Portfolio</title>
        <meta name="description" content="Aman Kumar's personal portfolio website showcasing skills, projects, and experience." />
      </Helmet>
      <Navigation />
      <Header />
      <Container fluid>
        <Element name="about">
          <About />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="testimonials">
          <Testimonials />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
