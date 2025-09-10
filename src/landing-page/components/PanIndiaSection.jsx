import React from 'react';
import './PanIndiaSection.css';

const PanIndiaSection = () => {
  const cities = [
    {
      id: 1,
      name: "BANGALORE",
      image: "/bangalore.jpg",
      description: "Tech Hub of India"
    },
    {
      id: 2,
      name: "CHENNAI",
      image: "/Chennai.jpg",
      description: "Capital Territory"
    },
    {
      id: 3,
      name: "PUNE",
      image: "/Pune.jpg",
      description: "Oxford of the East"
    },
    {
      id: 4,
      name: "MUMBAI",
      image: "/mumbai.jpg",
      description: "Financial Capital"
    },
    {
      id: 5,
      name: "HYDERABAD",
      image: "/hydrabad.jpg",
      description: "Cyberabad"
    }
  ];

  return (
    <section className="pan-india-section">
      <div className="container">
        <div className="section-header">
          <h2 className="main-title">WE PRODUCE PAN-INDIA.</h2>
          <p className="section-description">
            We Use Our Proprietary Tech and a National Network of Expert Crew and Creators to Conceptualize, Produce, Edit and Deliver Videos – All Over India.
          </p>
        </div>

        <div className="cities-grid">
          {cities.map((city) => (
            <div key={city.id} className="city-card">
              <div className="city-image">
                <img src={city.image} alt={city.name} />
                <div className="city-overlay">
                  <h3 className="city-name">{city.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-container">
          <button className="quote-button">Get a Quote</button>
        </div>
      </div>
    </section>
  );
};

export default PanIndiaSection;
