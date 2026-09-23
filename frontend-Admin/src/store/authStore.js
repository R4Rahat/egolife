import {create} from 'zustand';
import { getCurrentAdmin, loginAdmin, logoutAdmin } from '../services/authService.js';


const useAuthStore = create((set) => ({
  admin: null,
  isAuthenticated: false,
  isLoading: true,

  login: async (email, password) => {
    try {
      const data = await loginAdmin(email, password);

      set({
        admin: data.data,
        isAuthenticated: true,
      });
    } catch (error) {
      console.error("error",error);
    }
  },

  checkAuth: async () => {
    try {
      const data = await getCurrentAdmin();

      set({
        admin: data.admin,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        admin: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  },

  logout: async () => {
    try {
      await logoutAdmin();
    } finally {
      set({
        admin: null,
        isAuthenticated: false,
      });
    }
  },
}));

export default useAuthStore