import express from "express";
import { createApp, deleteApp, downloadApp, getApps, updateApp } from "./apps.controller.js";
import { requireAdmin } from "../../middleware/auth.middleware.js";
import upload from "../../middleware/upload.js"



const router = express.Router();

router.get("/", getApps);

router.get("/:id/download", downloadApp);

router.post(
  "/",
  requireAdmin,
  upload.uploadApp.fields([{ name: "appFile" }, { name: "icon" }]),
  createApp,
);

router.put("/:id", requireAdmin, updateApp);

router.delete("/:id", requireAdmin, deleteApp);

export default router;
