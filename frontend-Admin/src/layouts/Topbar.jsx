import { Menu, Bell, ChevronDown } from "lucide-react";
import useAuthStore from "../store/authStore";

export default function Topbar({ onMenuClick }) {
    const logout = useAuthStore((state) => state.logout);
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-blue-100 bg-white/95 px-4 backdrop-blur md:px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="rounded-xl p-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 md:hidden"
        >
          <Menu size={22} />
        </button>

        {/* <div>
          <h1 className="text-base font-semibold text-gray-900 md:text-lg">
            Admin Dashboard
          </h1>

          <p className="hidden text-xs text-gray-400 sm:block">
            Manage your application
          </p>
        </div> */}
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Notification */}
        <button className="relative rounded-xl p-2 text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
          <Bell size={20} />

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white" />
        </button>

        {/* Divider */}
        <div className="hidden h-7 w-px bg-gray-200 sm:block" />

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

        <div className="hidden h-7 w-px bg-gray-200 sm:block" />

        {/* Profile */}
        <button className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-gray-50">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            A
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium text-gray-800">Admin</p>
            <p className="text-[11px] text-gray-400">Administrator</p>
          </div>

          <ChevronDown size={16} className="hidden text-gray-400 sm:block" />
        </button>
      </div>
    </header>
  );
}
