import React from "react";
import eventStyles from '../../modules/events.module.scss'

export default function ListOfEvents({ event }) {
  return (
  <section className={eventStyles.events} >
    <div className={eventStyles.container}>
      <div className={eventStyles.textBox}>
      <div className={eventStyles.titleContainer}>
          <h3>Check out upcoming events</h3>
         <h1>EVENTS</h1>
        </div>
        <div className={eventStyles.grid}>
        <div className={`${eventStyles.gridEvent} ${eventStyles.eventItems}`}>
          <img className={eventStyles.image} src={event.image.fluid.src} />
            <h6>{event.title}</h6>
            <p>{event.date}</p>
            <p>{event.description}</p>
            </div>
            </div>
          </div>
        </div>
      </section>
  );
}