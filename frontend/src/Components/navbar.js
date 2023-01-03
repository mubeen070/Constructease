import React from "react";
import "../Style/menu.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-lg-expand">
        <div
          className="navbar-lg-expand"
          style={{ marginRight: " calc(-0 * var(--bs-gutter-x))" }}
        >
          <div className="row1">
            <img
              src="https://www.designfreelogoonline.com/wp-content/uploads/2018/11/0001043-construction-Logo-Maker-01.png"
              style={{ width: "180px", height: "70px" }}
              alt="logo"
            />
          </div>
          <ul className="list">
            <li className="listItems">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="listItems">
              <Link className="nav-link" to="/equipment">
                Equipment
              </Link>
            </li>
            <li className="listItems">
              <Link className="nav-link" to="/material">
                Marerial
              </Link>
            </li>
            <li className="listItems">
              <Link className="nav-link" to="/dealer">
                About us
              </Link>
            </li>
            <li className="listItems">
              <Link className="nav-link" to="/cart">
                <i class="bi bi-cart"></i>Cart
              </Link>
            </li>
            <li className="listItems">
              <Link className="nav-link" to="/signup">
                Sign up!
              </Link>
            </li>
            <li className="listItems">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div></div>
    </>
  );
}

export default Navbar;
