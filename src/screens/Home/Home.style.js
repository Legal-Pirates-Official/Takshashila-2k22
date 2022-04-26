import styled from "styled-components";

export const HomeContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #fafafa;
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 50%;
        margin: 2% 0;
        height: 5rem;
        a {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 2% 3%;
            text-decoration: none;
            color: #fff;
            background: rgba(0, 0, 0, 1);
        }
    }
`;

export const SideBar = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 1;
    background: #136B40;
`;

export const SideDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 15rem;
    }
`;
