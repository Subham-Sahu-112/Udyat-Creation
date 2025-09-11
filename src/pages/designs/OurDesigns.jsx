import React, { useState } from "react";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import "./OurDesigns.css";

const OurDesign = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Video Projects (.mp4 files)
  const videoProjects = [
    {
      id: 1,
      category: "corporate",
      videoSrc: "/Product-5.mp4",
    },
    {
      id: 3,
      category: "product",
      videoSrc: "/Product-9.mp4",
    },
    {
      id: 5,
      category: "branding",
      videoSrc: "/Product-1.mp4",
    },
    {
      id: 7,
      category: "marketing",
      videoSrc: "/Product-7.mp4",
    },
    {
      id: 9,
      category: "social",
      videoSrc: "/Product-3.mp4",
    },
  ];

  // Image Projects (.jpg files)
  const imageProjects = [
    {
      id: 2,
      category: "branding",
      imageSrc: "/Product-2.jpg",
    },
    {
      id: 4,
      category: "photography",
      imageSrc: "/Product-8.jpg",
    },
    {
      id: 6,
      category: "graphics",
      imageSrc: "/Product-6.jpg",
    },
    {
      id: 8,
      category: "marketing",
      imageSrc: "/Product-4.jpg",
    },
    {
      id: 10,
      category: "web",
      imageSrc: "/Product-10.jpg",
    },
  ];

  const handleVideoClick = (project) => {
    setSelectedVideo(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="our-design-section">
          <div className="design-container">
            <div className="design-header">
              <h2 className="design-title">OUR CREATIVE PORTFOLIO</h2>
              <p className="design-subtitle">
                Showcasing our expertise in video production and graphic design
              </p>
            </div>

            {/* Video Projects Section */}
            <div id="video" className="projects-section">
              <h3 className="section-title">📹 Video Production Portfolio</h3>
              <div className="design-grid">
                {videoProjects.map((project) => (
                  <div key={project.id} className="design-card video-card">
                    <div className="design-video">
                      <video
                        src={project.videoSrc}
                        muted
                        loop
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => e.target.pause()}
                        onClick={() => handleVideoClick(project)}
                        style={{ cursor: "pointer" }}
                      />
                      <div
                        className="video-overlay"
                        onClick={() => handleVideoClick(project)}
                      >
                        <button
                          className="view-project-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVideoClick(project);
                          }}
                        >
                          ▶
                        </button>
                      </div>
                      <div className="design-overlay">
                        <div className="overlay-content">
                          <h3 className="project-title">{project.title}</h3>
                          <p className="project-description">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Projects Section */}
            <div id="image" className="projects-section">
              <h3 className="section-title">🎨 Graphic Design Portfolio</h3>
              <div className="design-grid">
                {imageProjects.map((project) => (
                  <div key={project.id} className="design-card image-card">
                    <div className="design-image">
                      <img src={project.imageSrc} alt={project.title} />
                      <div className="design-overlay">
                        <div className="overlay-content">
                          <h3 className="project-title">{project.title}</h3>
                          <p className="project-description">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Modal */}
            {isModalOpen && selectedVideo && (
              <div className="video-modal" onClick={closeModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-header">
                    <h3>{selectedVideo.title}</h3>
                    <button className="close-btn" onClick={closeModal}>
                      ✕
                    </button>
                  </div>
                  <div className="modal-video">
                    <video
                      src={selectedVideo.videoSrc}
                      controls
                      autoPlay
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="modal-info">
                    <p className="modal-subtitle">{selectedVideo.subtitle}</p>
                    <p className="modal-description">
                      {selectedVideo.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="design-cta">
              <h3>Ready to Create Something Amazing?</h3>
              <p>
                Udyyatt Creations bringing you a very affordable pricing on
                Digital Marketing Monthly ₹15,000/- , Designing and posting
                along with campaigning
              </p>
              <button className="get-design-quote-btn">Get Quote</button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};
export default OurDesign;
