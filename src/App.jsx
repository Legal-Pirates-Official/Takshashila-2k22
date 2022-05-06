import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { GlobalStyles } from "./global.style.js";
import About from "./screens/About/About";
import DayEvents from "./screens/DayEvents/DayEvents";
import DayEventData from "./screens/EventData/DayEventData";
import NightEventData from "./screens/EventData/NightEventData";
import Home from "./screens/Home/Home";
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
                <Route exact path="/dayEvents/:eventName" element={<DayEventData />} />
                <Route exact path="/nightEvents/:eventName" element={<NightEventData />} />
            </Routes>
        </>
    );
}

export default App;
