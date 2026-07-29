import React from 'react';
import './Skill.css';

export default function Skill() {
  const skills = [
    { icon: '🌐', name: 'HTML5 / Semantic Markup', level: '95%', badge: '⚡ Advanced', badgeClass: 'badge-advanced' },
    { icon: '🎨', name: 'CSS / Flexbox', level: '90%', badge: '⚡ Advanced', badgeClass: 'badge-advanced' },
    { icon: '⚡', name: 'JavaScript(ES6+)', level: '85%', badge: '🚀 Intermediate', badgeClass: 'badge-intermediate' },
    { icon: '⚛️', name: 'React.js', level: '80%', badge: '🚀 Intermediate', badgeClass: 'badge-intermediate' },
  ];

  return (
    <section id="skills" className="container">
      <div className="section-header">
        <h2>💻 Technical Stack</h2>
        <p className="section-subtitle">🎯 Core technologies and proficiency levels</p>
      </div>

      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="glass skill-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="skill-header">
              <span>{skill.icon} {skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ '--target-width': skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass table-container">
        <table>
          <thead>
            <tr>
              <th>🛠️ Technology</th>
              <th>📂 Category</th>
              <th>📊 Proficiency</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <tr key={index}>
                <td>{skill.icon} {skill.name}</td>
                <td>🖥️ Front-End</td>
                <td>
                  <span className={`badge ${skill.badgeClass}`}>{skill.badge}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}