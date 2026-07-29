import React from 'react';
import './Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('🎉 Message sent successfully!');
  };

  return (
    <section id="contact" className="container">
      <div className="section-header">
        <h2>📫 Get In Touch</h2>
        <p className="section-subtitle">💬 Send a message to discuss opportunities or projects</p>
      </div>

      <div className="glass contact-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">👤 Name</label>
            <input type="text" id="name" required placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">✉️ Email</label>
            <input type="email" id="email" required placeholder="your.email@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">📝 Message</label>
            <textarea id="message" rows="5" required placeholder="Your message..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
}