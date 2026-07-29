import './Projects.css';

export default function Projects() {
  const projectList = [
    {
      title: 'Light-Sensing Robot Capstone',
      description: 'Hardware documentation and data tracking interface for an autonomous light-guided capstone robot.',
      tags: ['C++', 'Sensors', 'Docs'],
      img: 'https://picsum.photos/600/400?random=1'
    },
    {
      title: 'Interactive Web Portfolio',
      description: 'A responsive React portfolio application built with custom CSS Glassmorphism and Neon theme engine.',
      tags: ['React', 'CSS Variables', 'Flexbox'],
      img: 'https://picsum.photos/600/400?random=2'
    },
    {
      title: 'Game Stock & Stats Tracker',
      description: 'Real-time item analytics and stock tracker interface for high-tier game items.',
      tags: ['JavaScript', 'REST API', 'CSS Grid'],
      img: 'https://picsum.photos/600/400?random=3'
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