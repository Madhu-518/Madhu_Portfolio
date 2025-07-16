import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from "./components/Blogs";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Blogs/>
      <Contact />
    </>
  );
};

export default App;
