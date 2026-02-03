import hero from "../assets/hero.jpg";

export default function Home() {
  return (
    <section id="home" className="pt-20">
      <div className="relative min-h-screen w-full overflow-hidden">
        
        {/* Background */}
        <img
          src={hero}
          alt="KN Apparels"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/35" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="hero-container">
            <div className="hero-content text-black">

              {/* Badge */}
              <span className="hero-badge">
                Trusted Garment Buying Office
              </span>

              {/* Heading (line breaks intentional) */}
              <h1
                style={{ fontSize: "64px", lineHeight: "1.05" }}
                className="mt-6 font-extrabold tracking-tight"
              >
                Your Trusted Garment
                <br />
                Buying & Sourcing
                <br />
                Partner
              </h1>

              {/* Paragraph */}
              <p
                style={{ maxWidth: "620px" }}
                className="mt-6 text-[17px] leading-relaxed text-gray-500"
              >
                Connecting international fashion brands with reliable
                manufacturers through expert sourcing, quality control,
                and supply chain management.
              </p>

              {/* Feature row */}
              <div className="mt-6 flex gap-6 text-sm text-gray-800">
                <span>✔ Global Sourcing Network &ensp;</span>
                <span>✔ Quality Assurance &ensp;</span>
                <span>✔ On-Time Delivery</span>
              </div>
              <p></p>
              {/* Buttons */}
              <div className="mt-10 flex gap-4">
                <a href="#contact" className="btn-primary">
                  Contact Us →
                </a>
                &ensp;&ensp;
                <a href="#services" className="btn-secondary">
                  Request Sourcing
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
