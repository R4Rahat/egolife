import api from "./api";

export const getNotifications = async () => {
  const response = await api.get("/notifications");

  return response.data;
};

export const createNotification = async (formData) => {
  const response = await api.post("/notifications", formData);

  return response.data;
};

export const updateNotification = async (id, data) => {
  const response = await api.put(`/notifications/${id}`, data);

  return response.data;
};

export const deleteNotification = async (id) => {
  const response = await api.delete(`/notifications/${id}`);

  return response.data;
};

export const getNotificationViewUrl = (id) => {
  return `http://localhost:5000/api/notifications/${id}/view`;
};

export const getNotificationDownloadUrl = (id) => {
  return `http://localhost:5000/api/notifications/${id}/download`;
};
