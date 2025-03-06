import express from "express";
import { registerUser, loginUser, getUser } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", isAuthenticated, logout);
router.get("/getuser", getUser);

export default router;
