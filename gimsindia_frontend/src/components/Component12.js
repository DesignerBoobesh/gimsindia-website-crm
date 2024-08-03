import PropTypes from "prop-types";
import "./Component12.css";

const Component12 = ({ className = "" }) => {
  return (
    <button className={`component-7 ${className}`}>
      <a className="home">Home</a>
    </button>
  );
};

Component12.propTypes = {
  className: PropTypes.string,
};

export default Component12;
