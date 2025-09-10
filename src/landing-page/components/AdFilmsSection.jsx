import React from 'react';
import './AdFilmsSection.css';

const AdFilmsSection = () => {
  const features = [
    {
      id: 1,
      icon: "📦", // You can replace with actual icon component
      title: "End-to-End. Not Endless.",
      description: "From scripting to post-production, we handle every creative, technical, and logistical detail in-house – so you don't need five vendors to make one video."
    },
    {
      id: 2,
      icon: "📦", // You can replace with actual icon component
      title: "Nationwide crew. Powered by Tech.",
      description: "We've built a vetted network of India's best video talent – and combined it with our proprietary production system, Xped. This means faster timelines, lower travel costs, and less back-and-forth."
    },
    {
      id: 3,
      icon: "📦", // You can replace with actual icon component
      title: "All Your Campaigns – In One Place.",
      description: "Scripts, raw footage, final videos – no scraping through email chains and WhatsApp threads. All your digital assets will be in your workspace."
    }
  ];

  return (
    <section className="ad-films-section">
      <div className="ad-films-container">
        <div className="section-header">
          <h2 className="section-title">AD FILMS MADE SIMPLE.</h2>
          <p className="section-subtitle">
            Wherever you are in India – our crews and creative teams are ready to get cracking. Within days.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper">
                  {feature.icon}
                </div>
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
