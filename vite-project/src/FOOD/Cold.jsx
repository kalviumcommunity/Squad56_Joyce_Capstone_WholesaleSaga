import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Item.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import plus from "../assets/plus.png";

function Cold() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get('https://squad56-joyce-capstone-wholesalesaga-1.onrender.com/getCold')
            .then(response => {
                console.log("Data fetched:", response.data); // Debugging line
                setItem(response.data);
            })
            .catch(error => {
                console.log("Error fetching data:", error); // Debugging line
            });
    }, []);

    const handleAddToCart = (selectedItem) => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(selectedItem);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert(`${selectedItem.name} has been added to the cart`);
    };

    return (
        <>
            <Navbar />
            <div className="catName">COLD CUTS</div>
            <div className="catContainer">
                {item.map(user => (
                    <div className="catItem" key={user.id}>
                        <img className="catImage" src={user.img} alt={user.name} />
                        <font className="catFname">{user.name}</font>
                        <font className="catWeight">{user.weight}</font>
                        <font className="catPieces">{user.serve}</font>
                        <font className="catPrice">{user.price}</font>
                        <button className="Badd" onClick={() => handleAddToCart(user)}>
                            <img className="add" src={plus} alt="Add" />
                        </button>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Cold;
