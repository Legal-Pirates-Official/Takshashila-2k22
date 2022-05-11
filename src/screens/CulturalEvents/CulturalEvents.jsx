import React from "react";
import { culturalEventsData } from "../../assets/Events/CulturalEventsData";
import Event from "../../components/Eventbox";
import { EventHeader } from "../../components/EventNavbar";
import {
  CulturalEventsContainer,
  EventListContainer
} from "./CulturalEvents.styles";
export default function CulturalEvents() {
  return (
    <CulturalEventsContainer className="culturalEventsContainer">
      <EventHeader type={"cultural"}/>
      {culturalEventsData?.map((info) => (
        <div className="container pb-5 pt-2">
          <p className="title mx-auto mb-4">{info?.heading}</p>
          <EventListContainer>
            {info?.data?.map((event) => {
              const url = require(`../../assets/eventLogos/${event?.image}.png`);
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
