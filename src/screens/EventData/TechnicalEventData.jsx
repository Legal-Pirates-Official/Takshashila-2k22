import React from "react";
import {
  EventsContainer,
  EventsDiv,
  EventsTitle,
  EventsAtag,
  RulesTitle
} from "./TechnicalEventData.styles";
import { technicalEventsData } from "../../assets/Events/TechnicalEventsData";
import { useParams } from "react-router-dom";

function TechnicalEventData() {
  const params = useParams();

  const eventData = technicalEventsData.find(
    (data) => data?.heading === params?.type
  );

  const event = eventData?.data?.find((event) => event.name === params.eventName);

  return (
    <>
      <EventsContainer className="technicalEventsContainer">
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

export default TechnicalEventData;
