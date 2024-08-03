import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Component1.css";

const Component1 = ({
  className = "",
  metal878346519201,
  propLeft,
  propWidth,
  rectangle39479,
  metalIndustry,
  propHeight,
  propDisplay,
}) => {
  const metal878346519201IconStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const metalIndustryStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div className={`div4 ${className}`}>
      <div className="div5">
        <img
          className="metal-8783465-1920-1-icon"
          alt=""
          src={metal878346519201}
          style={metal878346519201IconStyle}
        />
        <img className="child" loading="lazy" alt="" src={rectangle39479} />
      </div>
      <h1 className="metal-industry" style={metalIndustryStyle}>
        {metalIndustry}
      </h1>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
  metal878346519201: PropTypes.string,
  rectangle39479: PropTypes.string,
  metalIndustry: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default Component1;
