import { FileText } from "lucide-react";

import useNotificationStore from "../../store/notificationStore";
import NotificationCard from "./NotificationCard";

export default function NotificationList() {
  const notifications = useNotificationStore((state) => state.notifications);

  if (notifications.length === 0) {
    return (
      <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-blue-100 bg-blue-50/30 px-6 text-center">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-500">
          <FileText size={23} />
        </div>

        <h3 className="text-sm font-semibold text-gray-800">
          No notifications
        </h3>

        <p className="mt-1 max-w-sm text-sm text-gray-500">
          Create your first notification to publish a notice or document.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {notifications.map((notification) => (
        <NotificationCard key={notification._id} notification={notification} />
      ))}
    </div>
  );
}
