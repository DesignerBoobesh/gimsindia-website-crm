import PropTypes from "prop-types";
import "./Component5.css";

const Component5 = ({ className = "" }) => {
  return (
    <div className={`component-27 ${className}`}>
      <div className="back3">
        <div className="back-child" />
        <div className="compact-teach-pendant-container">
          <p className="compact-teach-pendant">
            Compact teach pendant offers a more
          </p>
          <p className="compact-teach-pendant">
            user-friendly interface and is easy to
          </p>
          <p className="compact-teach-pendant">operate.</p>
        </div>
      </div>
      <div className="front2">
        <div className="front-child" />
        <div className="div">04</div>
        <div className="handley-teach-pendant">Handley Teach Pendant</div>
      </div>
    </div>
  );
};

Component5.propTypes = {
  className: PropTypes.string,
};

export default Component5;
