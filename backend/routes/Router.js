import express from "express";

import { login, register, current } from "../controllers/userController.js";

const router = express.Router();

// Auth
router.route("/auth/login").post(login);

export default router;
