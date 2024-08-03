import PropTypes from "prop-types";
import "./Component12.css";

const Component12 = ({ className = '', onClick }) => {
  return (
    <div className={`component-7 ${className}`} onClick={onClick}>
      <a className="home">Home</a>
    </div>
  );
};

Component12.propTypes = {
  className: PropTypes.string,
};

export default Component12;
