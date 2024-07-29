import PropTypes from "prop-types";
import React from "react";
import "./card-4.css";

export const Card4 = ({ property1, className }) => {
  return (
    <div className={`card-4 ${className}`}>
      <div className="overlap-group-4">
        <div className="compact-teach-wrapper">
          <p className="compact-teach">
            Compact teach pendant offers a more
            <br />
            user-friendly interface and is easy to
            <br />
            operate.
          </p>
        </div>
        <div className="front-4">
          <div className="text-wrapper-7">04</div>
          <div className="text-wrapper-8">Handley Teach Pendant</div>
        </div>
      </div>
    </div>
  );
};

Card4.propTypes = {
  property1: PropTypes.oneOf(["card-1"]),
};
