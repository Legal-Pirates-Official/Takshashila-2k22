import styled from "styled-components";

export const HomeContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  .citheader {
    color: #fff;
    font-weight: bold;
    padding: 0 2rem;
    justify-content: flex-start;
    gap: 10px;
    white-space: pre-line;
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 5rem;

    div {
      width: 50%;
      @media (max-width: 768px) {
        width: 100%;
      }
      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 2% 7%;
        text-decoration: none;
        color: #fff;
        background: #136b40;
        border-radius: 45px;
        font-size:large;
      }
    }
  }
`;

export const SupportSection = styled.section`
  padding: 1rem;
  width: 100%;
  color: #fff;
  text-align: left;
  white-space: pre-line;
  .heading {
    font-size: x-large;
    font-weight:normal;
    color: #1e935a;
    margin-bottom: 5px;
  }
`;
