import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header>
      <div className="container navbar">
        <a href="#hero" className="logo">
          AS<span className="dot">.</span>
        </a>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>👨‍💻About</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>⚡Skills</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>🚀Projects</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>📬Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '⚡' : '🌙'}
          </button>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}