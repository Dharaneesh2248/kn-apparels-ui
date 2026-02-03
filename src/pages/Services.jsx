import sourcing from "../assets/sourcing.jpg";
import factory from "../assets/factory.jpg";
import sampling from "../assets/sampling.jpg";
import quality from "../assets/quality.jpg";
import negotiation from "../assets/negotiation.jpg";
import production from "../assets/production.jpg";
import logistics from "../assets/logistics.jpg";

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            Comprehensive garment buying and sourcing solutions tailored to your
            business needs. From initial sourcing to final delivery, we manage
            every aspect of your supply chain.
          </p>
        </div>

        <div className="services-grid">

          <ServiceCard
            image={sourcing}
            icon="🔍"
            title="Garment Sourcing"
            text="Comprehensive sourcing solutions connecting you with the right manufacturers for your specific needs."
          />

          <ServiceCard
            image={factory}
            icon="🏭"
            title="Vendor & Factory Management"
            text="End-to-end factory evaluation, selection, and relationship management."
          />

          <ServiceCard
            image={sampling}
            icon="🎨"
            title="Sampling & Product Development"
            text="From concept to sample, we manage the entire product development process."
          />

          <ServiceCard
            image={quality}
            icon="✔"
            title="Quality Control & Inspection"
            text="Rigorous quality control at every production stage ensuring international standards."
          />

          <ServiceCard
            image={negotiation}
            icon="💲"
            title="Price Negotiation"
            text="Expert negotiation services to secure competitive pricing without compromising quality."
          />

          <ServiceCard
            image={production}
            icon="📦"
            title="Production Follow-up"
            text="Continuous monitoring of production timelines and milestones."
          />

          <ServiceCard
            image={logistics}
            icon="🚚"
            title="Logistics & Shipment Coordination"
            text="Seamless logistics management from factory to your destination."
          />

        </div>
      </div>
    </section>
  );
}

function ServiceCard({ image, icon, title, text }) {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={image} alt={title} />
        <div className="service-icon">{icon}</div>
      </div>

      <div className="service-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
