import styled from "styled-components";

export const AboutContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  color: #ffff;
  text-align: left;
  padding-bottom:75px;
  line-height: 1.6;
`;

export const AboutDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40%;
  div {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .title {
    padding: 0.4rem 1rem;
    margin: 20px;
    width:fit-content;
    text-decoration: none;
    color: #000000;
    background: #a5e4ff;
    border-radius: 45px;
    font-weight: normal;
  }
  p {
    width: 75%;
    white-space:pre-line;
  }
  svg {
    object-fit: contain;
    position: absolute;
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    bottom: 10%;
  }
`;
