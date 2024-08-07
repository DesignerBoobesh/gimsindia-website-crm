import Component1 from "./Component1";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  const images = [
    {
      src: "/milling444493-1280-1@2x.png",
      text: "Milling Industry",
    },
    {
      src: "/floor1735046-1280-1@2x.png",
      text: "Tiles",
    },
    {
      src: "/soldering7897827-1280-1@2x.png",
      text: "Soldering",
    },
    {
      src: "/pile1868894-1920-1@2x.png",
      text: "Tyre",
    },
    {
      src: "/package4275116-1280-1@2x.png",
      text: "Packaging",
    },
  ];

  return (
    <section className={`frame-parent5 ${className}`}>
      <div className="container">
        <div className="scrolling-wrapper-1">
          {[...images, ...images].map((image, index) => (
            <Component1
              key={index}
              metal878346519201={image.src}
              rectangle39479="/rectangle-39479.svg"
              metalIndustry={image.text}
            />
          ))}
        </div>
      </div>
      <div className="frame-parent6">
        <br />
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
