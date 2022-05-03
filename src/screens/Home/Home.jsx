import React from "react";
import { Link } from "react-router-dom";
import { SupportData } from "../../assets/Events/SupportData";
import citLogo from "../../assets/logo/citlogo.png";
import Logo from "../../assets/logo/logo.svg";
import Sidebar from "../../components/Sidebar";
import { HomeContainer, SupportSection } from "./Home.style";

function Home() {
  return (
    <div className="HomeContainer" style={{ display: "flex" }}>
      <HomeContainer>
        <div className="citheader">
          <img style={{ height: "100%" }} src={citLogo} alt="logo" />
          CHENNAI <br/>
          INSTITUTE OF TECHNOLOGY
        </div>
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          <img style={{ maxWidth: "100%" }} src={Logo} alt="logo" />
          <div>
            <Link to="/dayEvents">Day Events</Link>
            <Link to="/nightEvents">Night Events</Link>
          </div>
        </div>
        <SupportSection>
          <h4 className="heading">Support</h4>
          <p>{SupportData}</p>
        </SupportSection>
      </HomeContainer>
      <Sidebar />
    </div>
  );
}

export default Home;
