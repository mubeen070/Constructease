import React from "react";
import "../Style/admin.css";
const Admin = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "red" }}>
      <h1>Manage Items</h1>
      <div
        className="row"
        style={{ marginRight: " calc(-0 * var(--bs-gutter-x))" }}
      >
      <table>
        <tbody>
          <th>Item</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tbody>
      </table>
      </div>
    </div>
  );
};
export default Admin;
