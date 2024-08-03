import PropTypes from "prop-types";
import "./Component11.css";

const Component11 = ({ className = "" }) => {
  return (
    <div className={`component-8 ${className}`}>
      <a className="menu">Menu</a>
    </div>
  );
};

Component11.propTypes = {
  className: PropTypes.string,
};

export default Component11;
