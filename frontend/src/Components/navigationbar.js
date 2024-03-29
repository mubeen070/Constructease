import React from "react";
import { useRef } from "react";
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
        <Link to="/products">Products</Link>
        <Link to="/dealer">About us</Link>
        <Link className="align-right" to="/cart">
          <i class="bi bi-cart"></i>Cart
        </Link>
        <Link to="/adminview">Admin Side</Link>
        <Link to="/signup">
          Sign up
        </Link>
        <Link to="/login">
          Login
        </Link>
        {/* <Link to="/profile">Profile</Link> */}
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
