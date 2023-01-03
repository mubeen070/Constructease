import express from "express";
import { login } from "../controllers/login.js";
const router = express.Router();

//requested by customer
router.get("/login", login)

export default router;