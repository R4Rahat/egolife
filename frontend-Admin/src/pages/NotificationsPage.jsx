import { useEffect } from "react";

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
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage notices and PDF documents.
          </p>
        </div>

        {/* Error */}

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Create */}

        <NotificationForm />

        {/* List */}

        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              Published Notifications
            </h2>

            <span className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-600">
              {loading ? "Loading..." : "Active"}
            </span>
          </div>

          <NotificationList />
        </div>
      </div>
    </div>
  );
}
