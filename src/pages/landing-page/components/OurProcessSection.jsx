import React from "react";
import "./OurProcessSection.css";

const OurProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      icon: "📄",
      title: "Briefing ",
      description:
        "Share your campaign goals with us, and we’ll align on the vision.",
    },
    {
      id: 2,
      icon: "💡",
      title: "Concept & Ideation",
      description:
        "Our creative team develops unique concepts and scripts for quick approval.",
    },
    {
      id: 3,
      icon: "🎬",
      title: "Production",
      description:
        "Skilled crews and directors bring the vision to life on shoot day.",
    },
    {
      id: 4,
      icon: "✂️",
      title: "Post-Production",
      description:
        "Editors and designers polish your film with professional finesse.",
    },
    {
      id: 5,
      icon: "📹",
      title: "Final Delivery",
      description: "High-quality ad films ready to launch across all platforms.",
    },
  ];

  return (
    <section className="our-process-section">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">OUR PROVEN WORKFLOW</h2>
          <p className="process-subtitle">
            We use technology and creativity at every step to deliver ad films
            faster and better.
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
