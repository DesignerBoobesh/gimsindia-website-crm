import PropTypes from "prop-types";
import "./Component8.css";
import React, { useState } from 'react';

const Component8 = ({ className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={`component-21 ${className}`} onClick={handleClick}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="front4">
          <div className="front-inner" />
          <div className="center-content">
            <div className="div2">01</div>
            <div className="stainless-steel-catcher-container1">
              <p className="stainless-steel-catcher">Most Reliable Controller</p>
            </div>
          </div>
        </div>
        <div className="back5">
          <div className="back-inner" />
          <div className="stainless-steel-catcher-container">
            <p className="stainless-steel-catcher">
              High-end microcontroller based control
            </p>
            <p className="stainless-steel-catcher">
              system ensures smooth operation,
            </p>
            <p className="stainless-steel-catcher">realiablity.</p>
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
