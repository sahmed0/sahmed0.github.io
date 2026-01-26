import React from 'react';
import './App.css'; // This connects your CSS styling
import { personalData, projectData } from './data'; // Import your content
import ProjectCard from './components/ProjectCard'; // Import your LEGO block

function App() {
  return (
    <div className="main-content-wrapper">
      
      {/* FLOATING ISLAND NAVIGATION */}
      <nav className="floating-nav">
        <a href="#home">Home</a>
        {projectData.map((project, index) => (
          <a key={project.id} href={`#${project.id}`}>
            {project.title}
          </a>
        ))}
      </nav>

      {/* HERO SECTION */}
      {/* 1. We removed the 'hero-bg' class because we don't need the CSS image anymore */}
      <div id="home" className="portfolio-section hero-container">
        
        {/* 2. The Video Element */}
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>

        {/* 3. An Overlay to ensure text stays readable (optional but recommended) */}
        <div className="hero-overlay"></div>

        {/* 4. Your existing content */}
        <div className="hero-content">
          <h1>{personalData.name}</h1>
          <p className="role">{personalData.role}</p>
          <div className="divider"></div>
          <p className="bio">{personalData.bio}</p>
        </div>
      </div>

      {/* PROJECTS LOOP */}
      {projectData.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}

      {/* FOOTER */}
      <footer className="footer-container">
        <div className="footer-content">
          
          {/* Left Column: Personal Info */}
          <div className="footer-info">
            <h3>{personalData.name}</h3>
            <p className="footer-role">{personalData.role}</p>
            <p className="footer-email">
               {/* Optional: Add email if you want, or just location */}
               Manchester, United Kingdom
            </p>
          </div>

          {/* Right Column: Social Icons */}
          <div className="footer-socials">
            <a href={personalData.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href={personalData.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Bottom Row: Legal Text */}
        <div className="footer-legal">
          <p>
            &copy; {new Date().getFullYear()} {personalData.name}. All Rights Reserved.
          </p>
          <p className="legal-links">
            {/* These are dummy links for the "Pro" look */}
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;