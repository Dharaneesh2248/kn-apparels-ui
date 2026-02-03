export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <h3>KN Apparels</h3>
          <p>
            Your trusted partner in garment buying and sourcing. Connecting
            fashion brands with quality manufacturers worldwide.
          </p>

          <div className="footer-socials">
            <a href="#">f</a>
            <a href="#">in</a>
            <a href="#">ig</a>
            <a href="#">x</a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#whyus">Why Choose Us</a>
          <a href="#contact">Contact</a>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h4>Our Services</h4>
          <a href="#services">Garment Sourcing</a>
          <a href="#services">Quality Control</a>
          <a href="#services">Factory Management</a>
          <a href="#services">Product Development</a>
          <a href="#services">Price Negotiation</a>
          <a href="#services">Logistics Support</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>📞 +91 9629696405</p>
          <p>📞 +91 9942497128</p>
          <p>
            📍 4/603(1), Kurunji Nagar, Veerapandi Post, Tiruppur, Tamil Nadu,
            India – 641605
          </p>
          <p>mail us: info@knapparels.com</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2025</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
