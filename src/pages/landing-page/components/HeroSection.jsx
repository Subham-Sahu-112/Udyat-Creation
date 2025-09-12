import { useState } from "react";
import ContactForm from "./FormSubmit";
import "./HeroSection.css";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    lookingFor: "",
    budget: "",
  });
  const [isMobile] = useState(window.innerWidth < 768);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };
  return (
    <section className="hero" id="home">
      <video 
        className="video" 
        src={isMobile ? 'https://ik.imagekit.io/wiqxywfta/video1.mp4?updatedAt=1757508412727' : 'https://ik.imagekit.io/wiqxywfta/video2.mp4?updatedAt=1757508420963'}
        autoPlay 
        muted 
        loop 
        playsInline
      ></video>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            SMART AD FILM
            <br />
            PRODUCTION.
            <br />
            <span className="streamlined">Simplified.</span>
          </h1>
          <p className="hero-subtitle">
            Compelling ad films for every industry – crafted by top creative
            professionals across India.
          </p>
        </div>

        {/* <div className="quote-form-container">
          <div className="quote-form">
            <h2 className="form-title">Get a Quote Today</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <div className="phone-input">
                <div className="country-code">
                  <span className="flag">🇮🇳</span>
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder=""
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
              />

              <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={formData.designation}
                onChange={handleInputChange}
              />

              <select
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleInputChange}
                required
              >
                <option value="">What are you looking for?</option>
                <option value="corporate-video">Corporate Video</option>
                <option value="ad-film">Ad Film</option>
                <option value="product-demo">Product Demo</option>
                <option value="social-media">Social Media Content</option>
                <option value="event-coverage">Event Coverage</option>
              </select>

              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                required
              >
                <option value="">Budget</option>
                <option value="under-1l">Under ₹1 Lakh</option>
                <option value="1l-5l">₹1-5 Lakhs</option>
                <option value="5l-10l">₹5-10 Lakhs</option>
                <option value="10l-25l">₹10-25 Lakhs</option>
                <option value="above-25l">Above ₹25 Lakhs</option>
              </select>

              <a className="submit-btn">
                Submit Details
              </a>
            </form> */}
          {/* </div>
        </div> */}
        <ContactForm />
      </div>
    </section>
  );
}
