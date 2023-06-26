import Router from "./router/Router";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import dark from "./styles/theme/dark";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}

export default App;
