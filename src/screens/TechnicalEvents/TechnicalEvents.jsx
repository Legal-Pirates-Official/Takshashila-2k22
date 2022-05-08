import React from "react";
import { TechnicalEventsContainer, EventListContainer } from "./TechnicalEvents.styles";
import tkLogo from "../../assets/logo/tklogo.png";
import { Link } from "react-router-dom";
import Event from "../../components/Eventbox";
import { technicalEventsData } from "../../assets/Events/TechnicalEventsData";
export default function TechnicalEvents() {
  return (
    <TechnicalEventsContainer className="technicalEventsContainer">
      <div className="tkheader">
        <Link to="/">
          <img src={tkLogo} alt="logo" />
        </Link>
      </div>
      {technicalEventsData?.map((info) => (
        <div className="container pb-5 pt-2">
          <p className="title mx-auto mb-4">{info?.heading}</p>
          <EventListContainer>
            {info?.data?.map((event) => {
              const url = require(`../../assets/logo/${event?.image}.png`);
              return (
                <Event
                  type={"technical"}
                  image={url}
                  eventName={event.name}
                  heading={info.heading}
                ></Event>
              );
            })}
          </EventListContainer>
        </div>
      ))}
      <div></div>
    </TechnicalEventsContainer>
  );
}
