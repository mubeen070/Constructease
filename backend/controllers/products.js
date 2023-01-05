import product from "../models/productsSchema.js";


export const showProducts = async (req, res) => {
    try {
        console.log("api reached!")
        const viewProducts = await product.find();
        res.json(viewProducts); 
    } catch (error) {
        res.send("Not found")
    }
}
export const products = async (req, res) => {
    console.log("post api reached")
    const result = req.body;

    const prodName = req.body.prodName;
    const prodNameTostring = prodName.toString();

    const prodDesc = req.body.prodDesc;
    const prodDescTostring = prodDesc.toString();

    const prodPrice = req.body.prodPrice;
    const prodPriceTostring = prodPrice.toString();


    const prodImgUrl = req.body.prodImgUrl;
    const prodImgUrlTostring = prodImgUrl.toString();


    const newProduct = new product({
        prodName: prodNameTostring,
        prodDesc: prodDescTostring,
        prodPrice: prodPriceTostring,
        prodImgUrl: prodImgUrlTostring
    });

    const productExist = await product.findOne({ prodName: prodName });
    if (productExist) {
        res.status(422).json({ error: "Product Already found" });
    }
    else {
        try {
            await newProduct.save();
            res.json(newProduct);

        } catch (error) {
            res.send("Error registering new user!");

        }

    }
}
 