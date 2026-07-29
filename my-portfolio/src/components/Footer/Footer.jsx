import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Ahad Sajid. Built with React & CSS.</p>
        <div className="footer-socials">
          <a href="#github">GitHub</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#twitter">Twitter</a>
        </div>
      </div>
    </footer>
  );
}