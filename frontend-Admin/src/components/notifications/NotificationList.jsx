import useNotificationStore from "../../store/notificationStore";

import NotificationCard from "./NotificationCard";

export default function NotificationList() {
  const notifications = useNotificationStore((state) => state.notifications);

  if (notifications.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl">
          📄
        </div>

        <h3 className="font-medium text-slate-900">No notifications</h3>

        <p className="mt-1 text-sm text-slate-500">
          Create your first notification above.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {notifications.map((notification) => (
        <NotificationCard key={notification._id} notification={notification} />
      ))}
    </div>
  );
}
