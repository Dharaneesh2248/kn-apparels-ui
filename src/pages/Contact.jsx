import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // IMPORTANT
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `
Phone: ${formData.phone}
Company: ${formData.company}

${formData.message}
          `,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          Ready to start your next project? Get in touch with our team and let's
          discuss how we can help bring your vision to life.
        </p>
      </div>

      <div className="contact-container">
        {/* LEFT COLUMN */}
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📞</div>
            <div>
              <h4>Mobile Numbers</h4>
              <p>+91 9629696405</p>
              <p>+91 9942497128</p>
              <p>email: info@knapparels.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📍</div>
            <div>
              <h4>Office Address</h4>
              <p>
                4/603(1), Kurunji Nagar, Veerapandi Post, Tiruppur, Tamil Nadu,
                India – 641605
              </p>
            </div>
          </div>

          <div className="info-card info-muted">
            <h4>Business Hours</h4>
            <div className="hours">
              <span>Monday - Friday</span>
              <span>9:00 AM - 6:00 PM</span>
            </div>
            <div className="hours">
              <span>Saturday</span>
              <span>10:00 AM - 4:00 PM</span>
            </div>
            <div className="hours">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>

          <div className="form-grid">
            <div>
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="+91 9629696405"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-full">
            <label>Message *</label>
            <textarea
              name="message"
              placeholder="Tell us about your project requirements..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}
