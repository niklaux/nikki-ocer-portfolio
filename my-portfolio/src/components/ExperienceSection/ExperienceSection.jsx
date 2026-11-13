import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import workExperienceData from "./WorkExperienceData";
import "./ExperienceSectionStyles.css";
import Card from "../common/Card";

function ExperienceSection() {
  return (
    <section id="experience">
      <div className="py-5 section-grey-bg">
        <div className="container px-lg-5 px-sm-0">
          <div className="d-flex">
            <p className="section-title-style">Experience</p>
          </div>
          <div className="pt-5">
            <p className="text-center">
              A quick summary of my work experience:
            </p>

            {workExperienceData.map((work, index) => {
              return (
                <Card key={index}>
                  <div className="row p-4">
                    <div className="col-md-1 col-5 me-auto ms-md-0 ms-2 d-flex flex-column align-items-start">
                      {work.logo ? (
                        <img
                          src={work.logo}
                          alt={`${work.company} logo`}
                          className="img-fluid ms-md-0 m-2"
                        />
                      ) : (
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle bg-dark text-white fw-semibold ms-md-0 m-2"
                          style={{ width: "64px", height: "64px" }}
                          aria-label={`${work.company} icon`}
                        >
                          <BriefcaseBusiness size={28} aria-hidden="true" />
                        </div>
                      )}
                    </div>
                    <div className="col-md-11 col-11 mx-auto">
                      <p className="m-0 mb-3 text-muted">{work.company}</p>
                      {work.positions.map((job, index) => {
                        return (
                          <div key={index} className="row">
                            <p className="fw-medium">
                              {`${job.title}`}{" "}
                              <span className="text-muted">
                                {" "}
                                {`(${job.dates})`}
                              </span>
                            </p>
                            <ul>
                              {job.descrption.map((item, index) => {
                                return (
                                  <li
                                    key={index}
                                    className="text-muted text-justify"
                                  >
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
