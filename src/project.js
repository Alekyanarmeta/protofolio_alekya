import "./App.css";

function Projects() {
  return (
    <div className=" my-5 containers jsutify-content-center align-items-center" style={{ backgroundColor: "#008080" }} id="projects">
      <h2 className="text-center mb-4">My Projects</h2>
      <div id="projectsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* First Slide */}
          <div className="carousel-item active w-70 h-50">
            <img src="/project1.png" className="d-block w-100" alt="Project 1" style={{ maxHeight: "300px", objectFit: "contain" }} />
            <div className="text-center">
              <p>A full-stack e-commerce web app with user authentication, product listing, shopping cart, and payment integration.</p>
              <p><strong>Tech:</strong> React, Node.js, Express, MongoDB, Redux, JWT</p>
              <a href="https://github.com/Alekyanarmeta/eccomplateform_project" className="text-decoration-none text-white"><button className="btn1">Source code</button></a>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item active w-70 h-50">
            <img src="/bookstore.png" className="d-block w-100" alt="Project 1" style={{ maxHeight: "300px", objectFit: "contain" }} />
            <div className="text-center">
              <p>Built a full-featured online bookstore using the MERN stack. Users can browse books, add to cart, place orders,
and view order history. Implemented JWT-based authentication, role-based access (user/admin), and CRUD
operations for books and orders</p>
              <p><strong>Tech:</strong> React, Node.js, Express, MongoDB, Redux, JWT</p>
              <a href="https://github.com/Alekyanarmeta/Bookstore_fullstack" className="text-decoration-none text-white"><button className="btn1">Source code</button></a>
            </div>
          </div>

        </div>

        {/* Previous Button */}
        <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="false"></span>
        </button>

        {/* Next Button */}
        <button className="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="false"></span>
        </button>
        
      </div>
      
    </div>
  );
}

export default Projects;
