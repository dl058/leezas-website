// Projects.tsx (updated for tile layout)
import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import "../styles/Projects.css";
import { Project } from "../types";

const projects: Project[] = [
  {
    title: "Light Switch",
    description: "An interactive light switch application built with React",
    url: "https://light-switch-4cc83.web.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Ice Cream Wars",
    description: "A fun ice cream voting application",
    url: "https://ice-cream-wars.web.app/",
    technologies: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Cat Nap",
    description: "A relaxing cat-themed application",
    url: "https://cat-nap-c19f7.web.app/",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Unplanned Adventure",
    description:
      "A social media feed application with post creation and interaction features",
    url: "https://final-project-fa2ee.web.app/",
    technologies: ["React", "Firebase", "Material-UI", "JavaScript"],
  },
  {
    title: "Spellbound Sweets",
    description:
      "A delightful cake shop application showcasing delicious treats",
    url: "https://cake-proj-2eff8.web.app/",
    technologies: ["React", "JavaScript", "CSS"],
  },
];

const Projects: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h1 className="project-heading">My Projects</h1>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="view-button"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </m.div>
    </LazyMotion>
  );
};

export default Projects;
