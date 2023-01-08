import express from "express";
import { products, showProducts, deleteProd, editUser, getProdbyId } from "../controllers/products.js";
const router = express.Router();

router.post("/", products);
router.get("/", showProducts);
router.get('/:id', getProdbyId);
router.delete("/:id", deleteProd);
router.put("/:id", editUser);
export default router; 