import styled from "styled-components";

export const TechnicalEventsContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  background: url(${require("../../assets/backgrounds/Night_Events.png")})
    bottom/cover no-repeat;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
    }
  .container {
    z-index:1;
    width: 100%;
    .title {
      width: fit-content;
      align-self: flex-start;
      background: #F7AECD;
      color: #31225F;
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

export const NightEventCircle = styled.section`
  height: 10rem;
  width: 10rem;
  @media (max-width: 768px) {
    height: 9rem;
    width: 9rem;
  }
  background: #31225F;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 4px solid #F6ADCC;
  box-shadow: 1px 1px 5px #F6ADCC;
  cursor:pointer;
  &:hover {
    transform: scale(1.025);
  }
`;
