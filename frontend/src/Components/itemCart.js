import React from "react";
import "../Style/cards.css"
import { useState, useEffect } from "react";
import { getCartData, deleteCartData } from "../Service/api";
const ItemCart = () => {
    const [productsData, setproductsData] = useState([]);

    useEffect(() => {
        getCartDetails();
    }, []);

    const getCartDetails = async () => {
        try {
            const result = await getCartData();
            setproductsData(result.data);
        } catch (error) {
            console.log(error);
        }
    }
    const handleDelete = async (id) => {
        try {
            if (window.confirm("Are you sure?") === true) {
                await deleteCartData(id)
                    .then(() => alert("Product deleted successfully!"));
            }
            getCartDetails();
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="container">
            <h1 className="text-dark">Item Cart</h1>

            <div className="row" style={{ padding: "0", margin: "0" }}>
                <div className="cardPos" >
                    <table className="table">
                        <thead>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Operation</th>
                        </thead>
                        <tbody>
                            {productsData.map((item, index) => (
                                <tr>
                                    <td>{item.prodName}</td>
                                    <td>{item.prodDesc}</td>
                                    <td className="price">{item.prodPrice}
                                        <span>$</span></td>
                                    <td><img src={item.prodImgUrl} alt="Product"></img></td>
                                    <td>
                                        <i class="bi bi-trash" onClick={() => handleDelete(item._id)}>Remove</i>
                                        <i class="bi bi-cart">Procees to Checkout</i>
                                    </td>
                                    

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default ItemCart;
