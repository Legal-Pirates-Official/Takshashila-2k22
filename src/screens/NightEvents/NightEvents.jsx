import React from "react";
import { NightEventsContainer, EventListContainer } from "./NightEvents.styles";
import tkLogo from "../../assets/logo/tklogo.png";
import { Link } from "react-router-dom";
import Event from "../../components/Eventbox";
import { nightEvents } from "../../assets/Events/EventsData";
export default function NightEvents() {
  return (
    <NightEventsContainer>
      <div className="tkheader">
        <Link to="/">
          <img src={tkLogo} alt="logo" />
        </Link>
      </div>
      <div className="container pb-5 pt-2">
        <p className="title">Night Events</p>
        <EventListContainer>
          {nightEvents.map((event) => {
            const url = require(`../../assets/logo/${event?.image}.png`);
            return <Event type={"night"} image={url} eventName={event.name}></Event>;
          })}
        </EventListContainer>
      </div>
      <div></div>
    </NightEventsContainer>
  );
}
