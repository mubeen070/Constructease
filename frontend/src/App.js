import React from "react";
import Login from "./Components/login";
import SignUp from "./Components/signupform";
import NavBar from "./Components/navigationbar";
import Home from "./Components/home";
import DealerInfo from "./Components/dealerInfo";
import EditItem from "./Components/editItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import "./Style/App.css";
import Admin from "./Components/admin";
import Products from "./Components/products";
import ItemCart from "./Components/itemCart";
import UserProfile from "./Components/userProfile";
import EditUser from "./Components/editUser";


function App(props) {
  return (
    <>
      <div className="app">
        <Router>
          <NavBar />

          <div className="main">
            <CartProvider>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/dealer" element={<DealerInfo />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/cart" element={<ItemCart />} />
                <Route exact path="/adminview" element={<Admin />} />
                <Route exact path="/edit/:id" element={<EditItem />} />
                <Route exact path='/profile/:id' element={<UserProfile />} />
                <Route exact path='/edituser/:id' element={<EditUser />} />
              </Routes>
            </CartProvider>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
