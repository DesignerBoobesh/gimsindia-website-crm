import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Component.css";

const Component = ({
  className = "",
  milling44449312801,
  propLeft,
  propWidth,
  rectangle39479,
  millingIndustry,
}) => {
  const milling44449312801IconStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  return (
    <div className={`div14 ${className}`}>
      <div className="div15">
        <img
          className="milling-444493-1280-1-icon"
          alt=""
          src={milling44449312801}
          style={milling44449312801IconStyle}
        />
        <img className="child3" alt="" src={rectangle39479} />
      </div>
      <div className="milling-industry-wrapper">
        <h1 className="milling-industry">{millingIndustry}</h1>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  milling44449312801: PropTypes.string,
  rectangle39479: PropTypes.string,
  millingIndustry: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Component;
