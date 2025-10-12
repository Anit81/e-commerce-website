import { Link } from 'react-router-dom'
import './home.css'
import { FooterComponent } from './footer'



export function HomeComponent(){
  return(
    <>
    <section className="hero-section">
        <div className="hero-content">
        
          <h1>Welcome to Tina's Collection</h1>
          <p>Exclusive fashion for every occasion</p>
          <button className='shop-now'><Link to='shop'>Shop Now</Link></button>
        </div>
      </section>
    
     <h2 className="featured-title">Featured Categories</h2>
<div className="featured-categories">
  <div className="category-card">
    <img src="images/1758297254309.jpg" alt="Gowns" />
    <h3>Strapless Gown</h3>
  </div>
  <div className="category-card">
    <img src="images/1758297254314.jpg" alt="Tops" />
    <h3>Corset Button-Up Blouse</h3>
  </div>
</div>

<div className="new-arrival">
  <h3>New Arrival</h3>
  <div className="new-arrival-grid">
    <div>
      <img src="images/c8688601698daffcaa83a9f70f03984d.jpg" alt="beautiful gown"/>
      <p>Name:White blue dress</p>
      <p>Price: 💲350.00</p>
      <button className="shop"><Link to="shop">Shop Now</Link></button>
    </div>

    <div>
      <img src="images/90f49a0d71e06ae3fd13b86493481641.jpg" alt="beautiful top"/>
      <p>Name:Polka Dots Mesh Chiffon Crop Top</p>
      <p>Price: 💲50.00</p>
      <button className="shop"><Link to="shop">Shop Now</Link></button>
    </div>

    <div> 
    <img src="images/a070070954d2e78d39a13755443cdaa8.jpg" alt="beautiful gown"/> 
    <p>Name:Sparkling Lace Mermaid Evening Gown with Train </p> 
    <p>Price:💲350.00 </p>
    <button className= 'shop'><Link to="shop">Shop Now</Link></button>
     </div> 

     <div> 
     <img src="images/23a88da852daf41f546fdd2b9408ccf7.jpg" alt="beautiful top"/> 
     <p>Name: Off-Shoulder Corset Crop Blouse with Sheer Puff Sleeves</p> 
     <p>Price:💲55.00 </p> 
     <button className= 'shop'><Link to="shop">Shop Now</Link></button>
      </div>

       <div> 
    <img src="images/bf959ed39bcf74c250df8ecbb35c442c.jpg" alt="beautiful gown"/> 
    <p>Name: Women's Bow Accent Sheer Long Sleeve Square Collar Blouse</p> 
    <p>Price:💲35.00 </p>
    <button className= 'shop'><Link to="shop">Shop Now</Link></button>
     </div> 

     <div> 
     <img src="images/b319f658056bd27cb3a3e525b51dd638.jpg" alt="beautiful top"/> 
     <p>Name:Rejuvenated Evening Dress
 </p> 
     <p>Price:💲85.00 </p> 
     <button className= 'shop'><Link to="shop">Shop Now</Link></button>
      </div>

       <div> 
    <img src="images/f58429818b4648538ab6c2267a40aa6f.jpg" alt="beautiful gown"/> 
    <p>Name:Floral Cap Sleeve Peplum Blouse </p> 
    <p>Price:💲30.00 </p>
    <button className= 'shop'><Link to="shop">Shop Now</Link></button>
     </div> 

     <div> 
     <img src="images/067a3c3d1852ba058867479ed246fb81.jpg" alt="beautiful top"/> 
     <p>Name:purple corset gown </p> 
     <p>Price:💲200 </p> 
     <button className= 'shop'><Link to="shop">Shop Now</Link></button>
      </div>
  </div>
 </div>

   <div className="promo-banner">
  <img src="images/6a63f2d9512a59eab16fb8a2bea97629.jpg" alt="Promo Banner" />
  <div className="promo-text">🔥 50% OFF – Limited Time!</div>

</div>


  <FooterComponent />

  


    </>
  )
}