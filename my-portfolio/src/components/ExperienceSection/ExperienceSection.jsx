import React from "react";
import workExperienceData from "./WorkExperienceData";
import "./ExperienceSectionStyles.css";

function ExperienceSection() {
  return (
    <div className="py-5 section-grey-bg">
      <div className="container px-lg-5 px-sm-0">
        <div className="d-flex">
          <p className="section-title-style">Experience</p>
        </div>
        <div className="pt-5">
          <p className="text-center">A quick summary of my work experience:</p>

          {workExperienceData.map((work, index) => {
            return (
              <div key={index} className="row justify-content-center ">
                <div className="col-md-9 col-11 shadow rounded-5 mb-4 p-4 bg-white mx-2 mx-md-0">
                  <div className="row">
                    <div className="col-md-1 col-5 me-auto ms-md-0 ms-2 d-flex flex-column align-items-start">
                      <img
                        src={work.logo}
                        alt=""
                        className="img-fluid ms-md-0 m-2"
                      />
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
