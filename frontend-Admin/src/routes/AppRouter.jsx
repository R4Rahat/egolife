import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoutes";
import AppPage from "../pages/AppPage";
import NotificationsPage from "../pages/NotificationsPage";
import AdminLayout from "../layouts/AdminLayout";



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
         <Route element={<AdminLayout />}>
          {/* <Route path="/admin" element={<Dashboard />} /> */}
          <Route path="/admin" element={<AppPage />} />
          <Route path="/admin/notifications" element={<NotificationsPage />} />
         </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
