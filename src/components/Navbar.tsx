// Navbar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <h1 className="navbar-title">Portfolio</h1>
        <div className="navbar-links">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            About
          </Link>
          <Link
            to="/projects"
            className={
              location.pathname === "/projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className={
              location.pathname === "/skills" ? "nav-link active" : "nav-link"
            }
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className={
              location.pathname === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
