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
            <div className="benefit-values">
              <h3 className="x-fastest-cutting-container">
                <p className="x-fastest">Customized</p>
                <p className="x-fastest">Pressure varient</p>
              </h3>
            </div>
            <div className="benefit-values">
              <h3 className="x-fastest-cutting-container">
                <p className="x-fastest">Multiple industries</p>
                <p className="x-fastest">Application</p>
              </h3>
            </div>
            <div className="benefit-values">
              <div className="x-fastest-cutting-container">
                <p className="x-fastest">50% Co2</p>
                <p className="x-fastest">savings</p>
              </div>
            </div>
          </div>
        </div>
        <div className="benefit-visual">
          <div className="visual-element">
            <div className="visual-shape" />
          </div>
          <div className="benefit-items">
            <div className="benefit-values">
              <h3 className="x-fastest-cutting-container">
                <p className="x-fastest">Economics</p>
                <p className="x-fastest">pricing</p>
              </h3>
            </div>
            <div className="benefit-values">
              <h3 className="x-fastest-cutting-container">
                <p className="x-fastest">Compact</p>
                <p className="x-fastest">foot print</p>
              </h3>
            </div>
            <div className="benefit-values">
              <div className="x-fastest-cutting-container">
                <p className="x-fastest">Less</p>
                <p className="x-fastest">Noise</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="divider-shape">
          <div className="visual-shape" />
        </div> */}
      </div>
    </div>
  );
};

KeyBenefits.propTypes = {
  className: PropTypes.string,
};

export default KeyBenefits;
