import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Item.css"; // Assuming you have similar styling for Snack as Item
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import plus from "../assets/plus.png";

function Snack() {
    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        axios.get('https://squad56-joyce-capstone-wholesalesaga-1.onrender.com/getSnack')
            .then(response => {
                console.log("Data fetched:", response.data); // Debugging line
                setSnacks(response.data);
            })
            .catch(error => {
                console.log("Error fetching data:", error); // Debugging line
            });
    }, []);

    const handleAddToCart = (selectedSnack) => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(selectedSnack);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert(`${selectedSnack.name} has been added to the cart`);
    };

    return (
        <>
            <Navbar />
            <div className="catName">SNACK</div>
            <div className="catContainer">
                {snacks.map(snack => (
                    <div className="catItem" key={snack.id}>
                        <img className="catImage" src={snack.img} alt={snack.name} />
                        <font className="catFname">{snack.name}</font>
                        <font className="catWeight">{snack.weight}</font>
                        <font className="catPieces">{snack.serve}</font>
                        <font className="catPrice">{snack.price}</font>
                        <button className="Badd" onClick={() => handleAddToCart(snack)}>
                            <img className="add" src={plus} alt="Add" />
                        </button>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Snack;
