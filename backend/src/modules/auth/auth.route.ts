import { Router } from "express";
import {
  register,
  login,
  refresh,
  me,
  logout
} from "./auth.controller.js";

import { authMiddleware } from "../../common/middlewares/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);

router.get("/me", authMiddleware, me);

router.post("/logout", logout);

export default router;