import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import "../styles/Projects.css";
import { Project } from "../types";

const projects: Project[] = [
  {
    title: "InkSync",
    description:
      "A real-time collaborative document editing app with user authentication, live presence, and organizational sharing. Built with Convex, Clerk, and Next.js.",
    url: "https://docs-project-phi.vercel.app", // 🔗 Live project link
    technologies: ["Next.js", "Convex", "Clerk", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Spellbound Sweets",
    description:
      "A whimsical cake shop app with animated layer-building and interactive effects, themed around magical dessert flavors.",
    url: "https://cake-proj-2eff8.web.app/",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Unplanned Adventure",
    description:
      "A social feed app where users can create, like, and interact with posts. Focused on spontaneous connection and mobile responsiveness.",
    url: "https://final-project-fa2ee.web.app/",
    technologies: ["React", "Firebase", "Material-UI", "JavaScript"],
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
