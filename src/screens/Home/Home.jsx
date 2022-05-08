import React from "react";
import { Link } from "react-router-dom";
import citLogo from "../../assets/logo/citlogo.png";
import Logo from "../../assets/logo/logo.png";
import Header from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Support from "../../components/Support";
import { HomeContainer } from "./Home.style";

function Home() {
  return (
    <div className="HomeContainer" style={{ display: "flex" }}>
      <HomeContainer>
        <Header className="w-100" />
        <div className="citheader">
          <img src={citLogo} alt="logo" />
          <p className="text-dark">
            CHENNAI <br />
            INSTITUTE OF TECHNOLOGY
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            justifyContent:"center",
            gap: 10,
            height: "fit-content"
          }}
          className="container mainContainer"
        >
          <img  src={Logo} alt="logo" />
          <div className="eventLinks h2 fw-light" style={{alignItems:"flex-start"}} >
            <Link to="/culturalEvents">Cultural Events</Link>
            <Link to="/technicalEvents">Technical Events</Link>
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
