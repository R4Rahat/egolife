import { useEffect } from "react";
import { Package } from "lucide-react";

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
    <div className="mx-auto w-full max-w-7xl">
      {/* Page Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Package size={21} />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-900 md:text-2xl">
                Applications
              </h1>

              <p className="mt-0.5 text-sm text-gray-500">
                Manage downloadable applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Add Application */}
      <section className="rounded-2xl border border-blue-100 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-5 py-4 md:px-6">
          <h2 className="text-base font-semibold text-gray-900">
            Add Application
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Upload and publish a new application.
          </p>
        </div>

        <div className="p-5 md:p-6">
          <AppForm />
        </div>
      </section>

      {/* Application List */}
      <section className="mt-6 rounded-2xl border border-blue-100 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-5 py-4 md:px-6">
          <h2 className="text-base font-semibold text-gray-900">
            Applications
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            View and manage your uploaded applications.
          </p>
        </div>

        <div className="p-5 md:p-6">
          {loading ? (
            <div className="flex min-h-32 items-center justify-center">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600" />
                Loading applications...
              </div>
            </div>
          ) : (
            <AppList />
          )}
        </div>
      </section>
    </div>
  );
}
