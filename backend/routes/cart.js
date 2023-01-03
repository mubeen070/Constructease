import express from "express";
import { cart } from "../controllers/cart.js";
const router = express.Router();

//requested by customer
router.get("/cart", cart)

export default router;