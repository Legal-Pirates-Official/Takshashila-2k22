import React from "react";
import {
  EventsContainer,
  EventsDiv,
  EventsTitle,
  EventsAtag,
  RulesTitle
} from "./NightEventData.styles";
import { nightEvents } from "../../assets/Events/EventsData";
import { useParams } from "react-router-dom";

function NightEventData() {
  const params = useParams();

  const event = nightEvents.find((event) => event.name === params.eventName);
  return (
    <>
      <EventsContainer>
        <EventsDiv>
          <div>
            <EventsTitle>{event?.name}</EventsTitle>
            <p>{event?.description}</p>
          </div>
          <div>
            {event?.contact?.map((data) => (
              <p>
                {data?.name} - <span>{data?.number}</span>
              </p>
            ))}
          </div>
          <div>
            <EventsAtag href={event?.link}>Register Now</EventsAtag>
          </div>
        </EventsDiv>
        <EventsDiv>
          <RulesTitle>Rules</RulesTitle>
          <ul>
            {event?.rules?.map((rule) => (
              <li>{rule}</li>
            ))}
          </ul>
        </EventsDiv>
      </EventsContainer>
    </>
  );
}

export default NightEventData;
