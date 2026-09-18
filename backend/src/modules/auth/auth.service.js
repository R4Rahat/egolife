import bcrypt from "bcrypt";
import Admin from "../admin/admin.model.js";

export const loginAdmin = async (email, password) => {
  const admin = await Admin.findOne({
    email: email,
    isActive: true,
  }).select("+password");

  if (!admin) return null;

  const passwordMatch = await bcrypt.compare(password, admin.password);

  if (!passwordMatch) return null;

  return admin;
};

export const getAdminById = async (id) => {
  return await Admin.findById(id).select("-password");
};