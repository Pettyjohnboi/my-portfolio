// src/components/Project.js
import React from 'react';

const Project = ({ title, description, github, demo}) => (
  <div className="project">
    <h2>{title}</h2>
    <p>{description}</p>
    <div className="project-links">
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={demo} target="_blank" rel="noopener noreferrer">
        Demo
      </a>
    </div>
  </div>
);

export default Project;
