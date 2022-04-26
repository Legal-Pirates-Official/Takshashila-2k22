import React from "react";
import {HomeContainer, SideBar, SideDiv} from "./Home.style";
import Logo from "../../assets/logo/logo.svg";

function Home() {
    return (
        <>
            <SideBar>
                <SideDiv>a</SideDiv>
                <SideDiv>
                    <div>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png" />
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" />
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/whatsapp.png" />
                        <img src="https://img.icons8.com/ios-filled/30/ffffff/youtube-play.png" />
                    </div>
                </SideDiv>
            </SideBar>
            <HomeContainer>
                <img src={Logo} alt="logo" />
                <div>
                    <a href="">Day Events</a>
                    <a href="">Day Events</a>
                </div>
            </HomeContainer>
        </>
    );
}

export default Home;
