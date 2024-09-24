import React from "react";

function AboutMeSection() {
  return (
    <div className="section-grey-bg py-5">
      <div className="container px-lg-5 px-sm-0">
        <div className="d-flex">
          <p className="section-title-style">About me</p>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-8 col-sm-8 col-8 d-flex flex-column justify-content-center mx-auto mx-lg-0">
            <img
              src="/images/GradPhoto.jpg"
              className="img-fluid rounded-5 mx-auto my-5"
              alt="Nikki Lionel Ocer"
            />
          </div>
          <div className="col-lg-8 d-flex flex-column justify-content-center">
            <p className="text-justify">
              I graduated with a Bachelor of Science in Computer Engineering and
              have a strong passion for web development. I began learning about
              web development during the global pandemic in my senior year at
              university. By the time I landed my first job in 2023, I had
              already become proficient in the MERN (MongoDB, Express, ReactJS,
              Node) stack, which played a key role in securing the position.
            </p>
            <p className="text-justify">
              Since then, I’ve continued to grow as a developer, taking on new
              challenges and learning new technologies along the way. Thanks to
              my current work experience, I am now well-versed in Next.js,
              Material UI, TypeScript, Django, and designing small-scale
              databases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
