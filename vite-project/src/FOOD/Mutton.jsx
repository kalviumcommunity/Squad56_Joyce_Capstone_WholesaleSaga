import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import './Item.css';
import liver from "../assets/liver.jpg"
import plus from "../assets/plus.png"


function Mutton(){

    const [item, setItem] = useState([]);

    useEffect(() => {
      axios.get('https://squad56-joyce-capstone-wholesalesaga-1.onrender.com/getMut')
        .then(response => {
          setItem(response.data);
        })
        .catch(error => {
          console.log("Error", error);
        });
    }, []);



    return(
        <>
        <Navbar/>
        <div className="catName">CHICKEN</div>

        <div className="catContainer">
            {item.map(user=>(
                <div className="catItem">
                    <img className="catImage" src={user.img} alt="!" />
                    <font className="catFname">{user.name}</font>
                    <font className="catWeight">{user.weight}</font>
                    <font className="catPieces">{user.serve}</font>
                    <font className="catPrice">{user.price}</font>
                    <button className="Badd"><img  className="add" src={plus} alt="!"/></button>
                </div>
            ))}
        </div>



        

        {/* <div className="catContainer">
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
        </div> */}



{/*         
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
        </div> */}




        {/* <div className="catContainer">
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
        </div> */}
        <Footer/>
        </>
    )
}
export default Mutton;