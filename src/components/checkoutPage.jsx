import { useState } from "react";
import { FooterComponent } from "./footer";
import './checkoutPage.css';

export function CheckOutComponent({ cartSummary, setCartItem }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // Format card number as 1234 5678 9012 3456
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // remove non-digits
    value = value.substring(0, 16); // max 16 digits
    const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formatted);
  };

  const handlePay = (e) => {
    e.preventDefault();

    // Regex validations
    const emailRegex = /\S+@\S+\.\S+/;
    const cardRegex = /^\d{16}$/;
    const cvvRegex = /^\d{3}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

    // Check empty fields
    if (!name || !email || !address || !phone || !cardName || !cardNumber || !expiry || !cvv) {
      alert("Please fill all the fields!");
      return;
    }

    // Validate email
    if (!emailRegex.test(email)) {
      alert("Invalid email address!");
      return;
    }

    // Validate card number
    if (!cardRegex.test(cardNumber.replace(/\s/g, ''))) {
      alert("Card number must be 16 digits!");
      return;
    }

    // Validate expiry
    if (!expiryRegex.test(expiry)) {
      alert("Expiry must be in MM/YY format!");
      return;
    }

    // Validate CVV
    if (!cvvRegex.test(cvv)) {
      alert("CVV must be 3 digits!");
      return;
    }

    // Payment successful
    alert("Order Successful!");

    // Clear form fields
    setName(""); setEmail(""); setAddress(""); setPhone("");
    setCardName(""); setCardNumber(""); setExpiry(""); setCvv("");

    // Clear cart and localStorage
    setCartItem([]);
    localStorage.removeItem("cart");
  };

  return (
    <>
      <div className="checkout-container">
        {/* Left: Customer + Payment */}
        <div className="checkout-left">
          <h2>Customer Details</h2>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Your address" />

          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="08012345678" />

          <h2>Payment Details</h2>
          <label htmlFor="cardName">Cardholder Name:</label>
          <input type="text" id="cardName" value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="John Doe" />

          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" value={cardNumber} onChange={handleCardNumberChange} placeholder="1234 5678 9012 3456" maxLength={19} />

          <div className="card-row">
            <div>
              <label htmlFor="expiry">Expiry:</label>
              <input type="text" id="expiry" value={expiry} onChange={(e) => setExpiry(e.target.value)} placeholder="MM/YY" maxLength={5} />
            </div>
            <div>
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="123" maxLength={3} />
            </div>
          </div>

          <button className="checkout-btn" onClick={handlePay}>Pay Now</button>
        </div>

        {/* Right: Cart Summary */}
        <div className="checkout-right">
          <h3>Orders </h3>
          <p><strong>Total Items:</strong> {cartSummary.totalQuantity}</p>
          <p><strong>Total Cost:</strong> 💲{(cartSummary.totalPrice / 100).toFixed(2)}</p>
          <p><strong>Shipping:</strong> {cartSummary.freeShipping ? "Free Shipping!" : "Add more items for Free Shipping"}</p>
        </div>
        
      </div>

      <FooterComponent />
    </>
  );
}
