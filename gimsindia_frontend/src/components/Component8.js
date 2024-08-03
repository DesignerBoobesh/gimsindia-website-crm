import PropTypes from "prop-types";
import "./Component8.css";

const Component8 = ({ className = "" }) => {
  return (
    <div className={`component-21 ${className}`}>
      <div className="back">
        <div className="background-pair" />
        <div className="high-end-microcontroller-based-container">
          <p className="high-end-microcontroller-based">
            High-end microcontroller based control
          </p>
          <p className="high-end-microcontroller-based">
            system ensures smooth operation,
          </p>
          <p className="high-end-microcontroller-based">
            precise cutting quality, and high
          </p>
          <p className="high-end-microcontroller-based">realiablity.</p>
        </div>
      </div>
      <div className="front">
        <div className="background-pair1" />
        <div className="most-reliable-controller">Most Reliable Controller</div>
        <div className="front-description">01</div>
      </div>
    </div>
  );
};

Component8.propTypes = {
  className: PropTypes.string,
};

export default Component8;
