import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../pages/Login";
import RelatorioDiario from "../pages/RelatorioDiario";
import Consultas from "../pages/Consultas";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/login" replace={true} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/relatoriodiario" element={<RelatorioDiario />} />
      <Route path="/consultas" element={<Consultas />} />
    </Route>
  )
);

export default Router;
