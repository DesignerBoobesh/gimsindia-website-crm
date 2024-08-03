import PropTypes from "prop-types";
import "./Component4.css";

const Component4 = ({ className = "" }) => {
  return (
    <div className={`component-29 ${className}`}>
      <div className="back4">
        <div className="back-item" />
        <div className="high-strength-tungsten-carbide-container">
          <p className="high-strength-tungsten-carbide">
            High-strength tungsten carbide nozzle
          </p>
          <p className="high-strength-tungsten-carbide">
            ensures a long lifespan and is easy
          </p>
          <p className="high-strength-tungsten-carbide">to replace.</p>
        </div>
      </div>
      <div className="front3">
        <div className="front-item" />
        <div className="div1">05</div>
        <div className="tungsten-carbide-nozzle-container">
          <p className="high-strength-tungsten-carbide">Tungsten carbide</p>
          <p className="high-strength-tungsten-carbide">Nozzle</p>
        </div>
      </div>
    </div>
  );
};

Component4.propTypes = {
  className: PropTypes.string,
};

export default Component4;
