import React from "react";
import { StaticQuery, graphql } from "gatsby";
// import Food from "./Food";
const getMenu = graphql`
{
  menu:allContentfulFood{
    edges{
      node{
        id
        title
        price
        image{
          fluid(maxHeight:400){
            src 
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`;



export default function Products() {
  return (
    <StaticQuery
      query={getMenu}
      render={data => {
        return (
          <section className="py-5">
            <h1>Food</h1>
            {/* <div className="container">
              <Title title="our menu" />
              <div className="row">
                {data.menu.edges.map(({ node: food }) => {
                  return <Food key={food.id} food={food} />;
                })}
              </div>
            </div> */}
          </section>
        );
      }}
    />
  );
}
