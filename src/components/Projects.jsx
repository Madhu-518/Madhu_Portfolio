import React from "react";
import "./Projects.css";

const projectList = [
  
  {
    title: "Skin Cancer Detection",
    description:
      "AI-powered web app that uses deep learning to analyze skin lesion images for early cancer detection. Built using TensorFlow and Flask, the model classifies images into benign or malignant categories. A user-friendly interface allows doctors or patients to upload images securely and receive instant predictions.",
    image: "/assests/images/skin-cancer.jpg",
    link: "https://github.com/yourusername/skin-cancer-detection",
  },

  {
    title: "Object Detection",
    description:
      "An advanced object detection solution using OpenCV and pre-trained models (YOLO/SSD) to detect and localize objects in real-time. This system identifies multiple objects simultaneously and draws bounding boxes on live camera feeds. It's ideal for surveillance, automation, and AR applications requiring high-speed, accurate detection.",
    image: "/assests/images/object-detection.gif",
    link: "https://github.com/yourusername/object-detection",
  },

  {
    title: "Carpooling Website",
    description:
      "A sleek and modern carpooling platform prototype connecting drivers and passengers for shared rides. The UI/UX is designed in Figma and implemented in React, focusing on user authentication, route planning, ride history, and real-time availability. Promotes eco-friendly and cost-saving travel.",
    image: "/assests/images/carpooling.jpg",
    link: "https://github.com/yourusername/carpool-app",
  },

  {
    title: "AI Chatbot",
    description:
      "A simple menu-based chatbot built using Python that guides users through structured conversations with predefined options. Designed for ease of use and clarity, this chatbot is well-suited for handling FAQs, support queries, and basic automation tasks in businesses without needing NLP or training datasets.",
    image: "/assests/images/chatbot.jpg",
    link: "https://github.com/yourusername/ai-chatbot",
  },

  {
    title: "Food Ordering Website",
    description:
      "A complete food ordering and delivery web application built using the MERN stack (MongoDB, Express, React, Node.js). It features user authentication, menu browsing, cart functionality, order tracking, and a fully functional admin dashboard for managing orders and inventory.",
    image: "/assests/images/food.jpg",
    link: "https://github.com/yourusername/food-ordering-site",
  },

  {
    title: "Finger Detection",
    description:
      "Real-time finger counting and gesture recognition app using OpenCV and Python. Detects hand position and number of fingers shown, enabling touchless control for smart interfaces. Great for interactive installations, educational tools, or accessibility-driven apps for the hearing impaired.",
    image: "/assests/images/finger-detection.jpg",
    link: "https://github.com/yourusername/finger-detection",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>MY PROJECTS</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <a
            key={index}
            className="project-card"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
