import React from "react";
import Img from "gatsby-image";
export default function Food({ food }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4  mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <div style={{ maxHeight: "426px" }}>
          <Img fluid={food.image.fluid} className="card-img-top" />
          <div className="card-body text-center">
            <h6>{food.title}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}