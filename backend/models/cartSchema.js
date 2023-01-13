import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    prodName: String,
    prodDesc: String,
    prodPrice: Number,
    prodImgUrl: String,
});

const cart = mongoose.model('Cartproduct', cartSchema);
export default cart;