import React from "react";
import "./AdFilmsSection.css";

const AdFilmsSection = () => {
  const features = [
    {
      id: 1,
      icon: "📦", // You can replace with actual icon component
      title: "Complete Solutions, No Hassle",
      description:
        "From scripting to post-production, we manage every step – so you don’t need multiple vendors for one project.",
    },
    {
      id: 2,
      icon: "📦", // You can replace with actual icon component
      title: "Pan-India Network, Powered by Innovation",
      description:
        "We’ve built a trusted community of India’s best video professionals, supported by smart production tools – delivering faster results, reducing costs, and minimizing delays.",
    },
    {
      id: 3,
      icon: "📦", // You can replace with actual icon component
      title: "Seamless Campaign Management",
      description:
        "Scripts, raw footage, final edits – all organized in one secure workspace. No lost files, no endless WhatsApp chains.",
    },
  ];

  return (
    <section className="ad-films-section">
      <div className="ad-films-container">
        <div className="section-header">
          <h2 className="ad-section-title">AD FILMS MADE SIMPLE.</h2>
          <p className="section-subtitle">
            Wherever you are in India – our crews and creative teams are ready
            to get cracking. Within days.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper">{feature.icon}</div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdFilmsSection;
