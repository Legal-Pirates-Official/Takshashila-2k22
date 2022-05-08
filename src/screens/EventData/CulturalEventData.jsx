import React from "react";
import {
  EventsContainer,
  EventsDiv,
  EventsTitle,
  EventsAtag,
  RulesTitle
} from "./CulturalEventData.styles";
import { culturalEventsData } from "../../assets/Events/CulturalEventsData";
import { useParams } from "react-router-dom";

function CulturalEventData() {
  const params = useParams();

  const eventData = culturalEventsData.find(
    (data) => data?.heading === params?.type
  );

  const event = eventData?.data.find(
    (event) => event.name === params.eventName
  );

  return (
    <>
      <EventsContainer className="culturalEventsContainer">
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

export default CulturalEventData;
