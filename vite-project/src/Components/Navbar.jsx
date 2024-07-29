import React, { useState } from "react";
import { Link } from "react-router-dom";
import google from "../assets/google.png";
import home from "../assets/home.png";
import cart from "../assets/cart.png";
import Login from "../Pages/Login";

function Navbar(){
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleLoginClick = () => {
        setIsLoginOpen(true);
    };

    const closeLogin = () => {
        setIsLoginOpen(false);
    };

    return (
        <>
            <nav>
                <font className="whole">Wholesale</font>
                <font className="saga">Saga</font>
                <img  className="google" src={google} alt="!" />
                <font className="destination">Destination</font>
                <input type="text" placeholder="Search for any item" className="search"/>
                <Link to='/'><img  className="home" src={home} alt="!" /></Link> 
                <img  className="cart" src={cart} alt="!" />
                <font className="Cart">Cart</font>
                <font className="login" onClick={handleLoginClick}>LOGIN</font>
            </nav>
            {isLoginOpen && <Login closeLogin={closeLogin} />}
        </>
    );
}

export default Navbar;