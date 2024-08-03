import PropTypes from "prop-types";
import "./Component9.css";

const Component9 = ({ className = "" }) => {
  return (
    <div className={`component-10 ${className}`}>
      <a className="about-us1">About us</a>
    </div>
  );
};

Component9.propTypes = {
  className: PropTypes.string,
};

export default Component9;
