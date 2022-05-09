import React from "react";
import { Link } from "react-router-dom";
import citLogo from "../../assets/logo/citlogoFull.png";
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
            <Link to="/culturalEvents">Cultural</Link>
            <Link to="/technicalEvents">Technical</Link>
          </div>
        </div>
        <div className="w-100 bg-glass">
          <Support className="container"/>
        </div>
      </HomeContainer>
    
    </div>
  );
}

export default Home;
