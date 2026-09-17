import Admin from "./admin.model.js";

export const getAllAdmins = async () => {
  return await Admin.find().select("-password");
};

export const getAdminById = async (id) => {
  return await Admin.findById(id).select("-password");
};

export const deleteAdmin = async (id) => {
  return await Admin.findByIdAndDelete(id);
};
