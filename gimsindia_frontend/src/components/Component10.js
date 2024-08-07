import PropTypes from "prop-types";
import "./Component10.css";

const Component10 = ({ className = "", onClick }) => {
  return (
    <div className={`component-9 ${className}`}>
      <div className="contact2">Contact</div>
    </div>
  );
};

Component10.propTypes = {
  className: PropTypes.string,
};

export default Component10;
