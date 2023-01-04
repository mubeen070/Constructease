import express from "express";
import { customerReq } from "../controllers/home.js";
const router = express.Router();

//requested by customer
router.get("/", customerReq)

export default router;