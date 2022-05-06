import React from "react";
import { EventCircle } from "../screens/DayEvents/DayEvents.styles";
import { NightEventCircle } from "../screens/NightEvents/NightEvents.styles";
import { useNavigate } from "react-router-dom";
export default function Event({ eventName, image, type }) {
  const navigate = useNavigate();
  return type === "day" ? (
    <div>
      <EventCircle onClick={() => navigate(eventName)}>
        <img alt="event" src={image}></img>
      </EventCircle>
      <div className="text-center mt-2 text-white">{eventName}</div>
    </div>
  ) : (
    <div>
      <NightEventCircle onClick={() => navigate(eventName)}>
        <img alt="event" src={image}></img>
      </NightEventCircle>
      <div className="text-center mt-2 text-white">{eventName}</div>
    </div>
  );
}
