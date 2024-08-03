import PropTypes from "prop-types";
import "./Component2.css";

const Component2 = ({ className = "" }) => {
  return (
    <div className={`component-35 ${className}`}>
      <img className="component-35-child" alt="" src="/vector-60-1.svg" />
      <div className="specification-content-wrapper">
        <div className="specification-content">
          <div className="katana-series-specification">
            KATANA SERIES SPECIFICATION
          </div>
          <div className="parameter-header">
            <div className="parameters-processing">{`Parameters & Processing`}</div>
          </div>
        </div>
      </div>
      <div className="parameter-list">
        <div className="parameter-item">
          <div className="parameter-content">
            <div className="parameter-details">
              <div className="div3">
                <div className="katana-sj150-parent">
                  <b className="katana-sj150">KATANA SJ150</b>
                  <b className="katana-sj150">KATANA SJ450</b>
                  <b className="katana-sj150">KATANA SJ700</b>
                </div>
              </div>
              <div className="parameter-value">
                <div className="value-content">
                  <img className="group-icon18" alt="" src="/group-17.svg" />
                  <div className="operation-pressure-container">
                    <p className="bed-size-customisable">
                      Operation pressure  : 150 Bar
                    </p>
                    <p className="bed-size-customisable">
                      Pump specification : 2 HP
                    </p>
                    <p className="bed-size-customisable">
                      Bed size : customisable
                    </p>
                    <p className="bed-size-customisable">
                      Water consumption : 3 LPM
                    </p>
                    <p className="bed-size-customisable">
                      Abrasive consumption : 300 GPM
                    </p>
                    <p className="bed-size-customisable">
                      Gantry Linear speed  : 1500 mm/min
                    </p>
                    <p className="bed-size-customisable">
                      Customized for : Reasearch and education institute
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="model-image">
            <div className="image-placeholder-parent">
              <img
                className="image-placeholder-icon"
                loading="lazy"
                alt=""
                src="/1@2x.png"
              />
              <div className="image-content-wrapper">
                <img
                  className="image-content-icon"
                  loading="lazy"
                  alt=""
                  src="/2@2x.png"
                />
              </div>
              <div className="image-holder">
                <div className="katana-unit">
                  <img
                    className="katana-unit-2"
                    loading="lazy"
                    alt=""
                    src="/katana-unit-2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parameter-list-inner">
          <div className="parent">
            <img className="icon" loading="lazy" alt="" src="/4.svg" />
            <div className="frame-wrapper">
              <div className="ellipse-parent">
                <div className="frame-child3" />
                <div className="ellipse-wrapper">
                  <div className="frame-child4" />
                </div>
                <div className="ellipse-wrapper">
                  <div className="frame-child5" />
                </div>
              </div>
            </div>
            <img className="icon1" loading="lazy" alt="" src="/1-1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
};

export default Component2;
