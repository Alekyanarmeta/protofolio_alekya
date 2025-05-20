import React from "react";

const App = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", maxWidth: 900, margin: "auto", padding: 20 }}>
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <img
          src="https://via.placeholder.com/150"
          alt="Narmeta Alekya"
          style={{ borderRadius: "50%", width: 150, height: 150, objectFit: "cover" }}
        />
        <h1 style={{ marginTop: 20 }}>Narmeta Alekya</h1>
        <h3 style={{ color: "#555", fontWeight: "normal" }}>MERN Stack Developer</h3>
      </header>

      {/* Bio */}
      <section style={{ marginBottom: 40 }}>
        <h2>About Me</h2>
        <p>
          I am a passionate developer and problem solver with experience in building scalable web applications using MongoDB, Express, React, and Node.js.
        </p>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: 40 }}>
        <h2>Skills</h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0, display: "flex", flexWrap: "wrap", gap: 15 }}>
          {["JavaScript", "React", "Node.js", "Express", "MongoDB", "Redux", "JWT", "HTML", "CSS"].map(skill => (
            <li
              key={skill}
              style={{
                backgroundColor: "#f0f0f0",
                padding: "8px 15px",
                borderRadius: 20,
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: 40 }}>
        <h2>Projects</h2>

        <div style={{ marginBottom: 25 }}>
          <h3>1. E-Commerce Platform</h3>
          <p>
            A full-stack e-commerce web app with user authentication, product listing, shopping cart, and payment integration.
          </p>
          <p>
            <strong>Tech:</strong> React, Node.js, Express, MongoDB, Redux, JWT
          </p>
          <a href="https://github.com/sample/ecommerce" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>

        <div style={{ marginBottom: 25 }}>
          <h3>2. Task Manager App</h3>
          <p>
            A task management app supporting multiple users with CRUD operations and JWT-based authentication.
          </p>
          <p>
            <strong>Tech:</strong> React, Node.js, Express, MongoDB, Redux, JWT
          </p>
          <a href="https://github.com/sample/task-manager" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </section>

      {/* Contact */}
      <section style={{ marginBottom: 40 }}>
        <h2>Contact</h2>
        <p>Email: narmeta.alekya@example.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/narmeta-alekya" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/narmeta-alekya
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/narmetaalekya" target="_blank" rel="noopener noreferrer">
            github.com/narmetaalekya
          </a>
        </p>
      </section>

      <footer style={{ textAlign: "center", color: "#aaa", fontSize: 14 }}>
        &copy; {new Date().getFullYear()} Narmeta Alekya. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
