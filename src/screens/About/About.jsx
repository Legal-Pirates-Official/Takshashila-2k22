import React from "react";
import { AboutContainer, AboutDiv } from "./About.style";
import tkLogo from "../../assets/logo/tklogo.png";
import { Link } from "react-router-dom";
import { SupportSection } from "../Home/Home.style";
import { SupportData } from "../../assets/Events/SupportData";
import Support from "../../components/Support";

function About() {
  return (
    <AboutContainer className="AboutContainer">
      <div className="tkheader">
        <Link to="/">
          <img src={tkLogo} alt="logo" />
        </Link>
      </div>
      <AboutDiv className="container">
        <div>
          <div className="title">About</div>
        </div>
        <p style={{ whiteSpace: "pre-line" }}>
          Takshashila is a vibrant mix of fascinating and fun-filled events to
          rejoice life in all its facets.The event marks its significance by
          instilling the feeling of exuberance and togetherness amongst the
          students. The escapade fans out for a span of three days with the motif
          to accentuate the creative streak in each of us through the multitude
          of varying ventures curated for the young minds.
          <br />
          <br />
          The new normal comes with an opportunity to experience a fresh yet
          familiar event from the luxury and protection of your home. Experience
          the virtual reality that continues to set the standard by bringing a
          delegated fervor never witnessed before.
        </p>
      </AboutDiv>
      <AboutDiv className="container">
        <div>
          <div className="title">About CIT</div>
        </div>
        <p>
          Chennai Institute of Technology (CIT) is a highly esteemed college
          that has marked its place amongst the top colleges in Chennai. It was
          established with an initiative to provide students with quality
          learning along with industrial exposure to develop discipline in their
          lifestyle and also prepare them to stand on their own feet in this
          highly competitive world. Apart from the quality learning in the
          classrooms, students are also offered a wide range of training
          programs that help in inculcating knowledge and test themselves in a
          challenging environment. The institute has partnered up with leading
          companies, both national & international, and made its mark on a
          global level. Connections with acclaimed countries such as Japan &
          Germany imparts knowledge about the various upgrades in technology,
          automation & manufacturing.
          <br /> <br />
          CIT also believes in creating a better understanding of Engineering
          for school students, who are to step into their college life. Hence,
          they are provided with opportunities through events, which is a
          perfect blend of education & extra-curricular activities.
        </p>
        <br />
      </AboutDiv>
      <div className="w-100 bg-glass">
        <Support className="container pb-0"/>
      </div>
    </AboutContainer>
  );
}

export default About;
