import React from "react";

function AboutMeSection() {
  return (
    <section id="about-me">
      <div className="section-grey-bg py-5">
        <div className="container px-lg-5 px-sm-0">
          <div className="d-flex">
            <p className="section-title-style">About me</p>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-8 col-sm-8 col-8 d-flex flex-column justify-content-center mx-auto mx-lg-0">
              <img
                src="/images/GradPhoto.webp"
                className="img-fluid rounded-5 mx-auto my-5"
                alt="Nikki Lionel Ocer"
              />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <p className="text-justify">
                I graduated with a Bachelor of Science in Computer Engineering
                and built my early career in web development, QA, and systems
                work. That background gave me a practical view of how teams
                actually move work across tools, handoffs, and approvals.
              </p>
              <p className="text-justify">
                In 2026, I am intentionally leaning into automation work. I want
                my portfolio to show how I think about workflows, not just how I
                build interfaces. That means n8n automations, process design,
                integrations, and clean documentation that makes systems easier
                to trust and maintain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
