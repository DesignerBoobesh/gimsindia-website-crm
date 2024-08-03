import PropTypes from "prop-types";
import "./KeyBenefits.css";

const KeyBenefits = ({ className = "" }) => {
  return (
    <div className={`key-benefits ${className}`}>
      <div className="benefit-list">
        <div className="benefit-items">
          <div className="benefit-values">
            <h3 className="x-fastest-cutting-container">
              <p className="x-fastest">3x Fastest</p>
              <p className="x-fastest">cutting time</p>
            </h3>
          </div>
          <div className="benefit-values">
            <h3 className="x-fastest-cutting-container">
              <p className="x-fastest">High quality</p>
              <p className="x-fastest">cutting finish</p>
            </h3>
          </div>
          <div className="benefit-values">
            <h3 className="x-fastest-cutting-container">
              <p className="x-fastest">70% energy</p>
              <p className="x-fastest">savings</p>
            </h3>
          </div>
        </div>
        <div className="benefit-visual">
          <div className="visual-element">
            <div className="visual-shape" />
          </div>
          <div className="benefit-items">
            <div className="benefit-values-two">
              <h3 className="x-fastest-cutting-container">
                <p className="x-fastest">Customized</p>
                <p className="x-fastest">Pressure varient</p>
              </h3>
            </div>
            <div className="benefit-values-two1">
              <h3 className="multiple-industries-applicatio-container">
                <p className="x-fastest">Multiple industries</p>
                <p className="x-fastest">Application</p>
              </h3>
            </div>
            <div className="benefit-values">
              <div className="co2-savings">
                <p className="x-fastest">50% Co2</p>
                <p className="x-fastest">savings</p>
              </div>
            </div>
          </div>
        </div>
        <div className="divider-shape">
          <div className="visual-shape" />
        </div>
      </div>
    </div>
  );
};

KeyBenefits.propTypes = {
  className: PropTypes.string,
};

export default KeyBenefits;
