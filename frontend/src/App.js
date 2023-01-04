import React from "react";
import Login from "./Components/login";
import SignUp from "./Components/signupform";
import NavBar from "./Components/navigationbar";
import Home from "./Components/home";
import Material from "./Components/material";
import DealerInfo from "./Components/dealerInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Equipment from "./Components/equipment";
import { CartProvider } from "react-use-cart";
import Cart from "./Components/Cart";
import "./Style/App.css";
import Admin from "./Components/admin";
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
                <Route exact path="/material" element={<Material />} />
                <Route exact path="/equipment" element={<Equipment />} />
                <Route exact path="/dealer" element={<DealerInfo />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/cart" element={<Cart />} />
              </Routes>
            </CartProvider>
          </div>
        </Router>
        {/* <Admin /> */}
      </div>
    </>
  );
}

export default App;
