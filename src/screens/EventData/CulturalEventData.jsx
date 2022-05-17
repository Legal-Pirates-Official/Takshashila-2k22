import React from "react";
import { useParams } from "react-router-dom";
import { culturalEventsData } from "../../assets/Events/CulturalEventsData";
import ContentView from "../../components/ContentView";
import { EventHeader } from "../../components/EventNavbar";
import {
  ContentDiv, EventsAtag, EventsContainer,
  EventsDiv,
  EventsTitle, ParentContainer
} from "./CulturalEventData.styles";

function CulturalEventData() {
  const params = useParams();

  const eventData = culturalEventsData.find(
    (data) => data?.heading === params?.type
  );

  const event = eventData?.data.find(
    (event) => event.name === params.eventName
  );

  return (
    <ParentContainer className="culturalEventsContainer">
      <EventHeader type={"cultural"}/>
      <EventsContainer>
        <EventsDiv>
          <div className="p-0">
            <EventsTitle>{event?.name}</EventsTitle>
            <p>{event?.description}</p>
          </div>
          <div>
            {event?.contact?.map((data) => (
              <p>
                {data?.name}  <span>{`(${data?.number})`}</span>
              </p>
            ))}
          </div>
          <div>
            <span>Event Date: <span className="text-white">{event?.date}</span></span>
          </div>
          {event?.link&&<div>
            <EventsAtag target= '_blank' href={event?.link} className="enabled">Register</EventsAtag>
          </div>}
        </EventsDiv>
        <ContentDiv>
          <ContentView type={"cultural"} rules={event?.rules} registration={event?.registration} gallery={event?.gallery} />
        </ContentDiv>
      </EventsContainer>
      <div></div>
    </ParentContainer>
  );
}

export default CulturalEventData;
