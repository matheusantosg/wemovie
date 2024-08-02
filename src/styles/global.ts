import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  :root {
    --bg-navy: #2F2E41;
    --blue: #009EDD;
    --black: #333333;
    --white: #FFFFFF;
    --green: #039B00;
    --title:#999999;
    --border: #D9D9D9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--bg-navy);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`