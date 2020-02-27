import React from "react";
import Img from "gatsby-image";
export default function ListOfEvents({ event }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4  mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <div style={{ maxHeight: "426px" }}>
          <Img fluid={event.image.fluid} className="card-img-top" />
          <div className="card-body text-center">
            <h6>{event.title}</h6>
            <p>{event.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}