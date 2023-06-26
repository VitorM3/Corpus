import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Inter', sans-serif;
  }

  select, input, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  input:placeholder {
    font-family: 'Inter', sans-serif;

  }

  body {
    max-width: 100vw;
    max-height: 100vh;
    font-family: 'Inter', sans-serif;
    background: ${props => props.theme.colors.gray[100]};
  }

  .logo {
    font-family: 'italiana', cursive;
    color: ${props => props.theme.colors.white};
    font-weight: 300;
  }
`;