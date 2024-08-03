import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Front.css";

const Front = ({
  className = "",
  propLeft,
  highPerformance,
  motorsAndDrivers,
  frontDescription,
}) => {
  const highPerformanceMotorsContainerStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={`front1 ${className}`}>
      <div className="background-pair2" />
      <div
        className="high-performance-motors-container"
        style={highPerformanceMotorsContainerStyle}
      >
        <p className="high-performance">{highPerformance}</p>
        <p className="high-performance">{motorsAndDrivers}</p>
      </div>
      <div className="front-description1">{frontDescription}</div>
    </div>
  );
};

Front.propTypes = {
  className: PropTypes.string,
  highPerformance: PropTypes.string,
  motorsAndDrivers: PropTypes.string,
  frontDescription: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default Front;
