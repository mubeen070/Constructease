import express from "express";
import { login, showUsers, signup, deleteUsers, getUserById, editUser } from "../controllers/signup.js";
const router = express.Router();
import jwt from 'jsonwebtoken';

var jwtAuth = (req, res, next) => {
    var token = req.headers.authorization;
    jwt.verify(token, 'dpsakdokqwoekqoekq2131dksadjasdaksdjkasjdkasjdkasjdkasjdaksjdaksjdaksjdkas', function (err, decoded) {
        if (err) {
            res.send({ message: "Invalid Token" })
        } else {
            next();
        }
    })
}

router.post("/signup", signup);
router.post("/login", login);
router.get("/", showUsers);
router.get("/:id", getUserById)
router.delete("/signup/:id", deleteUsers);
router.put('/:id', editUser);

export default router;

