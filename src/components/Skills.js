import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiDjango,
  SiFlask,
  SiFlutter,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiPostgresql,
  SiRedis,
  SiLinux,
} from "react-icons/si";

const skillsData = [
  { id: 1, name: "Python", icon: <FaPython size={30} />, level: "Advanced" },
  { id: 2, name: "Django / DRF", icon: <SiDjango size={30} />, level: "Advanced" },
  { id: 3, name: "React", icon: <FaReact size={30} />, level: "Advanced" },
  { id: 4, name: "Flutter", icon: <SiFlutter size={30} />, level: "Intermediate" },
  { id: 5, name: "FastAPI / Flask", icon: <SiFlask size={30} />, level: "Intermediate" },
  { id: 6, name: "TensorFlow", icon: <SiTensorflow size={30} />, level: "Intermediate" },
  { id: 7, name: "Scikit-Learn", icon: <SiScikitlearn size={30} />, level: "Intermediate" },
  { id: 8, name: "OpenCV", icon: <SiOpencv size={30} />, level: "Intermediate" },
  { id: 9, name: "PostgreSQL", icon: <SiPostgresql size={30} />, level: "Advanced" },
  { id: 10, name: "MongoDB", icon: <SiMongodb size={30} />, level: "Intermediate" },
  { id: 11, name: "Redis", icon: <SiRedis size={30} />, level: "Intermediate" },
  { id: 12, name: "Docker", icon: <FaDocker size={30} />, level: "Intermediate" },
  { id: 13, name: "AWS (EC2, S3, Lambda)", icon: <FaAws size={30} />, level: "Intermediate" },
  { id: 14, name: "Git & GitHub Actions", icon: <FaGitAlt size={30} />, level: "Advanced" },
  { id: 15, name: "Linux & Nginx", icon: <SiLinux size={30} />, level: "Intermediate" },
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
