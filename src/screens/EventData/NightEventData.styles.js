import styled from "styled-components";

export const EventsContainer = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color:#271a4c;
  background: url(${require("../../assets/backgrounds/Night_Events.png")})
    bottom/cover no-repeat;
  color: white;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const EventsDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  width: 50%;
  padding: 3% 6%;
  z-index: 2;
  height: 100%;
  div {
    padding: 3% 0;
  }
  span {
    color: #f7aecd;
  }
  ul {
    position: relative;
  }
  li {
    margin: 1% 0;
  }
  /* ul li:before {
        position: absolute;
        content: "✓";
    } */
  @media (max-width: 768px) {
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      p {
        margin-top: 5%;
      }
    }
    width: 95%;
  }
`;

export const EventsTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: normal;
  color: #2e205a;
  background: #f7aecd;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  margin: 5% 0;
`;

export const EventsAtag = styled.a`
  font-size: 1.2rem;
  font-weight: normal;
  color: #2e205a;
  background: #f7aecd;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  margin: 5% 0;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background: #2e205a;
    color: #f7aecd;
  }
`;

export const RulesTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  color: #f7aecd;
  text-decoration: underline;

  ul {
    list-style-type: square;
  }
`;
