import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ name, link, title, tech }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={name} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p className="tech-stack">{tech}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <span>View Project</span>
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
