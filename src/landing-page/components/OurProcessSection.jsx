import React from 'react';
import './OurProcessSection.css';

const OurProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      icon: "📄",
      title: "The Brief",
      description: "You fill out a short campaign brief – and have a quick call with our team."
    },
    {
      id: 2,
      icon: "💡",
      title: "The Ideation",
      description: "We send you the concept and scripts for approval within days."
    },
    {
      id: 3,
      icon: "🎬",
      title: "The Shoot",
      description: "We assign creative professionals and crew and fix the shoot dates for each leg of the project."
    },
    {
      id: 4,
      icon: "✂️",
      title: "The Edit",
      description: "Our post-production professionals get to work, editing and refining your video, based on your feedback."
    },
    {
      id: 5,
      icon: "📹",
      title: "The Result",
      description: "We deliver the final videos."
    }
  ];

  return (
    <section className="our-process-section">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">OUR PROCESS</h2>
          <p className="process-subtitle">
            We use Tech at all Stages – to Make the Process Quicker and Simpler Than Ever Before.
          </p>
        </div>
        
        <div className="process-steps">
          {processSteps.map((step) => (
            <div key={step.id} className="process-step">
              <div className="step-icon">
                <span>{step.icon}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="process-cta">
          <button className="talk-advisor-btn">Talk to Advisor</button>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
