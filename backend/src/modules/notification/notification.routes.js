import { createNotification, deleteNotification, downloadNotification, getNotifications, updateNotification, viewNotification } from "./notification.controller.js";
import upload from '../../middleware/upload.js';
import { requireAdmin } from "../../middleware/auth.middleware.js";
import express from "express";

const router = express.Router();


router.get("/", getNotifications);
router.get("/:id/view", viewNotification);
router.get("/:id/download", downloadNotification);

router.post(
  "/",
  requireAdmin,
  upload.uploadNotification.single("pdf"),
  createNotification,
);
router.put("/:id", requireAdmin, updateNotification);
router.delete("/:id", requireAdmin, deleteNotification);

export default router;
