import MenuButton from "./MenuButton";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`footer-content-wrapper ${className}`}>
      <div className="footer-content">
        <div className="footer-top">
          <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
          <div className="footer-divider" />
          <div className="footer-information">
            <div className="company-details">
              <div className="company-name">
                <div className="guhan-industrial-and-container">
                  <p className="guhan-industrial-and">
                    Guhan Industrial and manufacturing
                  </p>
                  <p className="guhan-industrial-and">{`Solution pvt ltd `}</p>
                </div>
              </div>
              <MenuButton />
            </div>
          </div>
        </div>
        <div className="product-showcase">
          <div className="showcase-content">
            <div className="product-highlight">
              <img className="subtract-icon" alt="" src="/subtract.svg" />
              <img
                className="product-highlight-child"
                alt=""
                src="/group-1686553533.svg"
              />
              <div className="katana">{`KATANA `}</div>
              <div className="frame-parent4">
                <div className="group-parent">
                  <img className="group-icon1" alt="" src="/group1@2x.png" />
                  <div className="frame-child" />
                  <div className="frame-item" />
                </div>
                <div className="frame-inner" />
                <div className="ellipse-div" />
                <div className="frame-child1" />
                <div className="frame-child2" />
                <img
                  className="mask-group-icon"
                  loading="lazy"
                  alt=""
                  src="/mask-group@2x.png"
                />
                <img className="r6-2-icon" alt="" src="/r6-2@2x.png" />
              </div>
            </div>
            <div className="series">Series</div>
            <div className="slogan-container">
              <div className="explore-the-suspension-tech-parent">
                <div className="explore-the-suspension">
                  Explore the suspension tech
                </div>
                <div className="katana-series">Katana Series</div>
              </div>
            </div>
          </div>
          <button className="brochure-download">
            <div className="download-container">
              <img className="download-button-icon" alt="" src="/frame-1.svg" />
            </div>
            <b className="download-boucher">Download Brochure</b>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
