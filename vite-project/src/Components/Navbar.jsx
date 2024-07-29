import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import google from "../assets/google.png";
import home from "../assets/home.png";
import cart from "../assets/cart.png";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(document.cookie.includes('username'));
    };
    checkLogin();
  }, []);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
    setIsLoggedIn(document.cookie.includes('username'));
  };

  const handleLogout = () => {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <nav>
        <font className="whole">Wholesale</font>
        <font className="saga">Saga</font>
        <img className="google" src={google} alt="!" />
        <font className="destination">Destination</font>
        <input type="text" placeholder="Search for any item" className="search" />
        <Link to='/'><img className="home" src={home} alt="!" /></Link>
        <img className="cart" src={cart} alt="!" onClick={handleCartClick} />
        <font className="Cart">Cart</font>
        {isLoggedIn ? (
          <font className="login" onClick={handleLogout}>LOGOUT</font>
        ) : (
          <font className="login" onClick={handleLoginClick}>LOGIN</font>
        )}
      </nav>
      {isLoginOpen && <Login closeLogin={closeLogin} />}
      {isCartOpen && <Cart closeCart={closeCart} />}
    </>
  );
}

export default Navbar;
