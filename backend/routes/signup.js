import express from "express";
import { signup } from "../controllers/signup.js";
const router = express.Router();

//requested by customer
router.post("/", signup);

export default router;