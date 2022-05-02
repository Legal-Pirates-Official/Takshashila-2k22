import React from "react";
import {HomeContainer, SideBar, SideDiv} from "./Home.style";
import Logo from "../../assets/logo/logo.svg";
import Sidebar from "../../components/Sidebar";
function Home() {
    return (
        <div style={{display:"flex"}}>
            <HomeContainer>
                <img style={{maxWidth:"100%"}} src={Logo} alt="logo" />
                <div>
                    <a href="">Day Events</a>
                    <a href="">Day Events</a>
                </div>
            </HomeContainer>
            <Sidebar/>
        </div>
    );
}

export default Home;
