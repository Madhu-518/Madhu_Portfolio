import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Close navbar on link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Madhu Jaiswal</h1>

        {/* Nav Links */}
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#services" onClick={handleLinkClick}>Services</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#blogs" onClick={handleLinkClick}>Blogs</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
