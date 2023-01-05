import express from "express";
import { products,showProducts } from "../controllers/products.js";
const router = express.Router();

router.post("/", products);
router.get("/", showProducts);

export default router; 