import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { GlobalStyles } from "./global.style.js";
import About from "./screens/About/About";
import CulturalEvents from "./screens/CulturalEvents/CulturalEvents";
import CulturalEventData from "./screens/EventData/CulturalEventData";
import TechnicalEventData from "./screens/EventData/TechnicalEventData";
import Home from "./screens/Home/Home";
import TechnicalEvents from "./screens/TechnicalEvents/TechnicalEvents";

function App() {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/culturalEvents" element={<CulturalEvents />} />
                <Route exact path="/technicalEvents" element={<TechnicalEvents />} />
                <Route exact path="/culturalEvents/:type/:eventName" element={<CulturalEventData />} />
                <Route exact path="/technicalEvents/:type/:eventName" element={<TechnicalEventData />} />
            </Routes>
        </>
    );
}

export default App;
