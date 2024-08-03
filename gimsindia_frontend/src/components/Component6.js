import Front from "./Front";
import PropTypes from "prop-types";
import "./Component6.css";

const Component6 = ({ className = "" }) => {
  return (
    <div className={`component-25 ${className}`}>
      <div className="back2">
        <div className="background-pair4" />
        <div className="precision-grade-ball-screw-container">
          <p className="precision-grade-ball-screw">
            Precision-grade ball screw provides
          </p>
          <p className="precision-grade-ball-screw">
            excellent positional accuracy,
          </p>
          <p className="precision-grade-ball-screw">
            repeatability, and low backlash
          </p>
        </div>
      </div>
      <Front
        propLeft="100.2px"
        highPerformance="Precision Traverse"
        motorsAndDrivers="System"
        frontDescription="03"
      />
    </div>
  );
};

Component6.propTypes = {
  className: PropTypes.string,
};

export default Component6;
