import React from 'react';
import './CreativeTalentSection.css';

const CreativeTalentSection = () => {
  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <section className="creative-talent-section" id='why-hire-us'>
      <div className="container">
        <div className="content-wrapper">
          {/* Left Content */}
          <div className="text-content">
            <h1 className='section-text-title'>Why Hire Us?</h1>
            <div className="description">
              <p>
                Ad Films and DVCs have moved online – but agencies are still stuck in the TV era, 
                where budgets were massive, companies did one or two campaigns a year, and they 
                could spend six months and a couple of crores on a new ad campaign.
              </p>
              
              <p>
                Digital video campaigns need a different approach. DVCs and ad films need to be just 
                as quirky, creative and dazzling – but they also need to be quick, simple, streamlined 
                and budget-friendly. And that's where IndieVisual comes in.
              </p>
              
              <p>
                We plan, conceptualize, produce and deliver high-quality ad films within days or 
                weeks, not months. And for every given price point, we provide the best value 
                possible. And take away your headaches.
              </p>
            </div>
          </div>

          {/* Right Stats */}
          <div className="talent-stats-content">
            <div className="stats-header">
              <h3>Across India. Across Genres. Across Industries.</h3>
            </div>
            
            <div className="talent-stats-grid">
              <div className="stat-item">
                <div className="stat-number">800+</div>
                <div className="talent-stat-label">Total Videos</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="talent-stat-label">Cities</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">150+</div>
                <div className="talent-stat-label">Clients</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">12+</div>
                <div className="talent-stat-label">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeTalentSection;
