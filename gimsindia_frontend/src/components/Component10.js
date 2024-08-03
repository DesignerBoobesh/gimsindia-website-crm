import PropTypes from "prop-types";
import "./Component10.css";

const Component10 = ({ className = "" }) => {
  return (
    <div className={`component-9 ${className}`}>
      <a className="contact2">Contact</a>
    </div>
  );
};

Component10.propTypes = {
  className: PropTypes.string,
};

export default Component10;
