// Skills.tsx
import React from "react";
import "../styles/Skills.css";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "CSS",
  "HTML",
  "Firebase",
  "MongoDB",
  "Git",
  "Responsive Design",
];

const Skills: React.FC = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-heading">Skills & Tools</h2>
      <p className="skills-subtext">
        Technologies I’ve worked with and love using:
      </p>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
