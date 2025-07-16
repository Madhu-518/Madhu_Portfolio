import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <h1>Hello, I'm <span>Madhu Jaiswal</span></h1>
        <p>Full Stack Developer | MERN Stack Enthusiast</p>
        <div className="home-buttons">
          <a href="#projects" className="btn-primary">My Projects</a>
          <a
            href="/Madhu_Resume.pdf"  // <- Local file inside public folder
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
