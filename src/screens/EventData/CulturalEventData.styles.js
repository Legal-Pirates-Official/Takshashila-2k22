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
  background: url(${require("../../assets/backgrounds/Day_Events.jpg")})
    bottom/cover no-repeat;
  color: white;

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
    color: #ffd365;
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
  color: rgb(194, 96, 34);
  background: #ffd365;
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
  color: rgb(194, 96, 34);
  background: #ffd365;
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
    background: rgb(194, 96, 34);
    color: #ffd365;
  }
`;

export const RulesTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  color: #ffd365;
  text-decoration: underline;

  ul {
    list-style-type: square;
  }
`;
