import express from "express";
import { about } from "../controllers/about.js";
const router = express.Router();

//requested by customer
router.get("/about", about)

export default router;