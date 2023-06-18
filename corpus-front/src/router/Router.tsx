import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../pages/Login/Login";
import RelatorioDiario from "../pages/RelatorioDiario/RelatorioDiario";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path="/" element={<Login/>} />
        <Route path="/relatoriodiario" element={<RelatorioDiario/>} />
    </Route>
  )
)

export default Router;