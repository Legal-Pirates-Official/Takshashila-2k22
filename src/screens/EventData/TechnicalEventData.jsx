import React from "react";
import { Link, useParams } from "react-router-dom";
import { technicalEventsData } from "../../assets/Events/TechnicalEventsData";
import tkLogo from "../../assets/logo/tklogo.png";
import ContentView from "../../components/ContentView";
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
      <div className="tkheader">
        <Link to="/">
          <img src={tkLogo} alt="logo" />
        </Link>
      </div>
      <EventsContainer>
        <EventsDiv>
          <div className="p-0">
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
        <ContentDiv >
          <ContentView type={"technical"} rules={event?.rules} registration={event?.registration} />
        </ContentDiv>
      </EventsContainer>
      <div></div>
    </ParentContainer>
  );
}

export default TechnicalEventData;
