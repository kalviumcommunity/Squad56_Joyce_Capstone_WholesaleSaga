import React from "react";
import axios from "axios";
import google from "../assets/google.png"
import home from "../assets/home.png"
import cart from "../assets/cart.png"
import { Link } from "react-router-dom";

function Navbar(){


    return(
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
        <font className="login">LOGIN</font>
        </nav>
        </>
    )
}
export default Navbar;