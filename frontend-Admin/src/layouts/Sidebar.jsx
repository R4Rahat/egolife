import { NavLink } from "react-router-dom";
import { X, LayoutDashboard, Package, Bell } from "lucide-react";

export default function Sidebar({ open, onClose }) {
  const links = [
    // {
    //   name: "Dashboard",
    //   path: "/admin",
    //   icon: LayoutDashboard,
    // },
    {
      name: "Apps",
      path: "/admin",
      icon: Package,
    },
    {
      name: "Notifications",
      path: "/admin/notifications",
      icon: Bell,
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col  border-r border-blue-100 bg-white transition-transform duration-300 md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-blue-50 px-5">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="logo"
              className="flex h-16 items-center justify-between border-b border-blue-50 px-5 text-blue-400"
            />
          </div>

          {/* Mobile close button */}
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-blue-50 hover:text-blue-600 md:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-5">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Menu
          </p>

          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/admin"}
                onClick={onClose}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={19} strokeWidth={isActive ? 2.2 : 1.8} />

                    <span>{link.name}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="border-t border-blue-50 p-4">
          <div className="rounded-xl bg-blue-50 p-3">
            <p className="text-xs font-medium text-blue-700">Admin account</p>
            <p className="mt-1 text-[11px] text-blue-500">
              Manage your application
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
