import React from "react";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div style={{backgroundColor: "#080808"}}>
      <nav className="navbar container">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about-me" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              Skills and Technologies
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact Section
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
