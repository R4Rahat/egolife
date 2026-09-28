import { PackageOpen } from "lucide-react";

import useAppStore from "../../store/appStore";
import AppCard from "./AppCard";

export default function AppList() {
  const apps = useAppStore((state) => state.apps);

  if (apps.length === 0) {
    return (
      <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-blue-100 bg-blue-50/30 px-6 text-center">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-500">
          <PackageOpen size={23} />
        </div>

        <h3 className="text-sm font-semibold text-gray-800">
          No applications found
        </h3>

        <p className="mt-1 max-w-sm text-sm text-gray-500">
          Upload your first application to make it available here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {apps.map((app) => (
        <AppCard key={app._id} app={app} />
      ))}
    </div>
  );
}
