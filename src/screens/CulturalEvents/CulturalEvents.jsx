import React from "react";
import {
  CulturalEventsContainer,
  EventListContainer
} from "./CulturalEvents.styles";
import tkLogo from "../../assets/logo/tklogo.png";
import { Link } from "react-router-dom";
import Event from "../../components/Eventbox";
import { culturalEventsData } from "../../assets/Events/CulturalEventsData";
export default function CulturalEvents() {
  return (
    <CulturalEventsContainer className="culturalEventsContainer">
      <div className="tkheader">
        <Link to="/">
          <img src={tkLogo} alt="logo" />
        </Link>
      </div>
      {culturalEventsData?.map((info) => (
        <div className="container pb-5 pt-2">
          <p className="title mx-auto mb-4">{info?.heading}</p>
          <EventListContainer>
            {info?.data?.map((event) => {
              const url = require(`../../assets/logo/${event?.image}.png`);
              return (
                <Event
                  type={"cultural"}
                  image={url}
                  eventName={event.name}
                  heading={info.heading}
                ></Event>
              );
            })}
          </EventListContainer>
        </div>
      ))}
    </CulturalEventsContainer>
  );
}
