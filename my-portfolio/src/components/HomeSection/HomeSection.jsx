import React from "react";

function HomeSection() {
  return (
    <div
      className="d-flex align-items-center"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="container">
        <div className="row py-5">
          <div className="col">
            <h1 className="display-1 fw-bold">Hi, I'm Nikki 👋</h1>
            <p>
              I'm a full stack developer with a keen eye for detail and a
              passion for creating seamless, user-friendly online experiences.
              With a strong foundation in web technologies and a knack for
              effective communication, I strive to bridge the gap between code
              and creativity.
            </p>
            <button className="home-button">Let's Get Started!</button>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
