import { create } from "zustand";
import axios from "axios";
import { defaultApps } from "../data/appsData";

/**
 * Base API endpoint for App routes
 * Express setup: app.use('/api/apps', appsRoutes)
 */
const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_APPS_API_URL;
  if (envUrl && envUrl.trim() !== "" && !envUrl.includes("jsonplaceholder")) {
    return envUrl;
  }
  const backendBase = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  return `${backendBase}/api/apps`;
};

/**
 * Maps raw backend mongoose schema data to standard App object:
 * Schema fields:
 *  - _id: String (mongoose object id)
 *  - name: String (required)
 *  - version: String (required)
 *  - description: String
 *  - iconUrl: String (optional path to icon image)
 *  - fileUrl: String (required path to APK/EXE)
 *  - isActive: Boolean (default: true)
 *  - createdAt: Date (default: Date.now)
 */
const normalizeApp = (item, idx = 0) => {
  const id = item._id || item.id || `app-${idx + 1}`;
  return {
    _id: id,
    id: String(id),
    name: item.name || `Application #${idx + 1}`,
    version: item.version || `v1.0.${idx}`,
    description: item.description || "Official application package hosted on server.",
    iconUrl: item.iconUrl || "",
    fileUrl: item.fileUrl || item.downloadUrl || "",
    isActive: item.isActive !== undefined ? Boolean(item.isActive) : true,
    createdAt: item.createdAt || new Date().toISOString(),
  };
};

export const useAppStore = create((set, get) => ({
  apps: [],
  currentApp: null,
  loading: false,
  error: null,
  dataSource: "local", // 'api' | 'local'

  /**
   * Route: GET /api/apps
   * Description: Fetch list of all apps from backend DB
   */
  fetchApps: async () => {
    set({ loading: true, error: null });
    try {
      const url = getApiUrl();
      const response = await axios.get(url, { withCredentials: true });
      const rawData = Array.isArray(response.data)
        ? response.data
        : response.data?.data || response.data?.apps || [];

      if (rawData && rawData.length > 0) {
        const formatted = rawData.map((item, index) => normalizeApp(item, index));
        set({ apps: formatted, dataSource: "api", loading: false });
        return { success: true, data: formatted, source: "api" };
      } else {
        const fallback = defaultApps.map((item, index) => normalizeApp(item, index));
        set({ apps: fallback, dataSource: "local", loading: false });
        return { success: true, data: fallback, source: "local" };
      }
    } catch (err) {
      console.warn("API Call GET /api/apps failed. Falling back to default apps:", err.message);
      const fallback = defaultApps.map((item, index) => normalizeApp(item, index));
      set({
        apps: fallback,
        dataSource: "local",
        error: err.response?.data?.message || err.message,
        loading: false,
      });
      return { success: false, data: fallback, source: "local", error: err.message };
    }
  },

  /**
   * Route: GET /api/apps/:id/download
   * Description: Download app binary (APK/EXE) by ID
   */
  downloadApp: async (id) => {
    try {
      const url = getApiUrl();
      const downloadUrl = `${url}/${id}/download`;
      window.open(downloadUrl, "_blank");
      return { success: true };
    } catch (err) {
      console.error(`API Call GET /api/apps/${id}/download failed:`, err);
      set({ error: err.message });
      return { success: false, error: err.message };
    }
  },

  /**
   * Route: POST /api/apps
   * Middleware: requireAdmin, upload.uploadApp.fields([{ name: "appFile" }, { name: "icon" }])
   * Schema: { name, version, description, iconUrl, fileUrl, isActive }
   */
  createApp: async (formDataOrObject) => {
    set({ loading: true, error: null });
    try {
      const url = getApiUrl();
      let payload = formDataOrObject;
      let headers = {};

      if (!(formDataOrObject instanceof FormData)) {
        const fd = new FormData();
        if (formDataOrObject.name) fd.append("name", formDataOrObject.name);
        if (formDataOrObject.version) fd.append("version", formDataOrObject.version);
        if (formDataOrObject.description) fd.append("description", formDataOrObject.description);
        if (formDataOrObject.isActive !== undefined) fd.append("isActive", String(formDataOrObject.isActive));
        if (formDataOrObject.appFile) fd.append("appFile", formDataOrObject.appFile);
        if (formDataOrObject.icon) fd.append("icon", formDataOrObject.icon);
        if (formDataOrObject.fileUrl) fd.append("fileUrl", formDataOrObject.fileUrl);
        if (formDataOrObject.iconUrl) fd.append("iconUrl", formDataOrObject.iconUrl);
        payload = fd;
        headers = { "Content-Type": "multipart/form-data" };
      }

      const response = await axios.post(url, payload, {
        withCredentials: true,
        headers,
      });

      const newApp = normalizeApp(response.data?.data || response.data);
      set((state) => ({
        apps: [newApp, ...state.apps],
        loading: false,
      }));
      return { success: true, data: newApp };
    } catch (err) {
      console.error("API Call POST /api/apps failed:", err);
      const msg = err.response?.data?.message || err.message;
      set({ error: msg, loading: false });
      return { success: false, error: msg };
    }
  },

  /**
   * Route: PUT /api/apps/:id
   * Middleware: requireAdmin
   * Description: Update app by ID
   */
  updateApp: async (id, updateData) => {
    set({ loading: true, error: null });
    try {
      const url = getApiUrl();
      const response = await axios.put(`${url}/${id}`, updateData, { withCredentials: true });
      const updatedApp = normalizeApp(response.data?.data || response.data);

      set((state) => ({
        apps: state.apps.map((a) => (String(a.id) === String(id) || String(a._id) === String(id) ? updatedApp : a)),
        loading: false,
      }));
      return { success: true, data: updatedApp };
    } catch (err) {
      console.error(`API Call PUT /api/apps/${id} failed:`, err);
      const msg = err.response?.data?.message || err.message;
      set({ error: msg, loading: false });
      return { success: false, error: msg };
    }
  },

  /**
   * Route: DELETE /api/apps/:id
   * Middleware: requireAdmin
   * Description: Delete app by ID
   */
  deleteApp: async (id) => {
    set({ loading: true, error: null });
    try {
      const url = getApiUrl();
      await axios.delete(`${url}/${id}`, { withCredentials: true });

      set((state) => ({
        apps: state.apps.filter((a) => String(a.id) !== String(id) && String(a._id) !== String(id)),
        loading: false,
      }));
      return { success: true };
    } catch (err) {
      console.error(`API Call DELETE /api/apps/${id} failed:`, err);
      const msg = err.response?.data?.message || err.message;
      set({ error: msg, loading: false });
      return { success: false, error: msg };
    }
  },

  clearError: () => set({ error: null }),
}));
