import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>

      {/* PURPUS ORGORBIT */}
      <div className="experience-item">
        <h3>Python Fullstack Developer — Purpus OrgOrbit, Hyderabad</h3>
        <p>Nov 2024 – Present</p>
        <ul>
          <li>Developing an Odoo-integrated marketplace platform using Django, Flutter, and PostgreSQL.</li>
          <li>Architecting optimized REST APIs with improved response time using query tuning and Redis caching.</li>
          <li>Implementing secure authentication, payment integrations, and AWS EC2 + Nginx deployments.</li>
        </ul>
      </div>

      {/* WARALS TECHNOLOGY */}
      <div className="experience-item">
        <h3>Python Developer — Warals Technology Pvt. Ltd., New Delhi</h3>
        <p>Nov 2022 – Nov 2024</p>
        <ul>
          <li>Built scalable Django APIs for sales analytics, VoIP campaigns, and real-time call tracking.</li>
          <li>Developed an OCR-based Doc Scanner using OpenCV and Tesseract achieving high text accuracy.</li>
          <li>Created a GenAI-powered RAG chatbot using Transformers, FAISS, LangChain, and FastAPI.</li>
        </ul>
      </div>

      {/* SALESQUEEN SOFTWARE */}
      <div className="experience-item">
        <h3>Front-End Developer — Salesqueen Software Solutions, Tamil Nadu</h3>
        <p>Sep 2021 – Nov 2022</p>
        <ul>
          <li>Developed responsive CRM and e-commerce UI components using HTML, CSS, JavaScript, and React.</li>
          <li>Integrated REST APIs and collaborated with backend teams to enhance user experience and performance.</li>
        </ul>
      </div>

      {/* CODESOFT */}
      <div className="experience-item">
        <h3>Web Developer Intern — CodeSoft (Remote)</h3>
        <p>Jul 2021 – Sep 2021</p>
        <ul>
          <li>Created dynamic web pages using HTML, CSS, JavaScript, and basic Python scripting.</li>
          <li>Contributed to automation tasks and supported small-scale backend integrations.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
