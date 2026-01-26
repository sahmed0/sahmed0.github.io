import React from 'react';
import './App.css'; // This connects your CSS styling
import { personalData, projectData } from './data'; // Import your content
import ProjectCard from './components/ProjectCard'; // Import your LEGO block

function App() {
  return (
    <div className="main-content-wrapper">
      
      {/* SIDEBAR */}
      <nav className="custom-sidebar">
        <a href="#home">HOME</a>
        {projectData.map((project, index) => (
          <a key={project.id} href={`#${project.id}`}>
            0{index + 1}. {project.title.toUpperCase()}
          </a>
        ))}
      </nav>

      {/* HERO SECTION */}
      <div id="home" className="portfolio-section hero-bg">
        <div className="hero-content">
          <h1>{personalData.name}</h1>
          <p className="role">{personalData.role}</p>
          <div className="divider"></div>
          <p className="bio">{personalData.bio}</p>
        </div>
      </div>

      {/* PROJECTS LOOP */}
      {/* This automatically creates a card for every project in your data file */}
      {projectData.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}

      {/* FOOTER */}
      <div className="portfolio-section footer-bg">
        <h2>{personalData.name}</h2>
        <div className="social-links">
          <a href={personalData.social.github}>GitHub</a>
          <a href={personalData.social.linkedin}>LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default App;