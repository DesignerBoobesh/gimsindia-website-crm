import PropTypes from "prop-types";
import "./Component11.css";

const Component11 = ({ className = '', onClick }) => {
  return (
    <div className={`component-8 ${className}`} onClick={onClick}>
      <a className="menu">Menu</a>
    </div>
  );
};

Component11.propTypes = {
  className: PropTypes.string,
};

export default Component11;
