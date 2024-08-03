import PropTypes from "prop-types";
import "./KatanaIntroduction.css";

const KatanaIntroduction = ({ className = "" }) => {
  return (
    <section className={`katana-introduction ${className}`}>
      <div className="introduction-content">
        <div className="performance-highlight">
          <div className="series-name-parent">
            <div className="series-name">
              <h1 className="introducing-katana-series">{`INTRODUCING KATANA SERIES `}</h1>
            </div>
            <h1 className="katana-series-performance">
              Katana Series Performance
            </h1>
          </div>
        </div>
        <img
          className="empty-container-icon"
          alt=""
          src="/empty-container@2x.png"
        />
      </div>
    </section>
  );
};

KatanaIntroduction.propTypes = {
  className: PropTypes.string,
};

export default KatanaIntroduction;
