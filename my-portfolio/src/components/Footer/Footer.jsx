import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Ahad Sajid. Built with React & CSS.</p>
        <div className="footer-socials">
          <a href="https://github.com/Ahadcf">GitHub</a>
          <a href="https://www.linkedin.com/in/ahad-sajid-14783436b/">LinkedIn</a>
          <a href="https://www.instagram.com/ahadszn/?hl=en">Instagram</a>

        </div>
      </div>
    </footer>
  );
}