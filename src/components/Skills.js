import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiDjango, SiFlask } from "react-icons/si";

const skillsData = [
  { id: 1, name: "React", icon: <FaReact size={30} />, level: "Advanced" },
  { id: 2, name: "Python", icon: <FaPython size={30} />, level: "Advanced" },
  { id: 3, name: "Node.js", icon: <FaNodeJs size={30} />, level: "Intermediate" },
  { id: 4, name: "Databases", icon: <FaDatabase size={30} />, level: "Advanced" },
  { id: 5, name: "HTML5", icon: <FaHtml5 size={30} />, level: "Advanced" },
  { id: 6, name: "CSS3", icon: <FaCss3Alt size={30} />, level: "Advanced" },
  { id: 7, name: "JavaScript", icon: <FaJs size={30} />, level: "Advanced" },
  { id: 8, name: "TypeScript", icon: <SiTypescript size={30} />, level: "Intermediate" },
  { id: 9, name: "Git", icon: <FaGitAlt size={30} />, level: "Advanced" },
  { id: 10, name: "Docker", icon: <FaDocker size={30} />, level: "Intermediate" },
  { id: 11, name: "AWS", icon: <FaAws size={30} />, level: "Intermediate" },
  { id: 12, name: "MongoDB", icon: <SiMongodb size={30} />, level: "Intermediate" },
  { id: 13, name: "Django", icon: <SiDjango size={30} />, level: "Intermediate" },
  { id: 14, name: "Flask", icon: <SiFlask size={30} />, level: "Intermediate" },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="skills-section"
    >
      <Container>
        <h2>Skills</h2>
        <Row className="text-center">
          {skillsData.map((skill) => (
            <Col key={skill.id} xs={6} sm={4} md={3}>
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
              <p>{skill.level}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
};

export default Skills;
