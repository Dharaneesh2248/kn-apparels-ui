import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      {/* ONE PAGE – SCROLL SECTIONS */}
      <div className="pt-20">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="products">
          <Products />
        </section>

        <section id="why-us">
          <WhyUs />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>

      <Footer />
    </>
  );
}
