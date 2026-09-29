import { Download, Trash2, Package } from "lucide-react";
import useAppStore from "../../store/appStore";

export default function AppCard({ app }) {
  const removeApp = useAppStore((state) => state.removeApp);

  const handleDelete = async () => {
    const confirmed = window.confirm(`Delete ${app.name}?`);

    if (!confirmed) return;

    await removeApp(app._id);
  };

  const API = process.env.API;

  const handleDownload = (id) => {
    window.location.href = `${API}/api/apps/${id}/download`;
  };

  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-4 transition hover:border-blue-100 hover:shadow-md sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* App Information */}
        <div className="flex min-w-0 items-start gap-4">
          {/* Icon */}
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-blue-50 bg-blue-50">
            {app.icon ? (
              <img
                src={`/${app.icon}`}
                alt={app.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-blue-500">
                <Package size={24} />
              </div>
            )}
          </div>

          {/* Details */}
          <div className="min-w-0">
            <h2 className="truncate text-base font-semibold text-gray-900">
              {app.name}
            </h2>

            <p className="mt-0.5 text-sm text-gray-500">
              Version {app.version}
            </p>

            {app.description && (
              <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-600">
                {app.description}
              </p>
            )}

            {app.fileSize && (
              <p className="mt-2 text-xs font-medium text-gray-400">
                {(app.fileSize / 1024 / 1024).toFixed(2)} MB
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 gap-2 border-t border-gray-100 pt-3 sm:border-0 sm:pt-0">
          <button
            onClick={() => handleDownload(app._id)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:flex-none"
          >
            <Download size={16} />
            Download
          </button>

          <button
            onClick={handleDelete}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:flex-none"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
