import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The videos came out fantastic. It was a very quick, professionally planned and well-managed production.",
      name: "Loveleen Kaur",
      position: "Creative Lead",
      company: "Philips",
      avatar: "/api/placeholder/60/60",
      logo: "/api/placeholder/80/40"
    },
    {
      id: 2,
      quote: "We needed a lot of very structured, professional, seamlessly-organized video production work. And well within our budget. IndieVisual delivered!",
      name: "Amit Kumar",
      position: "Srivastava, AVP Marketing",
      company: "USHA",
      avatar: "/api/placeholder/60/60",
      logo: "/api/placeholder/80/40"
    },
    {
      id: 3,
      quote: "IndieVisual streamlined our video production entirely. Their platform offers on-demand access and makes their team feel like a seamless internal extension. We now receive high-quality corporate videos with minimal management overhead.",
      name: "Nanki Jassal",
      position: "Strategic Consultant",
      company: "WPP",
      avatar: "/api/placeholder/60/60",
      logo: "/api/placeholder/80/40"
    },
    {
      id: 4,
      quote: "We've collaborated with IndieVisual on several events and video projects, and the experience has consistently been smooth and hassle-free. The team has been extremely cooperative, making the entire shooting process seamless and dependable.",
      name: "Aaditya Vinayak",
      position: "Senior Associate – Investments",
      company: "Alternatives",
      avatar: "/api/placeholder/60/60",
      logo: "/api/placeholder/80/40"
    },
    {
      id: 5,
      quote: "It was really a pleasure working with your team on our corporate videos.",
      name: "Rahul Guha",
      position: "Managing Director & CEO",
      company: "Thyrocare",
      avatar: "/api/placeholder/60/60",
      logo: "/api/placeholder/80/40"
    },
    {
      id: 6,
      quote: "We were super surprised to see the efficiency and the turnaround by this team. IndieVisual was able to execute the videos efficiently all while communicating the exact message which we wanted to deliver.",
      name: "Amit Kapoor",
      position: "Co-Founder",
      company: "OneStack",
      avatar: "/api/placeholder/60/60",
      logo: "/api/placeholder/80/40"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">TESTIMONIALS</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="author-avatar"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="company-logo">
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.company}
                    className="company-logo-img"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
