import React from 'react';
import './About.css';
import profileImg from '../../assets/ahad.jpeg';

export default function About() {
  return (
    <section id="about" className="container">
      <div className="section-header">
        <h2>👨‍💻About Me</h2>
        <p className="section-subtitle">Get to know the developer behind the code</p>
      </div>

      <div className="glass about-card">
        <figure className="profile-figure">
          <div className="img-wrapper">
            {/* Used the imported profileImg variable here */}
            <img src={profileImg} alt="Ahad Sajid profile" />
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
              <span className="fact-emoji">📍</span>
              <div>
                <strong>Location</strong>
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}