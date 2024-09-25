import React, { useState } from "react";
import { Copy, Github, Linkedin, Mail } from "lucide-react";

function ContactSection() {
  const [showToast, setShowToast] = useState(false);
  const email = "nikkiocer@gmail.com";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 2000); // Hide the toast after 3 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <section id="contact">
      <div className="py-5 section-grey-bg">
        <div className="container px-lg-5 px-sm-0">
          <div className="d-flex">
            <p className="section-title-style">Get in touch</p>
          </div>
          <div className="pt-5">
            <p className="text-center text-muted fs-5">
              Looking for a developer to join your team? I’m excited to hear
              from you! <br /> Feel free to reach out with any questions or
              opportunities.
            </p>

            <div className="d-flex justify-content-center align-items-center my-5">
              <Mail size={32} color="#9c9c9c" />
              <p className="m-0 mx-3 fs-4 fw-medium">{email}</p>
              <button
                className="btn p-0"
                onClick={handleCopy}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Copy size={32} color="#9c9c9c" />
              </button>
            </div>

            <p className="text-center text-muted">
              You may also find me on these platforms
            </p>

            <div className="d-flex justify-content-center">
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
        </div>

        {/* Snackbar / Toast */}
        <div
          className="toast-container position-fixed bottom-0 end-0 p-3"
          style={{ zIndex: 1050 }}
        >
          <div
            className={`toast align-items-center text-white bg-success ${
              showToast ? "show" : "hide"
            }`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex">
              <div className="toast-body">Email copied to clipboard!</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
                onClick={() => setShowToast(false)}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
