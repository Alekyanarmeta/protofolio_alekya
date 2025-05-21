// App.js
import React from "react";
import Toppage from "./toppage";
import Aboutme from "./aboutme";
import Skill from "./skills";
import Education from "./Education";
import Projects from "./project";
import { FaGithub, FaCode } from 'react-icons/fa';

const App = () => {
  return (
    <div>
      <div className="d-flex justify-content-center navbar" style={{ backgroundColor: "#36454F" }}>
        <div className="me-5">
          <ol className="list-unstyled d-flex gap-5">
            <li><a href="#aboutme" className="text-decoration-none text-white">About me</a></li>
            <li><a href="#education" className="text-decoration-none text-white">Education</a></li>
            <li><a href="#skills" className="text-decoration-none text-white">Skills</a></li>
            <li><a href="#projects" className="text-decoration-none text-white">Projects</a></li>
            <li><a href="#contactme" className="text-decoration-none text-white">Contact</a></li>
          </ol>
        </div>
      </div>
      
      <Toppage />
       <div className="ms-5"style={{ display: 'flex', gap: '20px',padding: '20px'}}>
        <a href="https://github.com/Alekyanarmeta" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub size={40} color="#333" />
        </a>

        <a href="https://leetcode.com/u/2203a51835/" target="_blank" rel="noopener noreferrer" title="Leetcode">
          <FaCode size={40} color="#F28C28" />
        </a>

        <a href="https://www.hackerrank.com/profile/alekyanarmeta9" target="_blank" rel="noopener noreferrer" title="HackerRank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png"
            alt="HackerRank"
            width={40}
            height={40}
          />
        </a>
      </div>
      <Aboutme />
      <Education />
      <Skill />
      <Projects />

      {/* Contact Section */}
      <div className="text-center" id="contactme" style={{ padding: "30px 0" }}>
        <h2>Contact</h2>
        <p>Email: alekyanarmeta9@gmail.com</p>

        <div className="d-flex justify-content-center gap-3">
          <a href="https://www.linkedin.com/in/alekya-narmeta-6700a0192/" target="_blank" rel="noopener noreferrer">
            <img src="/linkdelin.png" alt="LinkedIn" style={{ width: "45px", height: "45px" }} />
          </a>
          <a href="https://github.com/Alekyanarmeta" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" style={{ width: "45px", height: "45px" }} />
          </a>
          <a href="https://leetcode.com/u/2203a51835/" target="_blank" rel="noopener noreferrer">
            <img src="/leetcode.png" alt="LeetCode" style={{ width: "45px", height: "45px" }} />
          </a>
          <a href="https://wa.me/qr/7OMKZTB2XJJ5A1" target="_blank" rel="noopener noreferrer">
            <img src="/whatsupp.png" alt="WhatsApp" style={{ width: "45px", height: "45px" }} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: "center", color: "#aaa", fontSize: 14, paddingBottom: 20 }}>
        &copy; {new Date().getFullYear()} Narmeta Alekya. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
