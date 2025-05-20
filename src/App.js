// App.js
import React from "react";
import Toppage from "./toppage";
import Aboutme from "./aboutme"
import Skill from "./skills";
import Education from "./Education";
import Projects from "./project";
const App = () => {
  return (
    <div>
      <div className="d-flex justify-content-center" style={{ backgroundColor: "#36454F" }}>
        <div className="me-5">
          <ol className="list-unstyled d-flex gap-5">
            <li><a href="#aboutme" className="text-decoration-none text-white">About me</a></li>
            <li><a href="#education" className="text-decoration-none text-white">Education</a></li>
            <li><a href="#skills" className="text-decoration-none text-white">Skills</a></li>
            <li><a href="#projects" className="text-decoration-none text-white">Projects</a></li>
            <li><a href="#contactme" className="text-decoration-none text-white">Contact me</a></li>
          </ol>
        </div>
      </div>
      <Toppage />
      <Aboutme />
      <Education />
      <Skill />
      <Projects />
      <div className="text-center" id="contactme">
        <h2>Contact</h2>
        <p>Email: alekyanarmeta9@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/alekya-narmeta-6700a0192/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/alekya-narmeta-6700a0192/
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/Alekyanarmeta" target="_blank" rel="noopener noreferrer">
            github.com/Alekyanarmeta
          </a>
        </p>
      </div>

      <footer style={{ textAlign: "center", color: "#aaa", fontSize: 14 }}>
        &copy; {new Date().getFullYear()} Narmeta Alekya. All rights reserved.
      </footer>

    </div>
  );
};

export default App;
