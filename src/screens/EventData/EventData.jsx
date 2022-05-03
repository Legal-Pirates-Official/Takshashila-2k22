import React, { useEffect } from "react";
import {
    EventsContainer,
    EventsDiv,
    RulesDiv,
    AbsoluteDiv,
} from "./EventData.styles";
import {dataEvents} from "../../assets/Events/EventsData";
import { useParams } from 'react-router-dom';

function EventData() {
    const params = useParams();
    
    const event = dataEvents.find(event=>event.name===params.eventName)
    return (
        <>
            <EventsContainer>
                <EventsDiv>
                    <h1>{event?.name}</h1>
                    <p>
                        {event?.description}
                    </p>
                    <button>Register Now</button>
                </EventsDiv>
                <EventsDiv>
                    <RulesDiv>
                        <h1>Rules</h1>
                        <h1>Description</h1>
                        <h1>Contact</h1>
                    </RulesDiv>
                    <AbsoluteDiv>
                        {/* {dataEvents.map((data, index) => {
                            {
                                if (data.title === "Contact") {
                                    <div>
                                        <p>{data.content}sdfvasdfasdf</p>
                                    </div>;
                                }
                            }
                        })} */}
                    </AbsoluteDiv>
                    ;
                </EventsDiv>
            </EventsContainer>
        </>
    );
}

export default EventData;
