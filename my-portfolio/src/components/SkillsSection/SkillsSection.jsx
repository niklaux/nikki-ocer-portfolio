import React from "react";
import skillsData from "./SkillsData";

function SkillsSection() {
  return (
    <section id="skills">
      <div className="py-5">
        <div className="container px-lg-5 px-sm-0">
          <div className="d-flex">
            <p className="section-title-style">Skills</p>
          </div>
          <div className="pt-5">
            <p className="text-center">
              The skills, tools, and technologies I've worked with:
            </p>

            <div className="row">
              {skillsData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-lg-2 col-md-3 col-sm-4 col-4 skill-logo d-flex flex-column align-items-center"
                  >
                    {item.logo}
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
