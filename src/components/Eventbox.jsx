import React from "react";
import { EventCircle } from "../screens/CulturalEvents/CulturalEvents.styles";
import { NightEventCircle } from "../screens/TechnicalEvents/TechnicalEvents.styles";
import { useNavigate } from "react-router-dom";
export default function Event({ eventName, image, type, heading }) {
  const navigate = useNavigate();
  return type === "cultural" ? (
    <div>
      <EventCircle onClick={() => navigate(`${heading}/${eventName}`)}>
        <img alt="event" src={image}></img>
      </EventCircle>
      <div className="text-center mt-2 text-white">{eventName}</div>
    </div>
  ) : (
    <div>
      <NightEventCircle onClick={() => navigate(`${heading}/${eventName}`)}>
        <img alt="event" src={image}></img>
      </NightEventCircle>
      <div className="text-center mt-2 text-white">{eventName}</div>
    </div>
  );
}
