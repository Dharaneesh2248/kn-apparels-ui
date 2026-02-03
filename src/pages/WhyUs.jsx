export default function WhyUs() {
  return (
    <section className="whyus-section" id="why-us">
      <div className="whyus-container">

        {/* Header */}
        <div className="whyus-header">
          <h2>Why Us</h2>
          <p>
            Partner with a buying office that prioritizes your success.
            Our commitment to excellence, transparency, and reliability
            sets us apart in the industry.
          </p>
        </div>

        {/* Cards */}
        <div className="whyus-grid">
          <WhyUsCard
            icon="🧩"
            title="Reliable Sourcing Network"
            text="Access to a vast network of verified manufacturers and suppliers across multiple regions, ensuring you find the perfect match for your needs."
          />
          <WhyUsCard
            icon="🛡️"
            title="Strict Quality Assurance"
            text="Multi-stage quality control processes with experienced inspectors ensuring every product meets international standards and your specifications."
          />
          <WhyUsCard
            icon="⏱️"
            title="On-Time Delivery"
            text="Proven track record of meeting deadlines through meticulous production planning, monitoring, and logistics coordination."
          />
          <WhyUsCard
            icon="📉"
            title="Competitive Pricing"
            text="Leverage our industry relationships and negotiation expertise to secure the best prices without compromising on quality."
          />
          <WhyUsCard
            icon="❤️"
            title="Ethical Manufacturing Partners"
            text="We work exclusively with factories that maintain ethical labor practices, environmental standards, and social compliance certifications."
          />
        </div>

        {/* STATS */}
        <div className="whyus-stats">
          <div className="stat">
            <h3>300+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Global Partners</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Countries Served</p>
          </div>
          <div className="stat">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  );
}

function WhyUsCard({ icon, title, text }) {
  return (
    <div className="whyus-card">
      <div className="whyus-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
