import React from "react";
import { useParams } from "react-router-dom";
import { technicalEventsData } from "../../assets/Events/TechnicalEventsData";
import ContentView from "../../components/ContentView";
import { EventHeader } from "../../components/EventNavbar";
import {
  ContentDiv, EventsAtag, EventsContainer,
  EventsDiv,
  EventsTitle, ParentContainer
} from "./TechnicalEventData.styles";

function TechnicalEventData() {
  const params = useParams();

  const eventData = technicalEventsData.find(
    (data) => data?.heading === params?.type
  );

  const event = eventData?.data?.find((event) => event.name === params.eventName);

  return (
    <ParentContainer  className="technicalEventsContainer">
      <EventHeader type={"technical"} />
      <EventsContainer>
        <EventsDiv>
          <div className="p-0">
            <EventsTitle>{event?.name}</EventsTitle>
            <p>{event?.description}</p>
          </div>
          <div>
            {event?.contact?.map((data) => (
              <p>
                {data?.name} <span>{`(${data?.number})`}</span>
              </p>
            ))}
          </div>
          <div>
            <span>Event Date: <span className="text-white">{event?.date}</span></span>
          </div>
          {event?.link&&<div>
            <EventsAtag href={event?.link} className="disabled">Registration Opens Soon</EventsAtag>
          </div>}
        </EventsDiv>
        <ContentDiv >
          <ContentView type={"technical"} rules={event?.rules} registration={event?.registration} />
        </ContentDiv>
      </EventsContainer>
      <div></div>
    </ParentContainer>
  );
}

export default TechnicalEventData;
