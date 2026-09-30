import { create } from "zustand";
import axios from "axios";
import { defaultNotifications } from "../data/notificationsData";

/**
 * Base API endpoint for Notification routes
 * Express setup: app.use('/api/notifications', notificationRoutes)
 */
const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_NOTIFICATIONS_API_URL;
  if (envUrl && envUrl.trim() !== "" && !envUrl.includes("jsonplaceholder")) {
    return envUrl;
  }
  const backendBase = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  return `${backendBase}/api/notifications`;
};

/**
 * Maps raw backend mongoose schema data to standard notification object:
 * Schema fields:
 *  - _id: String (mongoose object id)
 *  - title: String (required)
 *  - fileUrl: String (required - path to PDF)
 *  - description: String
 *  - isActive: Boolean (default: true)
 *  - createdAt: Date (default: Date.now)
 */
const normalizeNotification = (item, idx = 0) => {
  const id = item._id || item.id || `notif-${idx + 1}`;
  const fileUrl = item.fileUrl || item.attachmentUrl || "";

  return {
    _id: id,
    id: String(id),
    title: item.title || `Notification #${idx + 1}`,
    fileUrl: fileUrl,
    description: item.description || item.summary || item.content || "",
    isActive: item.isActive !== undefined ? Boolean(item.isActive) : true,
    createdAt: item.createdAt || item.date || new Date().toISOString(),
  };
};

