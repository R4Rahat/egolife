import { Schema, model } from "mongoose";

const notificationSchema = new Schema({
  title: { type: String, required: true },
  fileUrl: { type: String, required: true }, // path to PDF
  description: String,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export default model("Notification", notificationSchema);
