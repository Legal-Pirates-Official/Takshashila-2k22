import styled from "styled-components";

export const HomeContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  max-height: fit-content;
  .nav-link{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 2% 5%;
      margin:0 0 0.5rem 0;
      text-decoration: none;
      color: #fff!important;
      background: #136b40;
      border-radius: 45px;
      font-size: medium;
      font-weight: 400;
  }
  .citheader {
    color: #fff;
    font-weight: bold;
    padding: 0 2rem;
    display:flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    height:5rem;
    width:100%;
    white-space: pre-line;
    @media (max-width: 768px) {
      padding: 0 1rem;
      font-size: 0.9rem;
    }
    p {
      margin: 1rem 0;
    }
    img {
      height: 100% !important;
      @media (max-width: 768px) {
        position: relative !important;
        top: 0 !important;
        height: 75% !important;
      }
    }
  }
  .mainContainer{
    // img{
    //   filter: drop-shadow(2px 2px 3px #000);
    // }
    min-height:70vh;
    img,.eventLinks{
      max-width:45%;
      @media (max-width: 768px) {
        max-width:95%;
      }
    }

  }
.eventLinks {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 5rem;
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align:center;
      justify-content: center;
      padding: 2% 7%;
      margin: 0 5px;
      text-decoration: none;
      color: #fff;
      background: #136b40;
      border-radius: 45px;
      font-size: large;
      font-weight: 300;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.025);
        box-shadow: 1px 1px 5px black;
      }
  }
`;

export const SupportSection = styled.section`
  padding: 1rem;
  width: 100%;
  color: #fff;
  font-weight: 300;
  text-align: left;
  white-space: pre-line;
  @media (max-width: 768px) {
    padding-right: 4rem;
  }
  .heading {
    font-size: x-large;
    font-weight: 400;
    color: #1e935a;
    margin-bottom: 5px;
    text-shadow: 1px 1px 2px #000000;
  }
`;
