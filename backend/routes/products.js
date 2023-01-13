import express from "express";

import { products, showProducts, deleteProd, editProd, getProdbyId } from "../controllers/products.js";
const router = express.Router();

//products
router.post("/", products);
router.get("/", showProducts);
router.get('/:id', getProdbyId);
router.delete("/:id", deleteProd);
router.put("/:id", editProd);


export default router;