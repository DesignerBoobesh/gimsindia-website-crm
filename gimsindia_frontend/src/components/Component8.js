import PropTypes from "prop-types";
import "./Component5.css";
import React, { useState } from "react";

const Component8 = ({ className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`component-27 ${className}`} onClick={handleClick}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="front2">
          <div className="front-child" />
          <div className="div">01</div>
          <div className="handley-teach-pendant">Most Reliable Controller</div>
        </div>
        <div className="back3">
          <div className="back-child" />
          <div className="compact-teach-pendant-container">
            High-end microcontroller based control system ensures smooth
            operation and reliability.
          </div>
        </div>
      </div>
    </div>
  );
};

Component8.propTypes = {
  className: PropTypes.string,
};

export default Component8;
