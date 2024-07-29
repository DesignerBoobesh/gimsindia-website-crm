import PropTypes from "prop-types";
import React from "react";
import "./card-6.css";

export const Card6 = ({ property1, className }) => {
  return (
    <div className={`card-6 ${className}`}>
      <div className="overlap-group-6">
        <div className="stainless-steel-wrapper">
          <p className="stainless-steel">
            Stainless steel catcher tank offers a<br />
            strong build, effortless maintenance
            <br />
            and a 100-liter capacity.
          </p>
        </div>
        <div className="front-6">
          <div className="text-wrapper-10">06</div>
          <div className="stainless-steel-2">
            Stainless steel
            <br />
            Catcher tank
          </div>
        </div>
      </div>
    </div>
  );
};

Card6.propTypes = {
  property1: PropTypes.oneOf(["card-1"]),
};
