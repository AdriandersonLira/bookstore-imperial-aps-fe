import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
    --color-background: #70c6e5;
    --color-background-secundary: #d2e4ed;
    --color-text-title: #ffffff;
    --color-button-primary: #B6DBEC;
    --color-button-primary-light: #CDE8F4;
    --color-button-secundary: #43619c;
    --color-button-secundary-light: #39568F;
    --color-text-primary: #2a2b61;
    --color-text-secundary: #B6DBEC;
    --color-text-base: #000000;
    --color-text-in-primary: #727376;
    --color-text-in-secundary: #96989A;
    --color-button: #2a2b61;
    --color-text-secundary-footer: #848688;
    --color-text-input: #43619c;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--color-background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, select {
    font: 400 1.6rem Poppins, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button, a {
    cursor: pointer;
  }
`;