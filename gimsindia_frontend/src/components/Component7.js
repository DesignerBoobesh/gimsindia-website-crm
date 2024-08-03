import Front from "./Front";
import PropTypes from "prop-types";
import "./Component7.css";
import React, { useState } from 'react';


const Component7 = ({ className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`component-23 ${className}`} onClick={handleClick}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
      <div className="front4">
          <div className="front-inner" />
          <div className="center-content">
            <div className="div2">02</div>
            <div className="stainless-steel-catcher-container1">
              <p className="stainless-steel-catcher">High Performance</p>
              <p className="stainless-steel-catcher">motors and drivers</p>
            </div>
          </div>
        </div>
        <div className="back5">
          <div className="back-inner" />
          <div className="stainless-steel-catcher-container">
            <p className="stainless-steel-catcher">
            Hybrid servo stepper in the closed-loop
            </p>
            <p className="stainless-steel-catcher">
            control system ensures accurate
            </p>
            <p className="stainless-steel-catcher">movement and lower energy</p>
            <p className="stainless-steel-catcher">consumption.</p>
          </div>
        </div>
    </div>
    </div>
  );
};

Component7.propTypes = {
  className: PropTypes.string,
};

export default Component7;
