import React, { useState } from "react";
import "./FormSubmit.css";

const ContactForm = () => {
  // Form state management
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

  // UI state management
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear any previous error when user starts typing
    if (submitStatus === "error") {
      setSubmitStatus(null);
      setErrorMessage("");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      // Your deployed API URL
      const API_URL = "https://smtp-connection-send-mail.onrender.com";

      const response = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        // Reset form on success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          designation: "",
          lookingFor: "",
          budget: "",
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.details
            ? result.details.join(", ")
            : result.error || "Failed to send message"
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your internet connection and try again."
      );
      console.error("Network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quote-form-container">
      {/* Success Animation */}
      {submitStatus === "success" && (
        <div className="success-animation">
          <div className="animated-checkmark">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
              <path className="checkmark__check" fill="none" d="m14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
          <h2 className="success-title">Thank You!</h2>
          <p className="success-message">Your inquiry has been submitted successfully. We'll get back to you within 24 hours!</p>
          <button 
            className="submit-another-btn"
            onClick={() => {
              setSubmitStatus(null);
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                company: "",
                designation: "",
                lookingFor: "",
                budget: "",
              });
            }}
          >
            Submit Another Quote
          </button>
        </div>
      )}

      {/* Error Animation */}
      {submitStatus === "error" && (
        <div className="error-animation">
          <div className="animated-cross">
            <svg className="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="cross__circle" cx="26" cy="26" r="25" fill="none"/>
              <path className="cross__path cross__path--right" fill="none" d="m16,16 l20,20"/>
              <path className="cross__path cross__path--right" fill="none" d="m16,36 l20,-20"/>
            </svg>
          </div>
          <h2 className="error-title">Submission Failed</h2>
          <p className="error-message">{errorMessage}</p>
          <button 
            className="try-again-btn"
            onClick={() => {
              setSubmitStatus(null);
              setErrorMessage("");
            }}
          >
            Try Again
          </button>
        </div>
      )}

      {/* Form - Only show when not success or error */}
      {!submitStatus && (
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
              disabled={isSubmitting}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
          />

          <div className="phone-input">
            <div className="country-code">
              <span className="flag">🇮🇳</span>
              <span>+91</span>
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleInputChange}
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              required
              disabled={isSubmitting}
            />
          </div>

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={formData.designation}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />

          <select
            name="lookingFor"
            value={formData.lookingFor}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          >
            <option value="">Budget</option>
            <option value="under-1l">Under ₹1 Lakh</option>
            <option value="1l-5l">₹1-5 Lakhs</option>
            <option value="5l-10l">₹5-10 Lakhs</option>
            <option value="10l-25l">₹10-25 Lakhs</option>
            <option value="above-25l">Above ₹25 Lakhs</option>
          </select>

          {/* Changed from <a> to <button> for proper form submission */}
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Details"}
          </button>
        </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
