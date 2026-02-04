import express from "express";
import auth from "../middlewares/auth.middleware.js";
import { getProfile, updateProfile } from "../controllers/user.controller.js";
import { updateProfileValidator } from "../validators/user.validator.js";

const router = express.Router();

// Protect all user routes
router.use(auth);

router.get("/me", getProfile);
router.put("/me", updateProfileValidator, updateProfile);

export default router;
