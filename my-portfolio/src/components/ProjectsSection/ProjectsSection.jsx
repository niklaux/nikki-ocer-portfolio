// ProjectsSection.jsx
import React from "react";
import { PersonalProjectsData } from "./ProjectsData";
import Card from "../common/Card";
import ProjectCarousel from "./ProjectCarousel"; // Import the ProjectCarousel component
import { Github, Link as LinkIcon } from "lucide-react";

function ProjectsSection() {
  const projects = PersonalProjectsData;

  return (
    <section id="projects">
      <div className="py-5">
        <div className="container px-lg-5 px-sm-0">
          <div className="d-flex">
            <p className="section-title-style">Projects</p>
          </div>
          <div className="pt-5">
            <p className="text-center">
              Some of my personal projects to showcase my skills. (will be
              adding more soon...)
            </p>

            {projects.map((project, index) => (
              <Card key={index}>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12 section-grey-bg">
                    <ProjectCarousel
                      images={project.images}
                      carouselId={`carousel${index}`}
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 p-4">
                    <p className="fw-medium">
                      <a
                        href={project.link} // Add the project link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-primary"
                      >
                        {project.title}
                      </a>
                    </p>
                    <p className="text-muted">{project.description}</p>
                    <div className="d-flex flex-wrap">
                      {project.technologies.map((item, techIndex) => (
                        <div
                          key={techIndex}
                          className="section-title-style text-muted ms-0 me-2 mb-2"
                          style={{ fontSize: "0.8rem" }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="d-flex align-items-center mt-2">
                      {/* <a
                        href={project.link} // Add the project link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-primary me-3"
                      >
                        <LinkIcon />
                      </a> */}
                      
                      <a
                        href={project.github} // Add the GitHub link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-primary me-3 text-decoration-none"
                      >
                        <Github /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
