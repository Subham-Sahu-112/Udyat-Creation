import React from 'react';
import './OurClientsSection.css';

const OurClientsSection = () => {
  const clients = [
    {
      id: 1,
      name: "Client 1",
      logo: "/Client-1.jpg",
      industry: "Technology"
    },
    {
      id: 3,
      name: "Client 3",
      logo: "/Client-3.jpg", 
      industry: "Finance"
    },
    {
      id: 4,
      name: "Client 4",
      logo: "/Client-4.jpg",
      industry: "Education"
    },
    {
      id: 5,
      name: "Client 5",
      logo: "/Client-5.jpg",
      industry: "Retail"
    },
    {
      id: 6,
      name: "Client 6",
      logo: "/Client-6.jpg",
      industry: "Manufacturing"
    },
    {
      id: 7,
      name: "Client 7",
      logo: "/Client-7.jpg",
      industry: "Hospitality"
    },
    {
      id: 8,
      name: "Client 8",
      logo: "/Client-8.jpg",
      industry: "Real Estate"
    },
    {
      id: 10,
      name: "Client 10",
      logo: "/Client-10.jpg",
      industry: "Food & Beverage"
    },
    {
      id: 11,
      name: "Client 11",
      logo: "/Client-11.jpg",
      industry: "Entertainment"
    },
    {
      id: 12,
      name: "Client 12",
      logo: "/Client-12.jpg",
      industry: "Consulting"
    }
  ];

  return (
    <section className="our-clients-section">
      <div className="clients-container">
        <div className="clients-header">
          <h2 className="clients-title">OUR TRUSTED CLIENTS</h2>
          <p className="clients-subtitle">
            We're proud to work with leading brands across various industries
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.id} className="client-card">
              <div className="client-logo">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="clients-stats">
          <div className="stat-item">
            <div className="stat-number">125+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">40+</div>
            <div className="stat-label">Cities Covered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">700+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>

        <div className="clients-cta">
          <h3>Ready to Join Our Family of Satisfied Clients?</h3>
          <p>Let's create something amazing together</p>
          <button className="join-clients-btn">Start Your Project</button>
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;
