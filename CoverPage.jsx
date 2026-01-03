import React from "react";
import "./CoverPage.css"; // for custom styles

const CoverPage = () => {
  return (
    <div className="cover-page">
      <header className="header">EduExcel</header>
      <div className="video-container">
        <video
          className="cover-video"
          autoPlay
          loop
          muted
          playsInline
          src="/CoverPage.mp4" 
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default CoverPage;
