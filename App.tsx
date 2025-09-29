import React from "react";
import "./App.css";
import Header from "./Components/Header";
import AboutMe from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header name="April Marie Recto" tagline="Aspiring Web Developer | React & TypeScript" />
      <AboutMe
        name="April Marie Recto"
        bio="I’m a BSIT student passionate about web development, learning new technologies, and building interactive projects."
        profileImage="my-product-card\src\images\pic.jpg"
      />
      <Skills />
      <Projects />
      <Contact
        email="april@example.com"
        github="https://github.com/username"
        linkedin="https://www.linkedin.com/in/username"
      />
      <Footer author="April&Gerlyn" />
    </div>
  );
};

export default App;
