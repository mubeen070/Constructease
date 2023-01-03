import React from "react";
import { useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBars, FaTimes, FaHammer } from "react-icons/fa";
import "../Style/navbar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>
        <FaHammer />
      </h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/equipment">Equipment</Link>
        <Link to="/material">Marerial</Link>
        <Link to="/dealer">About us</Link>
        <Link className="align-right" to="/cart">
          <i class="bi bi-cart"></i>Cart
        </Link>
        <Link className="align-right" to="/signup">
          Sign up!
        </Link>
        <Link className="align-right" to="/login">
          Login
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavBar;
