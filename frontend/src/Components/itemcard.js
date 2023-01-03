import React from "react";
import "../Style/cards.css";
import { useCart } from "react-use-cart";

const ItemCard = (props) => {
  const { addItem } = useCart();
  return (
        <div className="card" style={{margin:"0", padding:"0"}}key={props.id}>
          <div className="cardd-img">
            <img src={props.thumb} alt={props.pname} />
          </div>
          <div className="cardd-header">
            <h2>{props.pname}</h2>
            <p>{props.desc}</p>
            <p className="price">
              {props.price}
              <span>{props.currency}</span>
            </p>
            <button
              className="btn"
              style={{ color: "lightgray" }}
              onClick={() => addItem(props.item)}
            >
              Add to cart
            </button>
          </div>
        </div>
  );
};

export default ItemCard;
