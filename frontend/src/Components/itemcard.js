import React from "react";
import "../Style/cards.css";
// import { useCart } from "react-use-cart";
import { postCartData } from '../Service/api'

const ItemCard = (props) => {

  const addItem = async (e) => {
    e.preventDefault();
    console.log(props.item)
    try {
      await postCartData(props.item)
        .then(() => {
          alert("Product added successfully into the cart!");
        })
    } catch (err) {
      console.log(err.message)
      alert("Product addition failed!");
    }
  }
  return (
    <div className="card" style={{ margin: "0", padding: "0" }} key={props.id}>
      <div className="cardd-img">
        <img src={props.thumb} alt={props.pname} />
      </div>
      <div className="cardd-header">
        <h2>{props.pname}</h2>
        <p>{props.desc}</p>
        <p className="price">
          {props.price}
          <span>$</span>
        </p>
        <button
          className="btn"
          style={{ color: "lightgray" }}
          onClick={addItem}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
