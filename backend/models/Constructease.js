import mongoose from "mongoose";

const ConstructeaseStructure = mongoose.Schema({
    prodID: Number,
    prodName: String,
    prodDesc: String,
    prodPrice: Number,
    prodQuantity: Number
});

const ConstructeaseModel = mongoose.model('ConstructeaseDb',ConstructeaseStructure);

export default ConstructeaseStructure;

