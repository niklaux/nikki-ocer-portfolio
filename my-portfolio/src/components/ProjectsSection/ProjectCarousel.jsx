// ProjectCarousel.jsx
import React from "react";

const ProjectCarousel = ({ images, carouselId }) => {
  return (
    <div id={carouselId} className="carousel slide p-4" data-bs-ride="carousel">
      <div className="carousel-inner rounded-4 border shadow-sm">
        {images.map((image, imgIndex) => (
          <div
            key={imgIndex}
            className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
          >
            <img
              src={image}
              alt={`Project screenshot ${imgIndex + 1}`}
              className="d-block w-100 img-fluid"
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ProjectCarousel;
