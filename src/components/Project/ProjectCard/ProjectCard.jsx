import React from 'react';
import './ProjectCard.css';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const techIcons = {
  React: <FaReact />,
  'Node.js': <FaNodeJs />,
  MongoDB: <FaDatabase />,
};

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={details.image} alt={details.title} />
      </div>
      <div className="project-info">
        <h6>{details.title}</h6>
        <p>{details.information}</p>
        <div className="tech-stack">
          {details.tech_stack.map((item) => {
            return techIcons[item] || <span>{item}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={details.live_link} target="_blank" rel="noreferrer">
            <button className="project-btn">View Site</button>
          </a>
          <a href={details.github_link} target="_blank" rel="noreferrer">
            <button className="project-btn">View Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
