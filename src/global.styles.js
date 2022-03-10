import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';
		color: #ffffff;
	}
	a {
		text-decoration: none;
		color: black;
	}
	*, *::before, *::after {
        box-sizing: border-box;
      }
   

`;