import { useEffect } from "react";
import { Bell } from "lucide-react";

import useNotificationStore from "../store/notificationStore";

import NotificationForm from "../components/notifications/NotificationForm";
import NotificationList from "../components/notifications/NotificationList";

export default function NotificationsPage() {
  const fetchNotifications = useNotificationStore(
    (state) => state.fetchNotifications,
  );

  const loading = useNotificationStore((state) => state.loading);
  const error = useNotificationStore((state) => state.error);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Page Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Bell size={21} />
          </div>

          <div>
            <h1 className="text-xl font-semibold text-gray-900 md:text-2xl">
              Notifications
            </h1>

            <p className="mt-0.5 text-sm text-gray-500">
              Manage notices and PDF documents.
            </p>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Create Notification */}
      <section className="rounded-2xl border border-blue-100 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-5 py-4 md:px-6">
          <h2 className="text-base font-semibold text-gray-900">
            Create Notification
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Publish a new notice or upload a PDF document.
          </p>
        </div>

        <div className="p-5 md:p-6">
          <NotificationForm />
        </div>
      </section>

      {/* Notification List */}
      <section className="mt-6 rounded-2xl border border-blue-100 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Published Notifications
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              View and manage published notices.
            </p>
          </div>

          <span
            className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
              loading
                ? "bg-blue-50 text-blue-600"
                : "bg-green-50 text-green-600"
            }`}
          >
            {loading ? "Loading..." : "Active"}
          </span>
        </div>

        <div className="p-5 md:p-6">
          <NotificationList />
        </div>
      </section>
    </div>
  );
}
