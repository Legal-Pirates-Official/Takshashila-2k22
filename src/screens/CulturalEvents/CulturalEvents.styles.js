import styled from "styled-components";

export const CulturalEventsContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  overflow-y:scroll;
  background: url(${require("../../assets/backgrounds/Day_Events.jpg")})
    bottom/cover no-repeat;
  .container {
    z-index: 1;
    width: 100%;
    .title {
      width: fit-content;
      align-self: flex-start;
      background: #f3e374;
      color: #963900;
      padding: 0.6rem 1rem;
      border-radius: 45px;
    }
  }
`;

export const EventListContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const EventCircle = styled.section`
  height: 10rem;
  width: 10rem;
  @media (max-width: 768px) {
    height: 9rem;
    width: 9rem;
  }
  background: #963900;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 4px solid #f3e374;
  box-shadow: 1px 1px 5px #f3e374;
  cursor: pointer;
  &:hover {
    transform: scale(1.025);
  }
`;
