import React from "react";
import Card from "../common/Card";
import automationData from "./AutomationData.js";
import "./AutomationSection.css";

function WorkflowCarousel({ images, carouselId }) {
  return (
    <div id={carouselId} className="carousel slide p-4" data-bs-ride="false">
      <div className="carousel-inner rounded-4 border shadow-sm">
        {images.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={image.src}>
            <a href={image.src} target="_blank" rel="noreferrer">
              <img src={image.src} alt={image.alt} className="d-block w-100 automation-image" />
            </a>
            <div className="automation-image-label">{image.label}</div>
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous workflow view</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next workflow view</span>
          </button>
        </>
      )}
    </div>
  );
}

function AutomationSection() {
  return (
    <section id="automations">
      <div className="py-5 section-grey-bg">
        <div className="container px-lg-5 px-sm-0">
          <div className="d-flex">
            <p className="section-title-style">Personal Automation Projects</p>
          </div>
          <div className="pt-5">
            <p className="text-center mb-4">
              AI-powered workflows built to connect everyday tools and reduce manual work.
            </p>

            {automationData.map((automation, index) => (
              <Card key={automation.title}>
                <div className="automation-media">
                  <WorkflowCarousel images={automation.images} carouselId={`automation-carousel-${index}`} />
                </div>
                <div className="row p-4">
                  <div className="col-lg-6 pe-lg-4">
                    <p className="fw-medium mb-2">{automation.title}</p>
                    <p className="text-muted mb-lg-0">{automation.description}</p>
                  </div>
                  <div className="col-lg-6">
                    <ul className="text-muted ps-3 mb-4">
                      {automation.highlights.map((highlight) => <li className="mb-2" key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                  <div className="col-12 d-flex flex-wrap mt-lg-2">
                    {automation.technologies.map((technology) => (
                      <span className="section-title-style text-muted ms-0 me-2 mb-2 automation-tag" key={technology}>{technology}</span>
                    ))}
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
