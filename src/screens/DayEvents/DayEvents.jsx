import React from "react";
import { DayEventsContainer, EventListContainer } from "./DayEvents.styles";
import tkLogo from "../../assets/logo/tklogo.png";
import { Link } from "react-router-dom";
import Event from "../../components/Eventbox";
import { dayEvents } from "../../assets/Events/EventsData";
export default function DayEvents() {
  return (
    <DayEventsContainer>
      <div className="tkheader">
        <Link to="/">
          <img src={tkLogo} alt="logo" />
        </Link>
      </div>
      <div className="container pb-5 pt-2">
        <p className="title">Day Events</p>
        <EventListContainer>
          {dayEvents.map((event) => {
            const url = require(`../../assets/logo/${event?.image}.png`);
            return <Event image={url} eventName={event.name}></Event>;
          })}
        </EventListContainer>
      </div>
      <div></div>
    </DayEventsContainer>
  );
}
