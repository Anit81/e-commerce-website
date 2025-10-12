import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import './cart.css';
import { FooterComponent } from "./footer";

export function CartComponent({ cartItem, setCartItem,cartSummary }) {

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(savedCart);
  }, [setCartItem]);

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  // Remove item
  function removeCartItem(productId) {
    const updatedCart = cartItem.filter(item => item.productId !== productId);
    setCartItem(updatedCart);
  }

  // Increment item
  function incrementItem(productId) {
    const updatedCart = cartItem.map(item =>
      item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItem(updatedCart);
  }

  // Decrement item
  function decrementItem(productId) {
    const updatedCart = cartItem.map(item =>
      item.productId === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItem(updatedCart);
  }

  const totalQuantity = cartItem.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItem.reduce((sum, item) => sum + item.quantity * (item.product.price || 0), 0);
  const freeShipping = totalPrice > 5000; // adjust threshold

  

  return (
    <>
      <div className="cart-page">
        <div className="cart-left">
          <h2>Your Cart</h2>
          {cartItem.length === 0 && <p>Your cart is empty</p>}
          {cartItem.map(item => (
            <div key={item.productId} className="cart-item">
              <img src={item.product.image} alt={item.product.name} />
              <div className="cart-item-details">
                <p>{item.product.name}</p>
                <p>💲{(item.product.price / 100).toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-buttons">
                  <button onClick={() => decrementItem(item.productId)} className="decreament-btn">-</button>
                  <button onClick={() => incrementItem(item.productId)} className="increament-btn">+</button>
                  <button onClick={() => removeCartItem(item.productId)} className="remove-btn">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
       
        <div className="cart-right">
          <h3>Total Items Bought</h3>
          <p><strong>Total Items:</strong> {totalQuantity}</p>
          <p><strong>Total Cost:</strong> 💲{(totalPrice / 100).toFixed(2)}</p>
          <p><strong>Shipping:</strong> {freeShipping ? "You qualify for Free Shipping!" : "Add more items for Free Shipping"}</p>
          <button className="checkout-btn"><NavLink to="/checkout">Checkout</NavLink></button>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

