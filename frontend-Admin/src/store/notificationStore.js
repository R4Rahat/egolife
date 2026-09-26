import { create } from "zustand";

import {
  getNotifications,
  createNotification,
  updateNotification,
  deleteNotification,
} from "../services/notificationService";

const useNotificationStore = create((set) => ({
  notifications: [],

  loading: false,
  error: null,

  fetchNotifications: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const notifications = await getNotifications();

      set({
        notifications,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.error || "Failed to load notifications",
      });
    }
  },

  addNotification: async (formData) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const notification = await createNotification(formData);

      set((state) => ({
        notifications: [notification, ...state.notifications],
        loading: false,
      }));

      return notification;
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.error || "Failed to create notification",
      });

      throw error;
    }
  },

  editNotification: async (id, data) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const updatedNotification = await updateNotification(id, data);

      set((state) => ({
        notifications: state.notifications.map((notification) =>
          notification._id === id ? updatedNotification : notification,
        ),
        loading: false,
      }));

      return updatedNotification;
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.error || "Failed to update notification",
      });

      throw error;
    }
  },

  removeNotification: async (id) => {
    try {
      set({
        loading: true,
        error: null,
      });

      await deleteNotification(id);

      set((state) => ({
        notifications: state.notifications.filter(
          (notification) => notification._id !== id,
        ),
        loading: false,
      }));
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.error || "Failed to delete notification",
      });

      throw error;
    }
  },
}));

export default useNotificationStore;
