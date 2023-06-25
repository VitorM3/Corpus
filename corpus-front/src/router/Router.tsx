import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../pages/Login/Login";
import RelatorioDiario from "../pages/RelatorioDiario/RelatorioDiario";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/login" replace={true} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/relatoriodiario" element={<RelatorioDiario />} />
    </Route>
  )
);

export default Router;
