import express from "express";
import { customerReq } from "../controllers/home.js";
const router = express.Router();

//requested by customer
router.get("/home", customerReq)

export default router;