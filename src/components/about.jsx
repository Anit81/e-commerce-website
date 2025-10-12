import './about.css';
import { FooterComponent } from './footer';

export  function AboutComponent() {
  return (
    <div className="about">
      {/* Header */}
      <header className="about-header">
    \
         
      </header>


{/* About Story Section */}
      <section className="about-story">
        <div>
          <h2>Our Story</h2>
          <p>
            At <span className="brand-name">Tina's Collection</span>, 
            Every great brand begins with a dream, and ours started with a simple yet powerful vision: to create fashion that speaks to both individuality and timeless elegance. From the very beginning, we believed that clothing is more than just fabric—it’s a reflection of identity, confidence, and culture.

Our journey began with a love for style and craftsmanship. What started as a passion for sketching designs and experimenting with fabrics has now grown into a brand that celebrates creativity, self-expression, and the beauty of detail. We blend tradition with modernity, ensuring that every piece we create tells a story of heritage while embracing today’s trends.
At the heart of our brand is a deep respect for quality. We carefully select materials that are not only stylish but also comfortable and durable, because fashion should never be at odds with everyday living. Each design is thoughtfully crafted—stitched with precision, tailored with care, and finished with the kind of detail that makes you stand out.

But our story is not just about clothes—it’s about people. Our brand exists to empower individuals, helping them feel bold, elegant, and truly themselves. Whether it’s a statement piece for a special occasion or a classic design for everyday wear, we want our creations to inspire confidence and joy.

As we continue to grow, our commitment remains the same: to bring together artistry, authenticity, and passion in everything we do. This is not just fashion—it’s a movement, a lifestyle, and a celebration of who you are.
<br />
<br />
Welcome to our story. Welcome to a world where fashion meets identity.
          </p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div>
          <h2>5+</h2>
          <p>Years Experience</p>
        </div>
        <div>
          <h2>50+</h2>
          <p>Products</p>
        </div>
        <div>
          <h2>200+</h2>
          <p>Happy Customers</p>
        </div>
        <div>
          <h2>10+</h2>
          <p>Collections</p>
        </div>
      </section>

      
      {/* Benefits Section */}
      <section className="about-benefits">
        <h2>Perks & Benefits</h2>
        <div className="benefit-items">
          <div>
            <h3>Quick Delivery</h3>
            <p>Fast shipping right to your doorstep.</p>
          </div>
          <div>
            <h3>Affordable Luxury</h3>
            <p>Elegant gowns at pocket-friendly prices.</p>
          </div>
          <div>
            <h3>Exclusive Styles</h3>
            <p>Trendy collections, made for you.</p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
<section className="about-mission">
  <div className="mission-content">
    <h2>Our Mission</h2>
    <p>
      At <span className="brand-name">Tina's Collection</span>, our mission is to empower women 
      with fashion that combines elegance, confidence, and comfort.  
      We believe every gown and top should not only look beautiful 
      but also make you feel unstoppable — whether it’s for a casual outing, 
      workday, or a special celebration.
    </p>
  </div>
</section>


{/* Lifestyle / Big Image Section */}
<section className="about-lifestyle">
  <img
    src="images/a7d1c63adc6800a3382e9bcb5edf859f.jpg" 
    alt="Lifestyle Fashion"
    className="lifestyle-img"
  />
</section>


      {/* Promo Section */}
      <section className="about-promo">
        <div>
         <img
          src="images/a070070954d2e78d39a13755443cdaa8.jpg"
          alt="Elegant Gown"
        />
          <h3>Gown Sale 30% Off</h3>
          <button>Shop Now</button>
        </div>
        <div>
         <img
          src="images/112f580a9e7ef3c2ef3a0f9e2eac50fe.jpg"
          alt="Elegant Gown"
        />
          <h3>Exclusive Tops 15% Off</h3>
          <button>Shop Now</button>
        </div>
      </section>




      <FooterComponent />
    </div>
  );
}
