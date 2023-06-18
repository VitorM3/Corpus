import Router from "./router/Router";
import { RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    src: local('Inter Regular'), local('Inter-Regular'),
         url('./Inter-Regular.woff') format('woff'); /* Caminho para o arquivo de fonte baixado */
    /* Repita o mesmo bloco @font-face para outras variações da fonte, como 'font-weight: 500', 'font-weight: 700', etc. */
  }

  /* Estilo global */
  body {
    max-width: 100vw;
    max-height: 100vh;
    font-family: 'Inter', sans-serif; /* Use o nome da fonte definido no @font-face */
    /* Outros estilos de fonte, tamanho, etc. */
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
