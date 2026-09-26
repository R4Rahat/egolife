import { create } from "zustand";

import {
  getApps,
  createApp,
  updateApp,
  deleteApp,
} from "../services/appService.js";

const useAppStore = create((set) => ({
  apps: [],

  loading: false,
  error: null,

  fetchApps: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const apps = await getApps();

      set({
        apps,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.error || "Failed to load apps",
      });
    }
  },

  addApp: async (formData) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const newApp = await createApp(formData);

      set((state) => ({
        apps: [newApp, ...state.apps],
        loading: false,
      }));

      return newApp;
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.error || "Failed to create app",
      });

      throw error;
    }
  },

  editApp: async (id, data) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const updatedApp = await updateApp(id, data);

      set((state) => ({
        apps: state.apps.map((app) => (app._id === id ? updatedApp : app)),
        loading: false,
      }));

      return updatedApp;
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.error || "Failed to update app",
      });

      throw error;
    }
  },

  removeApp: async (id) => {
    try {
      set({
        loading: true,
        error: null,
      });

      await deleteApp(id);

      set((state) => ({
        apps: state.apps.filter((app) => app._id !== id),
        loading: false,
      }));
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.error || "Failed to delete app",
      });

      throw error;
    }
  },
}));

export default useAppStore;
