import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Component4.css';

const Component4 = ({ className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`component-29 ${className}`} onClick={handleClick}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="front4">
          <div className="front-inner" />
          <div className="center-content">
            <div className="div2">05</div>
            <div className="stainless-steel-catcher-container1">
              <p className="stainless-steel-catcher">Tungsten carbide</p>
              <p className="stainless-steel-catcher">Nozzle</p>
            </div>
          </div>
        </div>
        <div className="back5">
          <div className="back-inner" />
          <div className="stainless-steel-catcher-container">
            <p className="stainless-steel-catcher">
            High-strength tungsten carbide nozzle
            </p>
            <p className="stainless-steel-catcher">
            ensures a long lifespan and is easy
            </p>
            <p className="stainless-steel-catcher">to replace.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Component4.propTypes = {
  className: PropTypes.string,
};

export default Component4;
