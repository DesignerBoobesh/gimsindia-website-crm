import Component1 from "./Component1";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  const images = [
    {
      src: "/airplane4974674-1280-1@2x.png",
      text: "Aerospace",
    },
    {
      src: "/building8131378-1280-1@2x.png",
      text: "Civil Works",
    },
    {
      src: "/industry3099209-1280-1@2x.png",
      text: "Automotive",
    },
    {
      src: "/grenade7107-1280-1@2x.png",
      text: "Grenade",
    },
    {
      src: "/metal8783465-1920-1@2x.png",
      text: "Metal Industry",
    },
  ];

  return (
    <div className={`frame-wrapper1 ${className}`}>
      <div className="scrolling-wrapper">
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
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
