import React from "react";
import { useCart } from "react-use-cart";
import "../Style/cart.css";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center text-dark">Empty Cart</h1>;
  return (
    <section className="container">
      <h1 className="text-dark">Shopping Cart</h1>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-12 col-md-8 col-sm-2 pt-3">
          <h4 className="text-dark">
            Total Items:{totalUniqueItems} ^  Total Quantity:{totalItems}
          </h4>
          <table
            className="table center"
            style={{ color: "black" }}
          >
            <tbody >
              <th>Item</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Operations</th>
              {items.map((item, index) => {
                return (
                  <tr style={{padding: '3rem'}}>
                    <td>
                      <img
                        src={item.thumb}
                        style={{ height: "6rem", width: "6rem" }}
                        alt="pic"
                      />
                    </td>
                    <td>{item.pname}</td>
                    <td>
                      {item.price}
                      {item.currency}
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      <button
                        className="buttons"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="buttons"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="buttons red"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="center ms-2" >
          <h4 style={{color:'black'}}>Total Price: {cartTotal}$</h4>
        </div>

        <div className="center">
          <button className="btn btn-danger ms-2" onClick={() => emptyCart()}>
            Clear cart
          </button>
          <button className="btn btn-primary ms-2">Buy</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
