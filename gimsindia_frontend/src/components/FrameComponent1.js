import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`pricing-points-wrapper ${className}`}>
      <div className="pricing-points">
        <div className="pricing-values">
          <h3 className="economics-prizing">
            <p className="economics">Economics</p>
            <p className="economics">prizing</p>
          </h3>
        </div>
        <div className="pricing-values">
          <h3 className="economics-prizing">
            <p className="economics">Compact</p>
            <p className="economics">foot print</p>
          </h3>
        </div>
        <div className="pricing-values2">
          <h3 className="less-noise">Less noise</h3>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
