import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoutes";
import AppPage from "../pages/AppPage";



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/apps" element={<AppPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
