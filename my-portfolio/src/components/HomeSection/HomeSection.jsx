import React from "react";
import { Github, MapPin } from "lucide-react";

function HomeSection() {
  return (
    <section id="home">
      <div
        className="d-flex align-items-center py-5"
        style={{ backgroundColor: "var(--portfolio-page)" }}
      >
        <div className="container px-lg-5 px-sm-0">
          <div className="row flex-column-reverse flex-lg-row justify-content-between">
            <div className="col-lg-8 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
              {/* <div className="d-flex justify-content-center justify-content-lg-start">
                <p className="section-title-style d-inline-block mb-3">
                  Automation Specialist
                </p>
              </div> */}

              <h1 className="display-4 fw-bold mt-3">Hi, I'm Nikki 👋</h1>
              <p className="text-justify">
                I build automations and web systems that remove repetitive work
                from day-to-day operations. My focus now is n8n workflows,
                process automation, QA-friendly tooling, and integrations that
                help teams move faster with less manual effort.
              </p>
              <p className="text-justify">
                I am reshaping this portfolio around real-world workflow ideas,
                case studies, and practical systems that match the kind of
                automation work I want to do next.
              </p>

              <div className="mt-4 pt-4 border-top">
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <p className="section-title-style d-inline-block mb-3">
                    About me
                  </p>
                </div>

                <p className="text-justify">
                  I graduated with a Bachelor of Science in Computer Engineering
                  and built my early career in web development, QA, and systems
                  work. That background gave me a practical view of how teams
                  actually move work across tools, handoffs, and approvals.
                </p>
                <p className="text-justify">
                  In 2026, I am intentionally leaning into automation work. I
                  want my portfolio to show how I think about workflows, not
                  just how I build interfaces. That means n8n automations,
                  process design, integrations, and clean documentation that
                  makes systems easier to trust and maintain.
                </p>
              </div>

              <div className="mt-5 mb-4 p-0 d-flex align-items-center">
                <MapPin size={24} className="me-3" style={{ opacity: 0.7 }} />
                <p className="m-0 me-3">Cagayan De Oro City, Philippines</p>
                <div className="d-flex flex-wrap gap-3">
                  <a
                    href="https://github.com/niklaux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark rounded-pill px-4"
                  >
                    <Github size={18} className="me-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-8 col-sm-8 col-8 d-flex justify-content-end align-items-center mx-auto mx-lg-0">
              <img
                src="/images/Nikki-Lionel-Ocer-Grad-Photoshoot.webp"
                className="img-fluid rounded-circle my-4"
                alt="Nikki Lionel Ocer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
