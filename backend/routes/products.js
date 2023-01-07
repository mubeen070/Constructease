import express from "express";
import { products, showProducts, deleteProd, editUser } from "../controllers/products.js";
const router = express.Router();

router.post("/", products);
router.get("/", showProducts);
router.delete("/:id", deleteProd);
router.put("/:id", editUser);
export default router; 