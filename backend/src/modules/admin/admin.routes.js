import express from "express";

import { getAdmins, getAdmin, removeAdmin } from "./admin.controller.js";

const router = express.Router();

router.get("/", getAdmins);
router.get("/:id", getAdmin);
router.delete("/:id", removeAdmin);

export default router;
