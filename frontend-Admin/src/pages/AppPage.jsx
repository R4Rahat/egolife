import { useEffect } from "react";

import useAppStore from "../store/appStore";

import AppForm from "../components/apps/AppForm";
import AppList from "../components/apps/AppList";

export default function AppPage() {
  const fetchApps = useAppStore((state) => state.fetchApps);

  const loading = useAppStore((state) => state.loading);

  const error = useAppStore((state) => state.error);

  useEffect(() => {
    fetchApps();
  }, [fetchApps]);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Applications</h1>

        <p className="text-gray-500">Manage downloadable applications.</p>
      </div>

      {error && (
        <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-700">
          {error}
        </div>
      )}

      <AppForm />

      <div className="mt-8">{loading ? <p>Loading...</p> : <AppList />}</div>
    </div>
  );
}
