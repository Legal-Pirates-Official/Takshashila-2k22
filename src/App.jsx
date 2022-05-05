import "./App.css";
import React from "react";
import {Routes, Route} from "react-router-dom";
import {GlobalStyles} from "./global.style.js";

import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import EventData from "./screens/EventData/DayEventData";
import DayEvents from "./screens/DayEvents/DayEvents";
import NightEvents from "./screens/NightEvents/NightEvents";
import DayEventData from "./screens/EventData/DayEventData";
import NightEventData from "./screens/EventData/NightEventData";

function App() {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/dayEvents" element={<DayEvents />} />
                <Route exact path="/nightEvents" element={<NightEvents />} />
                <Route exact path="/dayEvents/:eventName" element={<DayEventData />} />
                <Route exact path="/nightEvents/:eventName" element={<NightEventData />} />
            </Routes>
        </>
    );
}

export default App;
