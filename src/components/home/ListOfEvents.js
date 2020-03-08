import React from "react";
import Img from "gatsby-image";
export default function ListOfEvents({ event }) {
  return (
    <div >
      <div  style={{ minHeight: "100%" }}>
        <div style={{ maxHeight: "426px" }}>
          <Img fluid={event.image.fluid} />
          <div>
            <h6>{event.title}</h6>
            <p>{event.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}