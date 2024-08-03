import PropTypes from "prop-types";
import "./Component5.css";
import React, { useState } from 'react';

const Component5 = ({ className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`component-27 ${className}`} onClick={handleClick}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="front2">
          <div className="front-child" />
          <div className="div">04</div>
          <div className="handley-teach-pendant">Handley Teach Pendant</div>
        </div>
        <div className="back3">
          <div className="back-child" />
          <div className="compact-teach-pendant-container">
            <p className="compact-teach-pendant">
              Compact teach pendant offers a more
            </p>
            <p className="compact-teach-pendant">
              user-friendly interface and is easy to
            </p>
            <p className="compact-teach-pendant">operate.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component5;
