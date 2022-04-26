import {createGlobalStyle} from "styled-components";
import Wild_Wolf from "./assets/fonts/Wild_Wolf.ttf";

export const GlobalStyles = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing:border-box;
		scroll-behavior: smooth;
	}

	@font-face {
		font-family: 'wild_wolf';
		src: url(${Wild_Wolf});
	}

	body{
		overflow-x: hidden;
	}
`;
