import { FileText, Eye, Download, Trash2 } from "lucide-react";

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
    <div className="group rounded-2xl border border-gray-100 bg-white p-4 transition hover:border-blue-100 hover:shadow-md sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Information */}
        <div className="flex min-w-0 items-start gap-4">
          {/* Icon */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FileText size={21} />
          </div>

          {/* Details */}
          <div className="min-w-0">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <h3 className="max-w-full truncate text-sm font-semibold text-gray-900 sm:text-base">
                {notification.title}
              </h3>

              <span className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-600">
                Active
              </span>
            </div>

            {notification.description && (
              <p className="mt-1 line-clamp-2 text-sm leading-5 text-gray-500">
                {notification.description}
              </p>
            )}

            <p className="mt-2 text-xs text-gray-400">
              Published {formattedDate}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 gap-2 border-t border-gray-100 pt-3 sm:border-0 sm:pt-0">
          <a
            href={getNotificationViewUrl(notification._id)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 sm:flex-none"
          >
            <Eye size={16} />
            <span>View</span>
          </a>

          <a
            href={getNotificationDownloadUrl(notification._id)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 sm:flex-none"
          >
            <Download size={16} />
            <span>Download</span>
          </a>

          <button
            onClick={handleDelete}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-100 sm:flex-none"
          >
            <Trash2 size={16} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
