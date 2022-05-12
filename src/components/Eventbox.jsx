import React from "react";
import { EventCircle } from "../screens/CulturalEvents/CulturalEvents.styles";
import { NightEventCircle } from "../screens/TechnicalEvents/TechnicalEvents.styles";
import { useNavigate } from "react-router-dom";
export default function Event({ eventName, image, type, heading }) {
  const navigate = useNavigate();
  return type === "cultural" ? (
    <div  style={{width:"10rem",display:"flex",flexDirection:"column", alignItems:"center"}}>
      <EventCircle className="p-2" onClick={() => navigate(`${heading}/${eventName}`)}>
        <img alt="event" src={image} width="70%"></img>
      </EventCircle>
      <div className="text-center mt-2 text-white">{eventName}</div>
    </div>
  ) : (
    <div style={{width:"10rem",display:"flex",flexDirection:"column", alignItems:"center"}}>
      <NightEventCircle className="p-2" onClick={() => navigate(`${heading}/${eventName}`)}>
        <img alt="event" src={image} width="70%"></img>
      </NightEventCircle>
      <div className="text-center mt-2 text-white">{eventName}</div>
    </div>
  );
}
