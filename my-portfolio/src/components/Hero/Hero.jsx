import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="status-badge">
          <span className="pulse-dot"></span>
          <span>Available for New Projects</span>
        </div>
        <h1>
           Hi 👋, I'm <span className="highlight">Ahad Sajid</span>
        </h1>
        <p className="tagline">
          Front-end developer from Mumbai📍 specializing in modern web applications built with React and interactive UIs.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work ✨</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch 💬</a>
        </div>
      </div>
    </section>
  );
}