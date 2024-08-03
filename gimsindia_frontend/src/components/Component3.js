import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Component3.css';

const Component3 = ({ className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`component-31 ${className}`} onClick={handleClick}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="front4">
          <div className="front-inner" />
          <div className="div2">06</div>
          <div className="stainless-steel-catcher-container1">
            <p className="stainless-steel-catcher">Stainless steel</p>
            <p className="stainless-steel-catcher">Catcher tank</p>
          </div>
        </div>
        <div className="back5">
          <div className="back-inner" />
          <div className="stainless-steel-catcher-container">
            <p className="stainless-steel-catcher">
              Stainless steel catcher tank offers a
            </p>
            <p className="stainless-steel-catcher">
              strong build, effortless maintenance
            </p>
            <p className="stainless-steel-catcher">and a 100-liter capacity.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Component3.propTypes = {
  className: PropTypes.string,
};

export default Component3;
