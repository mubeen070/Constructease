import express from "express";
import { customerReq, adminReq } from "../controllers/equipment.js";
const router = express.Router();

//requested by customer
router.get("/customer", customerReq)

//requested by admin
router.get("/admin", adminReq)

export default router;