import Component2 from "./Component2";
import PropTypes from "prop-types";
import "./SpecificationContainer.css";

const SpecificationContainer = ({ className = "" }) => {
  return (
    <div className={`specification-container ${className}`}>
      <Component2 />
      <div className="industrial-application-wrapper">
        <div className="industrial-application">INDUSTRIAL APPLICATION</div>
      </div>
    </div>
  );
};

SpecificationContainer.propTypes = {
  className: PropTypes.string,
};

export default SpecificationContainer;
