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
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    background: url(${require("../../assets/backgrounds/Day_Events.png")})
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

    @media (max-width: 400px) {
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
        /* list-style-type: none; */
        list-style-image: url("https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/ffd365/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-12.png");
    }
    li {
        margin: 1% 0;
    }
    /* ul li:before {
        position: absolute;
        content: "✓";
    } */
    @media (max-width: 400px) {
        div {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p {
                margin-top: 5%;
            }
        }
        width: 95%;
    }
`;

export const EventsTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: rgb(194, 96, 34);
    background: #ffd365;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 25px;
    margin: 5% 0;
    @media (max-width: 400px) {
        width: 75%;
        align-self: center;
    }
`;

export const EventsAtag = styled.a`
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(194, 96, 34);
    background: #ffd365;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 25px;
    margin: 5% 0;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
        cursor: pointer;
        background: rgb(194, 96, 34);
        color: #ffd365;
    }
    @media (max-width: 400px) {
        width: 55%;
        margin: 5% 0;
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
