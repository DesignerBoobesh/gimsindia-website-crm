import PropTypes from "prop-types";
import "./KatanaIntroduction.css";
import React, { useState } from 'react';

const KatanaIntroduction = ({ className = "" }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleImageClick = () => {
    setShowVideo(true);
  };
  return (
    <section className={`katana-introduction ${className}`}>
      <div className="introduction-content">
        <div className="performance-highlight">
          <div className="series-name-parent">
            <div className="series-name">
              <h1 className="introducing-katana-series">{`INTRODUCING KATANA SERIES `}</h1>
            </div>
            <h1 className="katana-series-performance">
              Katana Series Performance
            </h1>
          </div>
        </div>
        {!showVideo ? (
          <img
            className="empty-container-icon"
            alt="Click to play video"
            src="/empty-container@2x.png"
            onClick={handleImageClick}
          />
        ) : (
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/watch?v=09vxlqHK3ss&list=RDGMEM916WJxafRUGgOvd6dVJkeQVM09vxlqHK3ss&start_radio=1" // Replace with your video URL
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

KatanaIntroduction.propTypes = {
  className: PropTypes.string,
};

export default KatanaIntroduction;
