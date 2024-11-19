import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-item">
        <h3>Software Developer, Warals Technology, New Delhi</h3>
        <p>2019 - 2022</p>
        <ul>
          <li>Developed scalable web applications using Django and Django REST Framework.</li>
          <li>Designed optimized database schemas with SQL.</li>
          <li>Implemented machine learning models for user engagement analytics.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Front-End Developer, Salesqueen Software Solutions, Chennai</h3>
        <p>Sep 2023 - Nov 2023</p>
        <ul>
          <li>Created responsive CRM interfaces using HTML, CSS, and JavaScript.</li>
          <li>Collaborated with back-end developers for smooth functionality.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Web Development Intern, CodeSoft, Remote</h3>
        <p>Jul 2023 - Aug 2023</p>
        <ul>
          <li>Developed and maintained responsive web pages using HTML, CSS, and JavaScript.</li>
          <li>Gained comprehensive experience in full-stack development.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
