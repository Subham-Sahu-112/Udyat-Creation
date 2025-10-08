import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is an ad film?",
      answer: "An ad film is a short video production designed to promote a product, service, or brand. It combines creative storytelling with marketing objectives to engage audiences and drive action. Ad films can range from 15 seconds to several minutes and are created for various platforms including television, digital media, and social networks."
    },
    {
      id: 2,
      question: "How is an ad film different from a corporate video or product video?",
      answer: "Ad films are specifically designed for marketing and promotion with a clear call-to-action, while corporate videos focus on company culture, values, and internal communications. Product videos are more informational, demonstrating features and benefits. Ad films prioritize emotional connection and brand messaging to drive consumer behavior."
    },
    {
      id: 3,
      question: "Why should I invest in an ad film?",
      answer: "Ad films offer superior engagement compared to static content, increase brand awareness, and drive higher conversion rates. They allow you to tell your brand story effectively, reach wider audiences across multiple platforms, and create memorable experiences that resonate with your target market. Video content also performs better in search rankings and social media algorithms."
    },
    {
      id: 4,
      question: "What types of ad films do you produce?",
      answer: "We produce various types of ad films including brand commercials, product launches, testimonial videos, explainer videos, social media ads, corporate campaigns, event promotions, and documentary-style brand stories. Each type is tailored to specific marketing objectives and target audiences across different industries."
    },
    {
      id: 5,
      question: "How long should an ad film be?",
      answer: "The ideal length depends on the platform and purpose. For social media, 15-30 seconds work best. Television commercials are typically 30-60 seconds. Digital platforms can accommodate longer formats (2-3 minutes). We recommend shorter durations for broader reach and longer formats for detailed storytelling, always prioritizing audience attention spans."
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>
        
        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openFAQ === faq.id}
              >
                <span className="question-number">{String(faq.id).padStart(2, '0')}.</span>
                <span className="question-text">{faq.question}</span>
                <span className={`faq-arrow ${openFAQ === faq.id ? 'open' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M9 18L15 12L9 6" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              
              <div className={`faq-answer ${openFAQ === faq.id ? 'open' : ''}`}>
                <div className="answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h3 className="cta-title">NEED VIDEOS FOR YOUR COMPANY?</h3>
            <p className="cta-subtitle">Send your brief and get a free quote.</p>
            <p className="cta-description">
              Your marketing strategy needs more than just a good-looking video.<br />
              Engage, connect, and leave an impact with IndieVisual!
            </p>
          </div>
          <a className="cta-button" href='/#home'>Let's Go</a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
