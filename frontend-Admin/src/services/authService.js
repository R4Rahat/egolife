import api from "./api.js";

export const loginAdmin = async (email, password) => {
  const response = await api.post("/admins/login", {
    email,
    password,
  });

  return response.data;
};

export const getCurrentAdmin = async () => {
  const response = await api.get("/admins/me");

  return response.data;
};

export const logoutAdmin = async () => {
  const response = await api.post("/admins/logout");

  return response.data;
};