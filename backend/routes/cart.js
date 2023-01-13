import express from "express";
import { postCartProducts, showCart, deleteCartProd, getcartProdbyId } from "../controllers/cart.js";
const router = express.Router();


router.post("/", postCartProducts);
router.get("/", showCart);
router.get('/:id', getcartProdbyId);
router.delete("/:id", deleteCartProd);


export default router;