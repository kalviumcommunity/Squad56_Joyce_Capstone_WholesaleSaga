import React from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import './Item.css';
import liver from "../assets/liver.jpg"
import plus from "../assets/plus.png"


function Item(){
    return(
        <>
        <Navbar/>
        <div className="catName">CHICKEN</div>
        <div className="catContainer">
            <div className="catItem">
            <img className="catImage" src={liver} alt="!" />
            <font className="catFname">Chicken Liver</font>
            <font className="catWeight">500g</font>
            <font className="catPieces">| 20-30 Pieces | Serves 4</font>
            <font className="catPrice">₹379</font>
            <button className="Badd"><img  className="add" src={plus} alt="!"/></button>
            </div>
            <div className="catItem">
            <img className="catImage" src={liver} alt="!" />
            <font className="catFname">Chicken Curry Cut - Small Pieces</font>
            <font className="catWeight">500g</font>
            <font className="catPieces">| 20-30 Pieces | Serves 4</font>
            <font className="catPrice">₹379</font>
            <button className="Badd"><img  className="add" src={plus} alt="!"/></button>
            </div>
            <div className="catItem">
            <img className="catImage" src={liver} alt="!" />
            <font className="catFname">Chicken Breast - Boneless</font>
            <font className="catWeight">500g</font>
            <font className="catPieces">| 20-30 Pieces | Serves 4</font>
            <font className="catPrice">₹379</font>
            <button className="Badd"><img  className="add" src={plus} alt="!"/></button>
            </div>
        </div>
        <div className="catContainer">
            <div className="catItem">
            <img className="catImage" src={liver} alt="!" />
            <font className="catFname">Chicken Liver</font>
            <font className="catWeight">500g</font>
            <font className="catPieces">| 20-30 Pieces | Serves 4</font>
            <font className="catPrice">₹379</font>
            <button className="Badd"><img  className="add" src={plus} alt="!"/></button>
            </div>
            <div className="catItem">
            <img className="catImage" src={liver} alt="!" />
            <font className="catFname">Chicken Curry Cut - Small Pieces</font>
            <font className="catWeight">500g</font>
            <font className="catPieces">| 20-30 Pieces | Serves 4</font>
            <font className="catPrice">₹379</font>
            <button className="Badd"><img  className="add" src={plus} alt="!"/></button>
            </div>
            <div className="catItem">
            <img className="catImage" src={liver} alt="!" />
            <font className="catFname">Chicken Breast - Boneless</font>
            <font className="catWeight">500g</font>
            <font className="catPieces">| 20-30 Pieces | Serves 4</font>
            <font className="catPrice">₹379</font>
            <button className="Badd"><img  className="add" src={plus} alt="!"/></button>
            </div>
        </div><div className="catContainer">
            <div className="catItem">
            <img className="catImage" src={liver} alt="!" />
            <font className="catFname">Chicken Liver</font>
            <font className="catWeight">500g</font>
            <font className="catPieces">| 20-30 Pieces | Serves 4</font>
            <font className="catPrice">₹379</font>
            <button className="Badd"><img  className="add" src={plus} alt="!"/></button>
            </div>
            <div className="catItem">
            <img className="catImage" src={liver} alt="!" />
            <font className="catFname">Chicken Curry Cut - Small Pieces</font>
            <font className="catWeight">500g</font>
            <font className="catPieces">| 20-30 Pieces | Serves 4</font>
            <font className="catPrice">₹379</font>
            <button className="Badd"><img  className="add" src={plus} alt="!"/></button>
            </div>
            <div className="catItem">
            <img className="catImage" src={liver} alt="!" />
            <font className="catFname">Chicken Breast - Boneless</font>
            <font className="catWeight">500g</font>
            <font className="catPieces">| 20-30 Pieces | Serves 4</font>
            <font className="catPrice">₹379</font>
            <button className="Badd"><img  className="add" src={plus} alt="!"/></button>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Item;