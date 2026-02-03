export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 navbar-glass">
<div className="container flex items-center justify-between nav-inner">



        
        {/* BRAND */}
        <a href="#home" className="brand-logo">
          KN Apparels
        </a>

        {/* CENTER NAV */}
        <div className="nav-center">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#why-us" className="nav-link">Why Us</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* CTA */}
        <a href="#contact" className="btn-nav">
          Get Started
        </a>
      </div>
    </nav>
  );
}
