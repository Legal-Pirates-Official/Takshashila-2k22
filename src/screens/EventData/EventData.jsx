import React, {useEffect} from "react";
import {
    EventsContainer,
    EventsDiv,
    EventsTitle,
    EventsAtag,
    RulesTitle,
} from "./EventData.styles";
import {dataEvents} from "../../assets/Events/EventsData";
import {useParams} from "react-router-dom";

function EventData() {
    const params = useParams();

    const event = dataEvents.find((event) => event.name === params.eventName);
    return (
        <>
            <EventsContainer>
                <EventsDiv>
                    <div>
                        <EventsTitle>{event?.name}</EventsTitle>
                        <p>{event?.description}</p>
                    </div>
                    <div>
                        <p>
                            Member Name - <span>9087654321</span>
                        </p>
                        <p>
                            Member Name - <span>9087654321</span>
                        </p>
                    </div>
                    <div>
                        <EventsAtag href="">Register Now</EventsAtag>
                    </div>
                </EventsDiv>
                <EventsDiv>
                    <RulesTitle>Rules</RulesTitle>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Amet, sequi eius a laudantium ad fuga eaque!
                            Omnis, culpa. Nam placeat voluptas cumque harum
                        </li>
                        <li>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Amet, sequi eius a laudantium ad fuga eaque!
                            Omnis, culpa. Nam placeat voluptas cumque harum
                        </li>
                        <li>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Amet, sequi eius a laudantium ad fuga eaque!
                            Omnis, culpa. Nam placeat voluptas cumque harum
                        </li>
                        <li>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Amet, sequi eius a laudantium ad fuga eaque!
                            Omnis, culpa. Nam placeat voluptas cumque harum
                        </li>
                    </ul>
                </EventsDiv>
            </EventsContainer>
        </>
    );
}

export default EventData;