export const useNotificationStore = create((set, get) => ({
  notifications: [],
  currentNotification: null,
  loading: false,
  error: null,
  dataSource: "local", // 'api' | 'local'

  /**
   * Route: GET /api/notifications
   * Description: Get list of all notifications from backend DB
   */
  fetchNotifications: async () => {
    set({ loading: true, error: null });
    try {
      const url = getApiUrl();
      const response = await axios.get(url, { withCredentials: true });
      const rawData = Array.isArray(response.data)
        ? response.data
        : response.data?.data || response.data?.notifications || [];

      if (rawData && rawData.length > 0) {
        const formatted = rawData.map((item, index) => normalizeNotification(item, index));
        set({ notifications: formatted, dataSource: "api", loading: false });
        return { success: true, data: formatted, source: "api" };
      } else {
        const fallback = defaultNotifications.map((item, index) => normalizeNotification(item, index));
        set({ notifications: fallback, dataSource: "local", loading: false });
        return { success: true, data: fallback, source: "local" };
      }
    } catch (err) {
      console.warn("API Call GET /api/notifications failed. Falling back to default notifications:", err.message);
      const fallback = defaultNotifications.map((item, index) => normalizeNotification(item, index));
      set({
        notifications: fallback,
        dataSource: "local",
        error: err.response?.data?.message || err.message,
        loading: false,
      });
      return { success: false, data: fallback, source: "local", error: err.message };
    }
  },

  /**
   * Route: GET /api/notifications/:id/view
   * Description: Fetch single notification details by ID for viewing
   */
  fetchNotificationById: async (id) => {
    set({ loading: true, error: null });
    try {
      const url = getApiUrl();
      const response = await axios.get(`${url}/${id}/view`, { withCredentials: true });
      const rawData = response.data?.data || response.data;
      const formatted = normalizeNotification(rawData);
      set({ currentNotification: formatted, dataSource: "api", loading: false });
      return { success: true, data: formatted, source: "api" };
    } catch (err) {
      console.warn(`API Call GET /api/notifications/${id}/view failed. Falling back to local data search:`, err.message);
      const existingList = get().notifications.length > 0 ? get().notifications : defaultNotifications.map(normalizeNotification);
      const found = existingList.find((n) => String(n.id) === String(id) || String(n._id) === String(id));

      if (found) {
        set({ currentNotification: found, dataSource: "local", loading: false });
        return { success: true, data: found, source: "local" };
      }

      set({
        error: err.response?.data?.message || `Notification with ID ${id} not found.`,
        loading: false,
      });
      return { success: false, error: err.message };
    }
  },

  /**
   * Route: GET /api/notifications/:id/download
   * Description: Download PDF attachment for notification by ID
   */
  downloadNotification: async (id) => {
    try {
      const url = getApiUrl();
      const downloadUrl = `${url}/${id}/download`;
      window.open(downloadUrl, "_blank");
      return { success: true };
    } catch (err) {
      console.error(`API Call GET /api/notifications/${id}/download failed:`, err);
      set({ error: err.message });
      return { success: false, error: err.message };
    }
  },

  /**
   * Route: POST /api/notifications
   * Middleware: requireAdmin, upload.uploadNotification.single("pdf")
   * Schema: { title: String, fileUrl: String (via pdf file), description: String, isActive: Boolean }
   */
  createNotification: async (formDataOrObject) => {
    set({ loading: true, error: null });
    try {
      const url = getApiUrl();
      let payload = formDataOrObject;
      let headers = {};

      if (!(formDataOrObject instanceof FormData)) {
        const fd = new FormData();
        if (formDataOrObject.title) fd.append("title", formDataOrObject.title);
        if (formDataOrObject.description) fd.append("description", formDataOrObject.description);
        if (formDataOrObject.isActive !== undefined) fd.append("isActive", String(formDataOrObject.isActive));
        if (formDataOrObject.pdf) fd.append("pdf", formDataOrObject.pdf);
        if (formDataOrObject.fileUrl) fd.append("fileUrl", formDataOrObject.fileUrl);
        payload = fd;
        headers = { "Content-Type": "multipart/form-data" };
      }

      const response = await axios.post(url, payload, {
        withCredentials: true,
        headers,
      });

      const newNotif = normalizeNotification(response.data?.data || response.data);
      set((state) => ({
        notifications: [newNotif, ...state.notifications],
        loading: false,
      }));
      return { success: true, data: newNotif };
    } catch (err) {
      console.error("API Call POST /api/notifications failed:", err);
      const msg = err.response?.data?.message || err.message;
      set({ error: msg, loading: false });
      return { success: false, error: msg };
    }
  },

  /**
   * Route: PUT /api/notifications/:id
   * Middleware: requireAdmin
   * Description: Update notification by ID
   */
  updateNotification: async (id, updateData) => {
    set({ loading: true, error: null });
    try {
      const url = getApiUrl();
      const response = await axios.put(`${url}/${id}`, updateData, { withCredentials: true });
      const updatedNotif = normalizeNotification(response.data?.data || response.data);

      set((state) => ({
        notifications: state.notifications.map((n) =>
          String(n.id) === String(id) || String(n._id) === String(id) ? updatedNotif : n
        ),
        currentNotification:
          state.currentNotification &&
          (String(state.currentNotification.id) === String(id) || String(state.currentNotification._id) === String(id))
            ? updatedNotif
            : state.currentNotification,
        loading: false,
      }));
      return { success: true, data: updatedNotif };
    } catch (err) {
      console.error(`API Call PUT /api/notifications/${id} failed:`, err);
      const msg = err.response?.data?.message || err.message;
      set({ error: msg, loading: false });
      return { success: false, error: msg };
    }
  },

  /**
   * Route: DELETE /api/notifications/:id
   * Middleware: requireAdmin
   * Description: Delete notification by ID
   */
  deleteNotification: async (id) => {
    set({ loading: true, error: null });
    try {
      const url = getApiUrl();
      await axios.delete(`${url}/${id}`, { withCredentials: true });

      set((state) => ({
        notifications: state.notifications.filter(
          (n) => String(n.id) !== String(id) && String(n._id) !== String(id)
        ),
        currentNotification:
          state.currentNotification &&
          (String(state.currentNotification.id) === String(id) || String(state.currentNotification._id) === String(id))
            ? null
            : state.currentNotification,
        loading: false,
      }));
      return { success: true };
    } catch (err) {
      console.error(`API Call DELETE /api/notifications/${id} failed:`, err);
      const msg = err.response?.data?.message || err.message;
      set({ error: msg, loading: false });
      return { success: false, error: msg };
    }
  },

  clearError: () => set({ error: null }),
  resetCurrentNotification: () => set({ currentNotification: null }),
  getViewUrl: (id) => `${getApiUrl()}/${id}/view`,
}));
