import React from "react";
import { Moon, Sun } from "lucide-react";
import useTheme from "../../hooks/useTheme";
import "./NavigationBar.css";

function NavigationBar() {
  const [theme, toggleTheme] = useTheme();
  const themeLabel = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const offset = 70; // Adjust based on your navbar height
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar navbar-expand-lg py-2 fixed-top">
      <div className="container d-flex px-lg-5 px-sm-0">
        <a
          className="navbar-brand"
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
        >
          {"<NLO />"}
        </a>
        <div className="navbar-actions d-flex align-items-center gap-2">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            aria-pressed={theme === "dark"}
            title={themeLabel}
          >
            {theme === "dark" ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
          </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#automations"
                onClick={(e) => handleScroll(e, "automations")}
              >
                Automations
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#experience"
                onClick={(e) => handleScroll(e, "experience")}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#skills"
                onClick={(e) => handleScroll(e, "skills")}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
