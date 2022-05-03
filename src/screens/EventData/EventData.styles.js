import styled from "styled-components";

export const EventsContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    background-color: #fafafa;
`;

export const EventsDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    height: 100%;
    background-color: #fafafa;
    padding: 0 5%;
    h1 {
        position: relative;
        font-size: 2.5rem;
        margin: 3%;
        font-family: "wild_wolf";
    }
    p {
        margin: 3%;
        width: 80%;
        font-size: 1.2rem;
    }
    button {
        padding: 3% 4%;
        margin: 3%;
        border: none;
        font-size: 1.2rem;
    }
`;


export const RulesDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 5rem;
    border: 1px solid #000;
`;

export const AbsoluteDiv = styled.div`
    width: 100%;
    height: 60%;
    margin: 1% 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #000;
    div {
        position: absolute;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 3%;
    }
`;