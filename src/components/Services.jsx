import React, { useState } from "react";
import "./Services.css";
import {
  FaLaptopCode,
  FaServer,
  FaChartBar,
  FaUserTie,
  FaRocket,
  FaCode,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description:
      "I create modern, responsive websites using HTML, CSS, JavaScript, React, and Node.js. My websites are SEO-friendly, load fast, and adapt perfectly to all screen sizes. From portfolios to full-stack platforms, I ensure performance, security, and usability.",
  },
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "I specialize in building visually appealing and interactive interfaces using React, Redux, JavaScript, and modern CSS frameworks like Tailwind and Bootstrap. My focus is on clean UI, responsive layout, accessibility, and seamless user experience.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "I develop robust backend systems with Node.js and Express, creating RESTful APIs and handling server-side logic. I also work with databases like MongoDB and MySQL to build scalable, secure, and data-driven applications with proper authentication and error handling.",
  },
  {
    icon: <FaChartBar />,
    title: "Data Science",
    description:
      "Using Python, Pandas, NumPy, Matplotlib, and machine learning libraries like Scikit-learn and TensorFlow, I turn raw data into actionable insights. I work on data cleaning, visualization, statistical modeling, and predictive analysis to support data-driven decisions.",
  },
  {
    icon: <FaUserTie />,
    title: "Portfolio Websites",
    description:
      "I design custom portfolio websites that showcase your skills, projects, and experience in an elegant and interactive way. Whether you're a student, freelancer, or professional, I create personalized layouts that represent your brand and boost your online presence.",
  },
  {
    icon: <FaRocket />,
    title: "Landing Pages",
    description:
      "I create sleek, high-conversion landing pages for businesses, startups, and products. With persuasive copy, call-to-action buttons, smooth animations, and mobile-first design, I help drive user engagement and improve lead generation and marketing ROI.",
  },
];


const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="services-section" id="services">
      <h2>MY SERVICES</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
