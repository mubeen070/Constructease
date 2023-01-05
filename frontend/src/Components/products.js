import React from "react";
import "../Style/cards.css"
import { useState, useEffect } from "react";
import ItemCard from "./itemcard.js";
import { getproductData } from "../Service/api";
const Products = () => {

  const [productsData, setproductsData] = useState([]);

  useEffect(() => {
    getproductDetails();
  }, []);


  const getproductDetails = async () => {
    const result = await getproductData();
    setproductsData(result.data);
  }
  return (
    <div className="container">
      <h1 className="text-dark">Equipments</h1>

      <div className="row" style={{ padding: "0", margin: "0" }}>
        <div className="col-lg-4 col-sm-12 col-md-6" style={{ padding: "0", margin: "0" }}>
          {productsData.map((item, index) => (
            <ItemCard
              thumb={item.prodImgUrl}
              pname={item.prodName}
              desc={item.prodDesc}
              price={item.prodPrice}
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
