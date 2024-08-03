import Component from "./Component";
import Component1 from "./Component1";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`frame-parent5 ${className}`}>
      <div className="container">
        <div className="scrolling-wrapper">
          <Component1
            metal878346519201="/milling444493-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Milling Industry"
          />
          <Component1
            metal878346519201="/floor1735046-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Tiles"
          />
          <Component1
            metal878346519201="/soldering7897827-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Soldering"
          />
          <Component1
            metal878346519201="/pile1868894-1920-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Tyre"
          />
          <Component1
            metal878346519201="/package4275116-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Packaging"
          />
        </div>
        <div className="scrolling-wrapper">
          <Component1
            metal878346519201="/milling444493-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Milling Industry"
          />
          <Component1
            metal878346519201="/floor1735046-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Tiles"
          />
          <Component1
            metal878346519201="/soldering7897827-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Soldering"
          />
          <Component1
            metal878346519201="/pile1868894-1920-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Tyre"
          />
          <Component1
            metal878346519201="/package4275116-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Packaging"
          />
        </div>
      </div>
      <div className="frame-parent6">
        <div className="group-container">
          <img className="group-icon19" alt="" src="/group-18.svg" />
          <div className="our-clients">OUR CLIENTS</div>
        </div>
        <div className="line">
          <div className="frame-parent7">
            <div className="rectangle-parent">
              <div className="rectangle-div" />
              <div className="frame-wrapper2">
                <div className="client-logo-names-parent">
                  <div className="wrapper">
                    <img className="icon2" alt="" src="/1-2@2x.png" />
                  </div>
                  <h2 className="universal-fabrication">
                    Universal fabrication
                  </h2>
                </div>
              </div>
            </div>
            <div className="rectangle-div" />
          </div>
          <div className="client-logo-pair">
            <div className="client-logo-pair-inner">
              <div className="client-logo-names-parent">
                <div className="client-logo-names">
                  <div className="client-logo-name-pair">
                    <img
                      className="image-6-icon"
                      loading="lazy"
                      alt=""
                      src="/image-6@2x.png"
                    />
                  </div>
                </div>
                <h2 className="bridge-health-care">Bridge Health Care</h2>
              </div>
            </div>
            <div className="rectangle-div" />
          </div>
          <div className="client-logo-pair1">
            <div className="client-logo-pair-inner1">
              <div className="client-logo-names-parent">
                <div className="client-logo-names">
                  <div className="div20">
                    <img
                      className="image-10-icon"
                      loading="lazy"
                      alt=""
                      src="/image-10@2x.png"
                    />
                  </div>
                </div>
                <h2 className="universal-fabrication">IIT Madras</h2>
              </div>
            </div>
            <div className="rectangle-div" />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
