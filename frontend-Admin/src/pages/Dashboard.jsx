import { Navigate, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

export default function Dashboard() {
  const admin = useAuthStore((state) => state.admin);
  const logout = useAuthStore((state) => state.logout);

  const navigate = useNavigate();
  const handleClick = () => navigate("/admin/apps");
  const handleClick2 = () => navigate("/admin/notifications");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <header className="bg-white border-b p-4 flex justify-between">
        <h1 className="font-bold">Admin Panel</h1>

        <div className="flex items-center gap-4">
          <span>{admin?.name}</span>

          <button onClick={handleClick}>Apps</button>

          <button onClick={handleClick2}>Notification</button>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </main> */}
    </div>
  );
}
