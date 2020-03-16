import React from "react";
import Title from "../globals/Title";
import { StaticQuery, graphql } from "gatsby";
import ListOfEvents from "./ListOfEvents";

const getEvents = graphql`
{
    events:allContentfulEvent{
      edges{
        node{
          id
          title
          price
          date
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
  



export default function allEvents() {
  return (
    <StaticQuery
      query={getEvents}
      render={data => {
        return (
          <section>
            <div>
              <div >
                {data.events.edges.map(({ node: event }) => {
                  return <ListOfEvents key={event.id} event={event} />;
                })}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}
