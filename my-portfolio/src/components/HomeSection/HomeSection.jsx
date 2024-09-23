import React from "react";
import { Github, Linkedin, MapPin } from "lucide-react";

function HomeSection() {
  return (
    <div
      className="d-flex align-items-center py-5"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="container px-lg-5 px-sm-0">
        <div className="row flex-column-reverse flex-lg-row justify-content-between">
          <div className="col-lg-8 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
            <h1 className="display-1 fw-bold">Hi, I'm Nikki 👋</h1>
            <p className="text-justify">
              I'm a full stack developer with a keen eye for detail and a
              passion for creating seamless, user-friendly online experiences.
              With a strong foundation in web technologies and a knack for
              effective communication, I strive to bridge the gap between code
              and creativity.
            </p>

            <div className="mt-5 mb-4 p-0 d-flex">
              <MapPin size={24} className="me-3" style={{ opacity: 0.7 }} />
              <p className="m-0">Cagayan De Oro City, Philippines</p>
            </div>
            <div className="d-flex">
              <a
                href="https://www.linkedin.com/in/nikki-lionel-ocer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-reset"
              >
                <Linkedin size={24} style={{ opacity: 0.7 }} className="me-2" />
              </a>
              <a
                href="https://github.com/niklaux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-reset"
              >
                <Github size={24} style={{ opacity: 0.7 }} className="me-2" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-end align-items-center">
            <img
              src="/images/Nikki Lionel Ocer - Grad Photoshoot.jpg"
              className="img-fluid rounded-circle my-4"
              alt="Nikki Lionel Ocer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
