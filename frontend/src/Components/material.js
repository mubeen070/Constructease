import React from "react";
import Mats from "./mats";
import ItemCard from "./itemcard";
const MaterialRow = () => {
  const listItems = Mats.map((item,index) => (
    <div className="col-lg-4 col-sm-12 col-md-6" style={{padding:"0", margin:"0"}}>
    <ItemCard thumb={item.thumb} pname={item.pname} desc={item.desc} price={item.price} currency={item.currency} key={index} item={item}/>
    </div>
  ));
  return (
    <>
      <div className="container">
      <h1 className="text-dark">Material</h1>

      <div className="row" style={{padding:"0", margin:"0"}}>{listItems}</div>
    </div>
    </>
  );
};

export default MaterialRow;
