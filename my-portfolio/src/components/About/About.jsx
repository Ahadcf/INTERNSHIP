import './About.css';

export default function About() {
  return (
    <section id="about" className="container">
      <div className="section-header">
        <h2>About Me</h2>
        <p className="section-subtitle">Passionate about craft, code, and design</p>
      </div>

      <div className="glass about-card">
        <figure className="profile-figure">
          <div className="img-wrapper">
            <img src= "ahad.jpeg" alt="Ahad Sajid profile" />
          </div>
          <figcaption>Ahad Sajid — Web Developer</figcaption>
        </figure>

        <div className="about-text">
          <h3>Crafting Responsive Digital Experiences</h3>
          <p>
            I am a student and web developer dedicated to building responsive, modern user interfaces. My primary focus revolves around HTML5, CSS Grid/Flexbox, JavaScript, and React.
          </p>

          <div className="quick-facts">
            <div className="fact-item">
              <span className="fact-emoji">🎓</span>
              <div>
                <strong>Role</strong>
                <span>Student & Dev</span>
              </div>
            </div>
            <div className="fact-item">
              <span className="fact-emoji">💻</span>
              <div>
                <strong>Focus</strong>
                <span>React & UI Design</span>
              </div>
            </div>
            <div className="fact-item">
              <span className="fact-emoji">⚡</span>
              <div>
                <strong>Style</strong>
                <span>Neon Cyber</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}