import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    {
      name: "Dashboard",
      path: "/admin",
    },
    {
      name: "Apps",
      path: "/admin/apps",
    },
    {
      name: "Notifications",
      path: "/admin/notifications",
    },
  ];

  return (
    <aside className="w-64 shrink-0 bg-gray-900 text-white">
      <div className="flex h-16 items-center px-6 text-xl font-bold">
        Admin Panel
      </div>

      <nav className="mt-4 space-y-1 px-3">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/admin"}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 text-sm transition ${
                isActive
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
