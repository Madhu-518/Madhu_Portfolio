import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">CONTACT ME</h1>
      <p className="contact-subtitle">
        Have a project, internship, or opportunity in mind? Let's connect!
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p className="email-info">
        Or email me at <a href="mailto:madhujaiswal518@gmail.com">madhujaiswal518@gmail.com</a>
      </p>
    </div>
  );
};

export default Contact;
