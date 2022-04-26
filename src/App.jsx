import "./App.css";
import React from "react";
import {Routes, Route} from "react-router-dom";
import {GlobalStyles} from "./global.style.js";

import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Events from "./screens/Events/Events";

function App() {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/events" element={<Events />} />
            </Routes>
        </>
    );
}

export default App;
