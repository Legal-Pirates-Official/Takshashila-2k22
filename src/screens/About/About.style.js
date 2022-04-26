import styled from "styled-components";

export const AboutContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* height: 100vh; */
    background-color: #fafafa;
    padding: 0 10%;
    text-align: center;
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
    h1 {
        position: relative;
        font-size: 2.5rem;
        margin: 3%;
        font-family: "wild_wolf";
    }
    p {
        width: 75%;
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
