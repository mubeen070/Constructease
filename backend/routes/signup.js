import express from "express";
import { showUsers, signup } from "../controllers/signup.js";
const router = express.Router();


router.post("/", signup);
router.get("/", showUsers);

export default router;