import React from "react";

function Card({ children }) {
  return (
    <div className="row justify-content-center ">
      <div className="col-md-9 col-11 shadow-sm rounded-5 mb-4 bg-white mx-2 mx-md-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default Card;
