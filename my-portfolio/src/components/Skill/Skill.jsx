import './Skill.css';

export default function Skill() {
  const skills = [
    { name: 'HTML5 / Semantic Markup', level: '95%', badge: 'Advanced', badgeClass: 'badge-advanced' },
    { name: 'CSS3 / Flexbox & Grid', level: '90%', badge: 'Advanced', badgeClass: 'badge-advanced' },
    { name: 'JavaScript (ES6+)', level: '85%', badge: 'Intermediate', badgeClass: 'badge-intermediate' },
    { name: 'React.js', level: '80%', badge: 'Intermediate', badgeClass: 'badge-intermediate' },
  ];

  return (
    <section id="skills" className="container">
      <div className="section-header">
        <h2>Technical Stack</h2>
        <p className="section-subtitle">Core technologies and proficiency levels</p>
      </div>

      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="glass skill-card">
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass table-container">
        <table>
          <thead>
            <tr>
              <th>Technology</th>
              <th>Category</th>
              <th>Proficiency</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <tr key={index}>
                <td>{skill.name}</td>
                <td>Front-End</td>
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