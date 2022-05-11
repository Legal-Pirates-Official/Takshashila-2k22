import React from "react";
import { technicalEventsData } from "../../assets/Events/TechnicalEventsData";
import Event from "../../components/Eventbox";
import { EventHeader } from "../../components/EventNavbar";
import {
  EventListContainer, TechnicalEventsContainer
} from "./TechnicalEvents.styles";
export default function TechnicalEvents() {
  return (
    <TechnicalEventsContainer className="technicalEventsContainer">
      <EventHeader type={"technical"} />
      {technicalEventsData?.map((info) => (
        <div className="container pb-5 pt-2">
          <p className="title mx-auto mb-4">{info?.heading}</p>
          <EventListContainer>
            {info?.data?.map((event) => {
              const url = require(`../../assets/eventLogos/${event?.image}.png`);
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
