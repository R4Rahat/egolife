import api from './api';

export const getApps = async () => {
  const response = await api.get("/apps");

  return response.data;
};

export const createApp = async (formData) => {
  const response = await api.post("/apps", formData);

  return response.data;
};

export const updateApp = async (id, data) => {
  const response = await api.put(`/apps/${id}`, data);

  return response.data;
};

export const deleteApp = async (id) => {
  const response = await api.delete(`/apps/${id}`);

  return response.data;
};

export const getDownloadUrl = (id) => {
  return `/api/apps/${id}/download`;
};
