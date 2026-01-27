import React from 'react';

// This component accepts "props" (data passed to it)
const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div id={project.id} className={`portfolio-section ${isEven ? 'bg-light' : 'bg-white'}`}>
      <h2 className="section-title">{project.title.toUpperCase()}</h2>
      
      {/* If index is odd (1, 3...), add 'flex-row-reverse' to flip the layout */}
      <div className={`project-card ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
        <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
        <div className="project-details">
          <h3>{project.subtitle}</h3>
          <div className="tags-container">
            {project.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
          </div>
          <p>{project.description}</p>
          <a href={project.link} className="btn-primary" target="_blank" rel="noreferrer">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;