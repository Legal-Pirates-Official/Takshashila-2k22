import React from "react";
import {
    EventsContainer,
    EventsDiv,
    RulesDiv,
    AbsoluteDiv,
} from "./Events.styles";
import {dataEvents} from "../../assets/Events/EventsData";

function Events() {
    return (
        <>
            <EventsContainer>
                <EventsDiv>
                    <h1>Events Name</h1>
                    <p>
                        A photo is a moment frozen forever in time. Show the
                        life you've lived through the lens and the moments
                        you've preserved through your clicks.
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

export default Events;
