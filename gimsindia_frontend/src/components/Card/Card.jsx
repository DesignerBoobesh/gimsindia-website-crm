import PropTypes from "prop-types";
import React from "react";
import "./card.css";

export const Card = ({ property1, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="overlap-group">
        <div className="back">
          <p className="high-end">
            High-end microcontroller based control
            <br />
            system ensures smooth operation,
            <br />
            precise cutting quality, and high
            <br />
            realiablity.
          </p>
        </div>
        <div className="front">
          <div className="text-wrapper-3">Most Reliable Controller</div>
          <div className="text-wrapper-4">01</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  property1: PropTypes.oneOf(["card-1"]),
};
