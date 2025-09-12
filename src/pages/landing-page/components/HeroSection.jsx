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
        src={
          isMobile
            ? "https://ik.imagekit.io/wiqxywfta/video1.mp4?updatedAt=1757508412727"
            : "https://ik.imagekit.io/wiqxywfta/video2.mp4?updatedAt=1757508420963"
        }
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
        <ContactForm />
      </div>
    </section>
  );
}
