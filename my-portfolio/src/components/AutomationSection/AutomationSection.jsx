import React from "react";
import Card from "../common/Card";
import automationData from "./AutomationData";

function AutomationSection() {
  return (
    <section id="automations">
      <div className="py-5 section-grey-bg">
        <div className="container px-lg-5 px-sm-0">
          <div className="d-flex">
            <p className="section-title-style">Automation Suggestions</p>
          </div>
          <div className="pt-5">
            <p className="text-center text-muted">
              A few automation ideas I can build and document as case studies.
              These match the kind of systems I now want to be known for.
            </p>

            {automationData.map((item, index) => (
              <Card key={index}>
                <div className="row p-4">
                  <div className="col-lg-4 col-md-12 mb-3 mb-lg-0">
                    <p className="fw-semibold mb-2">{item.title}</p>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                  <div className="col-lg-5 col-md-12 mb-3 mb-lg-0">
                    <p className="text-uppercase text-muted small mb-2">
                      Suggested outcome
                    </p>
                    <p className="mb-0">{item.outcome}</p>
                  </div>
                  <div className="col-lg-3 col-md-12">
                    <p className="text-uppercase text-muted small mb-2">
                      Tools / tags
                    </p>
                    <div className="d-flex flex-wrap">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="section-title-style text-muted ms-0 me-2 mb-2"
                          style={{ fontSize: "0.8rem" }}
                        >
                          {tag}
                        </span>
                      ))}
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

export default AutomationSection;
