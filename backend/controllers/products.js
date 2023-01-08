import product from "../models/productsSchema.js";
import mongoose from "mongoose";
export const showProducts = async (req, res) => {
    product.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
};

export const getProdbyId = async (request, response) => {
    try {
        const prod = await product.findById(request.params.id);
        response.status(200).json(prod);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

export const products = async (req, res) => {
    const productDetails = req.body;
    console.log("Product details --->", productDetails);

    product.create(productDetails, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
            console.log(err);
        } else {
            res.status(201).send(data);
        }

    });
};

export const deleteProd = async (request, response) => {
    try {
        await product.deleteOne({ _id: request.params.id });
        response.status(201).json("Product deleted Successfully");



    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}
export const editUser = async (request, response) => {
    let user = request.body;

    const editUser = new product(user);
    try {
        await product.updateOne({ _id: request.params.id }, editUser);
        response.status(201).json(editUser);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

