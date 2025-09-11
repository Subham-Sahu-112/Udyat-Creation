import React from "react";
import "./OurWorkSection.css";

const OurWorkSection = () => {
  const workProjects = [
    {
      id: 1,
      title: "Ayurvedic Joint Care",
      subtitle: "VISUAL PRODUCTION",
      thumbnail: "https://img.youtube.com/vi/H5FifFIjm0U/maxresdefault.jpg",
      videoUrl: "https://youtu.be/H5FifFIjm0U?si=A77qSgbvmx2u7dpF",
      category: "production",
    },
    {
      id: 2,
      title: "Gold Premium Oil",
      subtitle: "MARKETING CAMPAIGN",
      thumbnail: "https://img.youtube.com/vi/rYqOmu-ac-8/maxresdefault.jpg",
      videoUrl: "https://youtu.be/rYqOmu-ac-8?si=NIOnaAc-d9SIhfKw",
      category: "campaign",
    },
    {
      id: 3,
      title: "Craveman Ice Cream",
      subtitle: "BRAND SHOWCASE",
      thumbnail: "https://img.youtube.com/vi/wPq_KMavBrs/maxresdefault.jpg",
      videoUrl: "https://youtu.be/wPq_KMavBrs?si=pgBqfKkfrFnxwlzE",
      category: "showcase",
    },
    {
      id: 4,
      title: "Jeeva Siri Gluten-Free",
      subtitle: "PROMOTIONAL CONTENT",
      thumbnail: "https://i.ytimg.com/vi/m5Z7XmdkD54/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHOBoAC3gOKAgwIABABGH8gNigTMA8=&rs=AOn4CLBn0vb4AoMMjhxeoKgb6Q9iKvLApg",
      videoUrl: "https://youtu.be/m5Z7XmdkD54?si=QysGtrtwAOgsRfxP",
      category: "promotional",
    },
    {
      id: 5,
      title: "Naturya Batter",
      subtitle: "BRAND CAMPAIGN",
      thumbnail: "https://img.youtube.com/vi/0q4iQR62-_4/maxresdefault.jpg",
      videoUrl: "https://youtu.be/0q4iQR62-_4?si=OLwnIo3qWkFOjipg",
      category: "campaign",
    },
    // Duplicate for infinite scroll
    {
      id: 6,
      title: "Ayurvedic Joint Care",
      subtitle: "VISUAL PRODUCTION",
      thumbnail: "https://img.youtube.com/vi/H5FifFIjm0U/maxresdefault.jpg",
      videoUrl: "https://youtu.be/H5FifFIjm0U?si=A77qSgbvmx2u7dpF",
      category: "production",
    },
    {
      id: 7,
      title: "Gold Premium Oil",
      subtitle: "MARKETING CAMPAIGN",
      thumbnail: "https://img.youtube.com/vi/rYqOmu-ac-8/maxresdefault.jpg",
      videoUrl: "https://youtu.be/rYqOmu-ac-8?si=NIOnaAc-d9SIhfKw",
      category: "campaign",
    },
    {
      id: 8,
      title: "Craveman Ice Cream",
      subtitle: "BRAND SHOWCASE",
      thumbnail: "https://img.youtube.com/vi/wPq_KMavBrs/maxresdefault.jpg",
      videoUrl: "https://youtu.be/wPq_KMavBrs?si=pgBqfKkfrFnxwlzE",
      category: "showcase",
    },
  ];

  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, "_blank");
  };

  return (
    <section className="our-work-section" id="our-work">
      <div className="work-header">
        <h2 className="work-title">OUR WORK</h2>
      </div>

      <div className="work-slider-container">
        <div className="work-slider">
          {workProjects.map((project) => (
            <div
              key={project.id}
              className="work-card"
              onClick={() => handleVideoClick(project.videoUrl)}
            >
              <div className="work-thumbnail">
                <img src={project.thumbnail} alt={project.title} />
                <div className="work-overlay">
                  <div className="work-play-button">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="work-info">
                <h3 className="work-project-title">{project.title}</h3>
                <p className="work-project-subtitle">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="work-cta">
        <a
          className="get-quote-btn"
          href="https://youtube.com/@udyyatt?si=nF01q37rd1eoulid"
        >
          Subscribe Us
        </a>
      </div>
    </section>
  );
};

export default OurWorkSection;
