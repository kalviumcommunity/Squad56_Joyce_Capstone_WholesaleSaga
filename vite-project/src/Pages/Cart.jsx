import React, { useEffect, useState } from 'react';
import './Cart.css';

function Cart({ closeCart }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.classList.add('cart-open');

    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);

    return () => {
      cartContainer.classList.remove('cart-open');
    };
  }, []);

  const handleRemoveItem = (itemIndex) => {
    const updatedCartItems = cartItems.filter((_, index) => index !== itemIndex);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <>
      <div className="cart-container">
        <span className="cart-close-btn" onClick={closeCart}>&times;</span>
        <h2 className="cart-title">Your Cart</h2>
        {cartItems.length > 0 ? (
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name}</span>
                <span>{item.weight}</span>
                <span>{item.serve}</span>
                <span>{item.price}</span>
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="cart-empty">Your cart is empty.</p>
        )}
      </div>
    </>
  );
}

export default Cart;
