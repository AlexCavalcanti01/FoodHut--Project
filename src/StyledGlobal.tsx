import { createGlobalStyle } from 'styled-components';

export const StyledGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body, html {
    width: 100vw;
    height: 100vh;
    background: #0D0D0D;

    font-size: 62.5%;
  }
  button {
    border: none;
    cursor: pointer;
  }
`;