import React from "react";
import "./Blogs.css";

const blogData = [
  {
    title: "React Hooks",
    description:
      "Dive deep into useState, useEffect, and how custom hooks simplify component logic, improve readability, and enable powerful reuse across your React apps.",
    image: "/assests/images/react-hooks.jpg",
    link: "https://yourblog.com/react-hooks-guide",
  },
  {
    title: "Node Backends",
    description:
      "Design scalable server-side applications with Node.js and Express. Understand middleware, RESTful routing, MongoDB integration, and best practices for deployment.",
    image: "/assests/images/node-backend.jpg",
    link: "https://yourblog.com/node-express-scalable",
  },
  {
    title: "Responsive Design",
    description:
      "Craft responsive layouts that work on all screen sizes using CSS Grid, Flexbox, and media queries. Learn adaptive UI design patterns and accessibility tips.",
    image: "/assests/images/responsive-design.jpg",
    link: "https://yourblog.com/responsive-web-design",
  },
  {
    title: "REST APIs",
    description:
      "Uncover the architecture of REST APIs. Learn how to structure routes, handle requests, and interact with client-side applications for seamless data exchange.",
    image: "/assests/images/rest-api.jpg",
    link: "https://yourblog.com/rest-api-guide",
  },
  {
    title: "SQL Queries",
    description:
      "Master complex SQL queries, joins, indexing strategies, and optimization techniques to enhance database performance and ensure efficient data handling.",
    image: "/assests/images/sql-queries.jpg",
    link: "https://yourblog.com/sql-deep-dive",
  },
  {
    title: "Debug Tools",
    description:
      "Explore modern debugging techniques with Chrome DevTools and VS Code. Set breakpoints, inspect variables, and resolve bugs with precision and ease.",
    image: "/assests/images/debugging-tools.jpg",
    link: "https://yourblog.com/debugging-guide",
  },
  {
    title: "App Deployment",
    description:
      "Learn how to deploy full stack applications using Render and Vercel. Understand CI/CD pipelines, hosting strategies, and post-deployment monitoring.",
    image: "/assests/images/deployment.jpg",
    link: "https://yourblog.com/deploy-fullstack-vercel",
  },
  {
    title: "Git Control",
    description:
      "Master Git version control: branching strategies, resolving conflicts, collaboration techniques, and advanced workflows for professional team environments.",
    image: "/assests/images/git-guide.jpg",
    link: "https://yourblog.com/git-version-control",
  },
  {
    title: "VS Code Tools",
    description:
      "Enhance productivity with the top VS Code extensions. From linting to themes, discover plugins that streamline your development process and workflow.",
    image: "/assests/images/vscode-extensions.jpg",
    link: "https://yourblog.com/vscode-top-extensions",
  },
  {
    title: "React vs Next",
    description:
      "Compare React and Next.js frameworks. Understand their core differences in routing, SSR, performance, and how to choose the right one for your project.",
    image: "/assests/images/react-vs-next.jpg",
    link: "https://yourblog.com/react-vs-next",
  },
];

const Blogs = () => {
  return (
    <section className="blogs-section" id="blogs">
      <h2>CODE CHRONICLES</h2>
      <div className="blogs-grid">
        {blogData.map((blog, index) => (
          <a
            key={index}
            className="blog-card"
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={blog.image} alt={blog.title} className="blog-thumb" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
