import React,{useEffect,useState} from "react";
import axios from "axios";
import "./Item.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import plus from "../assets/plus.png";

function Seafood(){
    const [item,setItem]=useState([]);

    useEffect(()=>{
        axios.get('https://squad56-joyce-capstone-wholesalesaga-1.onrender.com/getSeafood')
        .then(response=>{
            setItem(response.data);
        })
        .catch(error=>{
            console.log("error",error)
        });
    },[]);

    return(
        <>
        <Navbar/>
        <div className="catName">SEA FOOD</div>
        <div className="catContainer">
            {item.map(user=>(<div className="catItem" key={user.id}>
                    <img className="catImage" src={user.img} alt="!" />
                    <font className="catFname">{user.name}</font>
                    <font className="catWeight">{user.weight}</font>
                    <font className="catPieces">{user.serve}</font>
                    <font className="catPrice">{user.price}</font>
                    <button className="Badd"><img  className="add" src={plus} alt="!"/></button>
                </div>))}

        </div>
        <Footer/>
        </>
    )
}

export default Seafood;