import useNotificationStore from "../../store/notificationStore";

import {
  getNotificationViewUrl,
  getNotificationDownloadUrl,
} from "../../services/notificationService";

export default function NotificationCard({ notification }) {
  const removeNotification = useNotificationStore(
    (state) => state.removeNotification,
  );

  const handleDelete = async () => {
    const confirmed = window.confirm(`Delete "${notification.title}"?`);

    if (!confirmed) return;

    try {
      await removeNotification(notification._id);
    } catch (error) {
      console.error(error);
    }
  };

  const formattedDate = new Date(notification.createdAt).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        {/* Information */}

        <div className="flex min-w-0 gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-xl">
            📄
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="truncate font-semibold text-slate-900">
                {notification.title}
              </h3>

              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                Active
              </span>
            </div>

            {notification.description && (
              <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                {notification.description}
              </p>
            )}

            <p className="mt-2 text-xs text-slate-400">
              Published {formattedDate}
            </p>
          </div>
        </div>

        {/* Actions */}

        <div className="flex shrink-0 gap-2">
          <a
            href={getNotificationViewUrl(notification._id)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            View
          </a>

          <a
            href={getNotificationDownloadUrl(notification._id)}
            className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Download
          </a>

          <button
            onClick={handleDelete}
            className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
