import {Routes,Route} from 'react-router-dom';
import { FaBars, FaTimes , FaShoppingCart} from "react-icons/fa";

import { Component, useState,useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import {  HomeComponent } from "./components/home";
import { ShopeComponent } from "./components/shopePage";
import {CartComponent}  from "./components/cart";
import {CheckOutComponent}  from "./components/checkoutPage";
import { AboutComponent } from "./components/about";
import './App.css'



function App() {
  const [isOpen,setIsOpen] = useState(false);
     const [myProducts,setMyProducts] = useState([]);
     const [cartItem,setCartItem] = useState([]); 
     const [cartSummary, setCartSummary] = useState({ totalQuantity: 0, totalPrice: 0, freeShipping: false });


     
// Recalculate summary whenever cartItem changes
useEffect(() => {
  const totalQuantity = cartItem.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItem.reduce((sum, item) => sum + item.quantity * (item.product.price || 0), 0);
  const freeShipping = totalPrice > 5000;

  setCartSummary({ totalQuantity, totalPrice, freeShipping });
}, [cartItem]);


  return (
  <>
   <header className="navbar">
        <div className="logo">
          <img src="images/1758297629162.jpg" alt="Tina's Collection" />
        </div>

    <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? <FaTimes /> : <FaBars />}
</div>

{/* Navigation links (toggle with isOpen) */}
<nav className={isOpen ? "nav-links active" : "nav-links"}>
  <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
  <NavLink to="/shop" onClick={() => setIsOpen(false)}>Shop</NavLink>
  <NavLink to="/cart" onClick={() => setIsOpen(false)}>

   <FaShoppingCart /> <span>{cartSummary.totalQuantity}</span>
  </NavLink>
  <NavLink to="/checkout" onClick={() => setIsOpen(false)}>Checkout</NavLink>
  <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
</nav>
   
      
      </header>
   <main className='page-container'>
    <Routes>
       <Route path="/" element={<HomeComponent />}></Route>

     <Route path="/shop" element={<ShopeComponent  myProducts={myProducts} setMyProducts={setMyProducts} cartItem={cartItem} setCartItem={setCartItem}/>} ></Route>

      <Route path="/cart" element={<CartComponent  myProducts={myProducts} setMyProducts={setMyProducts} cartItem={cartItem} setCartItem={setCartItem}  />}  ></Route>
   <Route path="/checkOut" element={<CheckOutComponent  cartSummary={cartSummary} setCartItem={setCartItem} />}></Route>
   <Route path="/about" element={<AboutComponent />}></Route>
  </Routes>
    
   </main>



  
  
  
  </>
  
  
  )
}

export default App
