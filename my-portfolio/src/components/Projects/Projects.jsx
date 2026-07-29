import React from 'react';
import './Projects.css';
import project1Img from '../../assets/project1.png';
import project2Img from '../../assets/project2.png';
import project3Img from '../../assets/project3.png';

export default function Projects() {
  const projectList = [
    {
      title: 'Gesture Robot Capstone',
      description: 'Hardware documentation and data tracking interface for an autonomous light-guided capstone robot.',
      tags: ['C++', 'Sensors', 'Docs'],
      img: project1Img
    },
    {
      title: 'Interactive Web Portfolio',
      description: 'A responsive React portfolio application built with custom CSS Glassmorphism and Neon theme engine.',
      tags: ['React', 'CSS Variables', 'Flexbox'],
      img: project2Img
    },
    {
      title: 'Fitness Stats Tracker',
      description: 'Real-time item analytics and stock tracker interface for high-tier game items.',
      tags: ['JavaScript', 'REST API', 'CSS Grid'],
      img: project3Img
    }
  ];

  return (
    <section id="projects" className="container">
      <div className="section-header">
        <h2>Featured Work</h2>
        <p className="section-subtitle">Recent projects and technical applications</p>
      </div>

      <div className="projects-grid">
        {projectList.map((project, idx) => (
          <article key={idx} className="glass project-card">
            <div className="project-img-wrapper">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href="#live" className="btn-link">Live Demo →</a>
                <a href="#source" className="btn-link secondary">Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}