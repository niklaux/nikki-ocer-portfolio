import React from "react";
import { Copyright } from "lucide-react";

function FooterSection() {
  return (
    <div className="py-3 section-grey-bg">
      <div className="container px-lg-5 px-sm-0 d-flex justify-content-center">
        <Copyright />
        <p className="m-0 mx-1">
          2024 | Coded by Nikki Lionel Ocer. Got this design{" "}
          <a
            href="https://www.figma.com/community/file/1262992249991763120"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-underline text-reset"
          >
            here
          </a>
          🩵.
        </p>
      </div>
    </div>
  );
}

export default FooterSection;
