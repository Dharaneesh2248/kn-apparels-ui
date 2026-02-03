import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Heading */}
        <div className="about-header">
          <h2>About KN Apparels</h2>
          <p>
            KN Apparels is a professional garment buying office providing
            sourcing, quality control, and supply chain management solutions
            for global fashion brands.
          </p>
        </div>

        {/* Image */}
        <div className="about-image-wrap">
          <img src={aboutImg} alt="About KN Apparels" />
        </div>

        {/* Boxes */}
        <div className="about-grid">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To deliver seamless garment sourcing solutions by connecting
              brands with reliable manufacturers worldwide.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To become the most trusted buying office in the apparel industry
              through innovation and integrity.
            </p>
          </div>

          <div className="about-card">
            <h3>Quality First</h3>
            <p>
              Strict quality checks at every production stage to ensure
              international standards are met.
            </p>
          </div>

          <div className="about-card">
            <h3>Partnership</h3>
            <p>
              Long-term partnerships built on transparency, trust, and
              ethical practices.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-box">
          <div>
            <div className="stat-number">300+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div>
            <div className="stat-number">50+</div>
            <div className="stat-label">Global Partners</div>
          </div>
          <div>
            <div className="stat-number">10+</div>
            <div className="stat-label">Countries Served</div>
          </div>
        </div>

      </div>
    </section>
  );
}
