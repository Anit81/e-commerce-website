import { Link } from 'react-router-dom'
import './footer.css'


export function FooterComponent(){
  return(
    <>
        
  <footer className="footer">
      <div className="footer-top">
        {/* Logo & Contact */}
        <div className="footer-section">
          <h2 className="logo">FASHION</h2>
          <p>Onitisha, NW 8181 Anambra States</p>
          <p>faustinaibesi45@gmail.com</p>
          <p>+234 903-758-8181</p>

          <div className="social-icons">
            <Link to="/home">FaFacebookF</Link>
            <Link to="/home">FaTwitter </Link>
            <Link to="/home">FaInstagram </Link>
             <Link to="/home">FaGmail </Link>
          </div>
        </div>

        {/* Company */}

        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li><Link to="about">About Us</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="about">Contact Us</Link></li>
          </ul>
        </div>

        {/* Shop */}
        <div className="footer-section">
          <h4>SHOP</h4>
          <ul>
            <li><Link to="shop">Gowns</Link></li>
            <li><Link to="shop">Tops</Link></li>
            <li><Link to="shop">Shop All</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-section">
          <h4>HELP</h4>
          <ul>
            <li><Link to="/">Customer Service</Link></li>
            <li><Link to="/">My Account</Link></li>
            <li><Link to="about">Legal & Privacy</Link></li>
            <li><Link href="/">Gift Card</Link></li>
          </ul>
        </div>

        {/* Opening Time */}
        <div className="footer-section">
          <h4>OPENING TIME</h4>
          <p>Mon – Fri: 8AM – 9PM</p>
          <p>Sat: 9AM – 8PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Fashion. All rights reserved.</p>
        <div className="payments">
          <img 
  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" 
  alt="Visa" 
  className="card-logo"
/>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            alt="MasterCard"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
          />
        </div>
      </div>
    </footer>
    </>
  );
}