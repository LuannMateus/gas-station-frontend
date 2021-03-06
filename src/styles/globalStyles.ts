import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html, body {
    width: 100%;
    height: 100%;

    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;
