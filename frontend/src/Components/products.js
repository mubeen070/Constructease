import React from "react";
import Products from "./data";
import "../Style/cards.css"
import { useState, useEffect } from "react";
import ItemCard from "./itemcard";
import { getproductData } from "../Service/api";
const Products = () => {

  const [productsData, setproductsData] = useState([]);

  useEffect(() => {
    getproductData();
  }, []);


  const getproductData = async () => {
    const result = await getproductData();
    setproductsData(result.data);
  }
  const listItems = productsData.map((item, index) => (
    <div className="col-lg-4 col-sm-12 col-md-6" style={{ padding: "0", margin: "0" }}>
      <ItemCard
        thumb={item.prodImgUrl}
        pname={item.prodName}
        desc={item.prodDest}
        price={item.prodPrice}
        key={index}
        item={item}
      />
    </div>
  ));
  return (
    <div className="container">
      <h1 className="text-dark">Equipments</h1>

      <div className="row" style={{ padding: "0", margin: "0" }}>{listItems}</div>
    </div>
  );
};

export default Products;
