import useAppStore from "../../store/appStore";
import { getDownloadUrl } from "../../services/appService";

export default function AppCard({ app }) {
  const removeApp = useAppStore((state) => state.removeApp);

  const handleDelete = async () => {
    const confirmed = window.confirm(`Delete ${app.name}?`);

    if (!confirmed) return;

    await removeApp(app._id);
  };

  const handleDownload = async (id) => {
    window.location.href = `http://localhost:5000/api/apps/${id}/download`;
  }

  return (
    <div className="flex items-center justify-between rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        {app.icon ? (
          <img
            src={`/${app.icon}`}
            alt={app.name}
            className="h-14 w-14 rounded-lg object-cover"
          />
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-200">
            📦
          </div>
        )}

        <div>
          <h2 className="font-semibold">{app.name}</h2>

          <p className="text-sm text-gray-500">Version {app.version}</p>

          {app.description && (
            <p className="mt-1 text-sm text-gray-600">{app.description}</p>
          )}

          {app.fileSize && (
            <p className="mt-1 text-xs text-gray-400">
              {(app.fileSize / 1024 / 1024).toFixed(2)} MB
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        {/* <a
          href={getDownloadUrl(app._id)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white"
        >
          Download
        </a> */}
        <button onClick={() => handleDownload(app._id)}>
            Download
        </button>

        <button
          onClick={handleDelete}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
