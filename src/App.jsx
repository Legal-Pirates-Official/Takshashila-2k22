import "./App.css";
import React from "react";
import {Routes, Route} from "react-router-dom";
import {GlobalStyles} from "./global.style.js";

import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import EventData from "./screens/EventData/EventData";
import DayEvents from "./screens/DayEvents/DayEvents";
import NightEvents from "./screens/NightEvents/NightEvents";

function App() {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/dayEvents" element={<DayEvents />} />
                <Route exact path="/nightEvents" element={<NightEvents />} />

                <Route exact path="/dayEvents/:eventName" element={<EventData />} />
            </Routes>
        </>
    );
}

export default App;
