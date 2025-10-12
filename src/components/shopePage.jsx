import { useEffect } from "react";
import './shopePage.css';
import { FooterComponent } from "./footer";

export function ShopeComponent({ myProducts, setMyProducts, cartItem, setCartItem }) {

  // Fetch products from MockAPI (just products, no cart)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://68c961ebceef5a150f649ddb.mockapi.io/api/products');
        const data = await res.json();
        setMyProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [setMyProducts]);

  // Add item to cart
  function addToCart(item) {
    const existing = cartItem.find(c => c.productId === item.id);

    if (existing) {
      // Increment quantity
      const updatedCart = cartItem.map(c =>
        c.productId === item.id ? { ...c, quantity: c.quantity + 1 } : c
      );
      setCartItem(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // Add new item
      const newItem = { productId: item.id, product: item, quantity: 1 };
      const updatedCart = [...cartItem, newItem];
      setCartItem(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  return (
    <>
      <div className="my-products">
        <h3>Shop from Us</h3>
        <div className="my-products-grid">
          {myProducts.map(item => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <p className="name">{item.name}</p>
              <p className="description">{item.description}</p>
              <p>💲{(item.price / 100).toFixed(2)}</p>
              <button className="add" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
