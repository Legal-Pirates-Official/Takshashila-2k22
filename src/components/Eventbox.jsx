import React from "react";
import { EventCircle } from "../screens/DayEvents/DayEvents.styles";
import { useNavigate } from "react-router-dom";
export default function Event({ eventName, image }) {
  const navigate = useNavigate();
  return (
    <div>
      <EventCircle onClick={() => navigate(eventName)}>
        <img src={image}></img>
      </EventCircle>
      <div className="text-center mt-2 text-white">{eventName}</div>
    </div>
  );
}
