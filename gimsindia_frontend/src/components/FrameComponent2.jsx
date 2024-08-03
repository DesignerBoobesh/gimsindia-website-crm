import Component1 from "./Component1";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`frame-wrapper1 ${className}`}>
      <div className="container">
        <div className="scrolling-wrapper">
          <Component1
            metal878346519201="/airplane4974674-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Aerospace"
          />
          <Component1
            metal878346519201="/building8131378-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Civil Works"
          />
          <Component1
            metal878346519201="/industry3099209-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Automotive"
          />
          <Component1
            metal878346519201="/grenade7107-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Grenade"
          />
          <Component1
            metal878346519201="/metal8783465-1920-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Metal Industry"
          />
        </div>
        <div className="scrolling-wrapper">
          <Component1
            metal878346519201="/airplane4974674-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Aerospace"
          />
          <Component1
            metal878346519201="/building8131378-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Civil Works"
          />
          <Component1
            metal878346519201="/industry3099209-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Automotive"
          />
          <Component1
            metal878346519201="/grenade7107-1280-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Grenade"
          />
          <Component1
            metal878346519201="/metal8783465-1920-1@2x.png"
            rectangle39479="/rectangle-39479.svg"
            metalIndustry="Metal Industry"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
