import Front from "./Front";
import PropTypes from "prop-types";
import "./Component7.css";

const Component7 = ({ className = "" }) => {
  return (
    <div className={`component-23 ${className}`}>
      <div className="back1">
        <div className="background-pair3" />
        <div className="hybrid-servo-stepper-container">
          <p className="hybrid-servo-stepper">
            Hybrid servo stepper in the closed-loop
          </p>
          <p className="hybrid-servo-stepper">
            control system ensures accurate
          </p>
          <p className="hybrid-servo-stepper">movement and lower energy</p>
          <p className="hybrid-servo-stepper">consumption</p>
        </div>
      </div>
      <Front
        highPerformance="High Performance"
        motorsAndDrivers="motors and drivers"
        frontDescription="02"
      />
    </div>
  );
};

Component7.propTypes = {
  className: PropTypes.string,
};

export default Component7;
