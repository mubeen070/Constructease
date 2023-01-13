import cart from "../models/cartSchema.js";

export const showCart = async (req, res) => {
    cart.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
};

export const getcartProdbyId = async (request, response) => {
    try {
        const prod = await cart.findById(request.params.id);
        response.status(200).json(prod);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

export const postCartProducts = async (req, res) => {
    try {
        const cartproductDetails = req.body;
        const data = new cart(cartproductDetails);
        await data.save();
        res.status(200).json({ message: "Success" })
    } catch (error) {
        res.send(error.message)
    }
};

export const deleteCartProd = async (request, response) => {
    try {
        await cart.deleteOne({ _id: request.params.id });
        response.status(201).json("Product deleted Successfully");
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}
