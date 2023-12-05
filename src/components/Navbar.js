import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; // Import the main CSS file
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" exact className="nav-item" activeclassName="active">
          Home
        </NavLink>
        <NavLink to="/skills" className="nav-item" activeclassName="active">
          Skills
        </NavLink>
        <NavLink to="/experience" className="nav-item" activeclassName="active">
          Experience
        </NavLink>
        <a
          href="https://github.com/prishitameshram"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
        <FaGithub />
        
            
          {/* <img src="github-icon.png" alt="GitHub" /> */}
        </a>
        <a
          href="https://www.linkedin.com/in/prishitameshram/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
        <FaLinkedin />
          {/* <img src="linkedin-icon.png" alt="LinkedIn" /> */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
