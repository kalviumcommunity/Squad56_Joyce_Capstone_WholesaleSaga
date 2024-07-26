import React,{useEffect,useState} from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Item.css";
import plus from "../assets/plus.png";

function Offer(){
    const [item,setItem]=useState([]);

    useEffect(()=>{
        axios.get("https://squad56-joyce-capstone-wholesalesaga-1.onrender.com/getOffer")
        .then(response=>{
            setItem(response.data);
        })
        .catch(error=>{
            console.log("error",error);
        });
    },[]);

    return(
        <>
        <Navbar/>
        <div className="catName">OFFERS</div>

        <div className="catContainer">
            {item.map(user=>(
                <div className="catItem" key={user.id}>
                <img className="catImage" src={user.img} alt="!"/>
                <font className="catFname">{user.name}</font>
                <font className="catWeight">{user.weight}</font>
                <font className="catPieces">{user.serve}</font>
                <font className="catPrice">{user.price}</font>
                <button className="Badd"><img  className="add" src={plus} alt="!"/></button>
                </div>
            ))}
        </div>
        <Footer/>
        </>
    )
}
export default Offer;