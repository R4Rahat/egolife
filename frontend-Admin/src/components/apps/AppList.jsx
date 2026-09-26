import useAppStore from "../../store/appStore";

import AppCard from "./AppCard";

export default function AppList() {
  const apps = useAppStore((state) => state.apps);

  if (apps.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center">
        <p className="text-gray-500">No applications found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {apps.map((app) => (
        <AppCard key={app._id} app={app} />
      ))}
    </div>
  );
}
