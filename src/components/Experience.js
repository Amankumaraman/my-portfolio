import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>

      {/* PURPUS ORGORBIT */}
      <div className="experience-item">
        <h3>Python Fullstack Developer, Purpus OrgOrbit, Hyderabad</h3>
        <p>Nov 2024 - Present</p>
        <ul>
          <li>Developing Odoo-integrated marketplace platform using Django and Flutter.</li>
          <li>Architecting optimized REST APIs with improved response performance.</li>
          <li>Implementing secure authentication, payments, and AWS-hosted deployments.</li>
        </ul>
      </div>

      {/* WARALS TECHNOLOGY */}
      <div className="experience-item">
        <h3>Python Developer, Warals Technology Pvt. Ltd., New Delhi</h3>
        <p>Nov 2022 - Nov 2024</p>
        <ul>
          <li>Built scalable APIs for sales analytics, VoIP campaigns, and NLP-based insights.</li>
          <li>Developed OCR-based Doc Scanner using OpenCV & Tesseract with high accuracy.</li>
          <li>Created RAG-based GenAI chatbot using Transformers, FAISS & LangChain.</li>
        </ul>
      </div>

      {/* SALESQUEEN SOFTWARE */}
      <div className="experience-item">
        <h3>Front-End Developer, Salesqueen Software Solutions, Tamil Nadu</h3>
        <p>Sep 2021 - Nov 2022</p>
        <ul>
          <li>Built responsive CRM & e-commerce interfaces using HTML, CSS, JS, and React.</li>
          <li>Integrated REST APIs and collaborated with backend teams for smoother UX.</li>
        </ul>
      </div>

      {/* CODESOFT */}
      <div className="experience-item">
        <h3>Web Developer Intern, CodeSoft (Remote)</h3>
        <p>Jul 2021 - Sep 2021</p>
        <ul>
          <li>Developed dynamic web pages using HTML, CSS, JavaScript, and Python.</li>
          <li>Worked on automation and small-scale backend integrations.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
