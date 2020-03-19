import React from "react";
import eventStyles from '../../modules/events.module.scss'
import { StaticQuery, graphql } from "gatsby";


const getEvents = graphql`
{
    events:allContentfulEvent{
      edges{
        node{
          id
          title
          price
          date
          description {
            description
          }
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
          <section className={eventStyles.events} >
            <div className={eventStyles.container}>
              <div className={eventStyles.textBox}>
                <div className={eventStyles.titleContainer}>
              <h3 name="events">Check out upcoming events</h3>
              <h1>EVENTS</h1>
              <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
              </div>
              <div className={eventStyles.grid}>
                {data.events.edges.map(({ node: event }) => {
                  return (
                    <div className={eventStyles.gridEvents} key={event.id}>
                         <img className={eventStyles.image} src={event.image.fluid.src} />
                         <h6>{event.title}</h6>
                         <p>{event.description.description}</p>
                         <a href="https://www.facebook.com/pg/HeydayBeerCo/events/?ref=page_internal" target="_blank" className={eventStyles.btn}>More Details</a>
                    </div>
                  );
                })}
                </div>
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}
