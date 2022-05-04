import React from "react";
import {
    DayEventsContainer,
    EventCircle,
    EventListContainer,
} from "./DayEvents.styles";
import tkLogo from "../../assets/logo/tklogo.png";
import {Link} from "react-router-dom";
import Event from "../../components/Eventbox";
import {dataEvents} from "../../assets/Events/EventsData";
export default function DayEvents() {
    return (
        <DayEventsContainer>
            <div className="tkheader">
                <Link to="/">
                    <img src={tkLogo} alt="logo" />
                </Link>
            </div>
            <div className="container">
                <p className="title">Day Events</p>
                <EventListContainer>
                    {dataEvents.map((event) => (
                        <Event image={tkLogo} eventName={event.name}></Event>
                    ))}
                </EventListContainer>
            </div>
            <div></div>
        </DayEventsContainer>
    );
}
