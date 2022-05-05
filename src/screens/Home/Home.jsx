import React from "react";
import { Link } from "react-router-dom";
import { SupportData } from "../../assets/Events/SupportData";
import citLogo from "../../assets/logo/citlogo.png";
import Logo from "../../assets/logo/logo.svg";
import Header from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Support from "../../components/Support";
import { HomeContainer, SupportSection } from "./Home.style";

function Home() {
  return (
    <div className="HomeContainer" style={{ display: "flex" }}>
      <HomeContainer>
        <Header className="w-100" />
        <div className="citheader">
          <img src={citLogo} alt="logo" />
          <p>
            CHENNAI <br />
            INSTITUTE OF TECHNOLOGY
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            height: "fit-content"
          }}
        >
          <img style={{ maxWidth: "100%" }} src={Logo} alt="logo" />
          <div className="eventLinks">
            <Link to="/dayEvents">Day Events</Link>
            <Link to="/nightEvents">Night Events</Link>
          </div>
        </div>
        <div className="w-100 bg-glass hideInBigScreen">
          <Support/>
        </div>
      </HomeContainer>
      <Sidebar />
    </div>
  );
}

export default Home;
