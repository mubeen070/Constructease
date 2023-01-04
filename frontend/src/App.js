import React from "react";
import Login from "./Components/login";
import SignUp from "./Components/signupform";
import NavBar from "./Components/navigationbar";
import Home from "./Components/home";
import DealerInfo from "./Components/dealerInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Cart from "./Components/Cart";
import "./Style/App.css";
import Admin from "./Components/admin";
import Products from "./Components/data";
function App() {
  return (  
    <>
      <div className="app">
        <Router>
          <NavBar />

          <div className="main">
            <CartProvider>
              <Routes>               
                <Route active exact path="/" element={<Home />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/dealer" element={<DealerInfo />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/adminview" element={<Admin />} />
              </Routes>
            </CartProvider>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
