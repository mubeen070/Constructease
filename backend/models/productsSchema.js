import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    prodName: String,
    prodDesc: String,
    prodPrice: Number,
    prodImgUrl: String,
});

const product = mongoose.model('Product', productSchema);
export default product;