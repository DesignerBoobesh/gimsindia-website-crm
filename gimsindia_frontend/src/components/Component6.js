import PropTypes from "prop-types";
import "./Component6.css";
import React, { useState } from 'react';


const Component6 = ({ className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={`component-25 ${className}`} onClick={handleClick}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
      <div className="front4">
          <div className="front-inner" />
          <div className="center-content">
            <div className="div2">03</div>
            <div className="stainless-steel-catcher-container1">
              <p className="stainless-steel-catcher">Precision Traverse</p>
              <p className="stainless-steel-catcher">System</p>
            </div>
          </div>
        </div>
        <div className="back5">
          <div className="back-inner" />
          <div className="stainless-steel-catcher-container">
            <p className="stainless-steel-catcher">
            Precision-grade ball screw provides
            </p>
            <p className="stainless-steel-catcher">
            excellent positional accuracy,
            </p>
            <p className="stainless-steel-catcher">repeatability, and low backlash.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Component6.propTypes = {
  className: PropTypes.string,
};

export default Component6;
