import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Card from "../common/Card";
import automationData from "./AutomationData.js";
import "./AutomationSection.css";

function WorkflowCarousel({ images, carouselId, onOpenImage }) {
  return (
    <div
      id={carouselId}
      className="carousel slide px-4 pt-3"
      data-bs-ride="false"
    >
      <div className="carousel-inner rounded-4 border shadow-sm">
        {images.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={image.src}>
            <button
              className="automation-image-button"
              type="button"
              aria-label={`View ${image.label} image`}
              onClick={(event) => onOpenImage(images, index, event.currentTarget)}
            >
              <img src={image.src} alt={image.alt} className="d-block w-100 automation-image" />
            </button>
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
  const [selectedImage, setSelectedImage] = useState(null);
  const closeButtonRef = useRef(null);
  const imageTriggerRef = useRef(null);
  const selectedImages = selectedImage?.images;

  const openImage = (images, index, trigger) => {
    imageTriggerRef.current = trigger;
    setSelectedImage({ images, index });
  };

  const closeImage = () => setSelectedImage(null);
  const showPreviousImage = () => {
    setSelectedImage((current) => ({
      ...current,
      index: (current.index - 1 + current.images.length) % current.images.length,
    }));
  };
  const showNextImage = () => {
    setSelectedImage((current) => ({
      ...current,
      index: (current.index + 1) % current.images.length,
    }));
  };

  useEffect(() => {
    if (!selectedImages) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowLeft" && selectedImages.length > 1) {
        setSelectedImage((current) => ({
          ...current,
          index: (current.index - 1 + current.images.length) % current.images.length,
        }));
      }
      if (event.key === "ArrowRight" && selectedImages.length > 1) {
        setSelectedImage((current) => ({
          ...current,
          index: (current.index + 1) % current.images.length,
        }));
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      imageTriggerRef.current?.focus();
    };
  }, [selectedImages]);

  const activeImage = selectedImage?.images[selectedImage.index];

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
                <h3 className="automation-title px-4 pt-4 mb-0">{automation.title}</h3>
                <div className="automation-media">
                  <WorkflowCarousel
                    images={automation.images}
                    carouselId={`automation-carousel-${index}`}
                    onOpenImage={openImage}
                  />
                </div>
                <div className="row p-4">
                  <div className="col-lg-6 pe-lg-4">
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
                  {automation.liveDemo && (
                    <div className="col-12 mt-2">
                      <a
                        className="btn btn-outline-dark rounded-pill"
                        href={automation.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View live demo
                      </a>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {selectedImage && createPortal(
        <div
          className="automation-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="automation-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeImage();
          }}
        >
          <div className="automation-modal-dialog">
            <div className="automation-modal-header">
              <div>
                <p className="automation-modal-eyebrow mb-1">Automation preview</p>
                <h2 className="automation-modal-title mb-0" id="automation-modal-title">
                  {activeImage.label}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                className="automation-modal-close"
                type="button"
                aria-label="Close image preview"
                onClick={closeImage}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="automation-modal-body">
              {selectedImage.images.length > 1 && (
                <button
                  className="automation-modal-nav automation-modal-nav-prev"
                  type="button"
                  aria-label="View previous image"
                  onClick={showPreviousImage}
                >
                  <span aria-hidden="true">&#8249;</span>
                </button>
              )}
              <img src={activeImage.src} alt={activeImage.alt} className="automation-modal-image" />
              {selectedImage.images.length > 1 && (
                <button
                  className="automation-modal-nav automation-modal-nav-next"
                  type="button"
                  aria-label="View next image"
                  onClick={showNextImage}
                >
                  <span aria-hidden="true">&#8250;</span>
                </button>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}

export default AutomationSection;
