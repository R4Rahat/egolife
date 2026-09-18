import express from "express";
import { getMe, login, logout } from "./auth.controller.js";
import { requireAdmin } from "../../middleware/auth.middleware.js";



const router = express.Router();

// Public
router.post("/login", login);

// Protected
router.post("/logout", requireAdmin, logout);

router.get("/me", requireAdmin, getMe);



export default router;
