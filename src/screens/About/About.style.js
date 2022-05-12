import styled from "styled-components";

export const AboutContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  overflow-y:scroll;
  color: #ffff;
  .nav-link{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.25rem;
    margin:0 0 0.5rem 0;
    text-decoration: none;
    color: #000000!important;
    background: #a5e4ff;
    border-radius: 45px;
    font-size: medium;
    font-weight: 400;
}
`;

export const AboutDiv = styled.div`
text-align: justify;
line-height: 1.8;
font-weight:300;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
