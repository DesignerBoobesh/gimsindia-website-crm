import Component8 from "./Component8";
import Component7 from "./Component7";
import Component6 from "./Component6";
import Component5 from "./Component5";
import Component4 from "./Component4";
import Component3 from "./Component3";
import PropTypes from "prop-types";
import "./WaterContent.css";

const WaterContent = ({ className = "" }) => {
  return (
    <div className={`water-content ${className}`}>
      <div className="overview-container">
        <div className="group">
          <div className="group1">
            <div className="group2">
              <img
                className="element-part-icon"
                alt=""
                src="/element-part@2x.png"
              />
              <img
                className="element-part-icon1"
                alt=""
                src="/rectangle-1@2x.png"
              />
            </div>
            <img
              className="element-part-icon2"
              alt=""
              src="/rectangle-2@2x.png"
            />
            <img
              className="element-part-icon3"
              alt=""
              src="/rectangle-3@2x.png"
            />
            <img
              className="element-part-icon4"
              alt=""
              src="/rectangle-4@2x.png"
            />
            <img
              className="element-part-icon5"
              loading="lazy"
              alt=""
              src="/rectangle-5@2x.png"
            />
            <img
              className="element-part-icon6"
              alt=""
              src="/rectangle-6@2x.png"
            />
            <img
              className="element-part-icon7"
              alt=""
              src="/rectangle-7@2x.png"
            />
            <img
              className="group-icon2"
              loading="lazy"
              alt=""
              src="/group-1@2x.png"
            />
            <img
              className="element-part-icon8"
              alt=""
              src="/rectangle-8@2x.png"
            />
            <img
              className="element-part-icon9"
              alt=""
              src="/rectangle-9@2x.png"
            />
            <img
              className="element-part-icon10"
              alt=""
              src="/rectangle-10@2x.png"
            />
            <img
              className="element-part-icon11"
              alt=""
              src="/rectangle-11@2x.png"
            />
            <img
              className="element-part-icon12"
              loading="lazy"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <img
              className="element-part-icon13"
              alt=""
              src="/rectangle-13@2x.png"
            />
            <img className="group-icon3" alt="" src="/group-2@2x.png" />
            <img className="group-icon4" alt="" src="/group-3@2x.png" />
            <img className="group-icon5" alt="" src="/group-4@2x.png" />
            <img className="group-icon6" alt="" src="/group-5@2x.png" />
            <img className="group-icon7" alt="" src="/group-6@2x.png" />
            <img className="group-icon8" alt="" src="/group-7@2x.png" />
            <img
              className="rectangle-icon1"
              loading="lazy"
              alt=""
              src="/rectangle-14@2x.png"
            />
            <div className="group-group">
              <img className="group-icon9" alt="" src="/group-8@2x.png" />
              <img
                className="front-view-icon"
                alt=""
                src="/rectangle-15@2x.png"
              />
            </div>
            <div className="katana-sj150-overview">KATANA SJ150 OVERVIEW</div>
            <div className="sj150">SJ150</div>
            <img className="front-view-1" alt="" src="/front-view-1@2x.png" />
          </div>
        </div>
        <div className="group3">
          <div className="group4">
            <div className="group5">
              <img
                className="element-part-icon14"
                alt=""
                src="/rectangle-16@2x.png"
              />
              <img
                className="element-part-icon15"
                alt=""
                src="/rectangle-17@2x.png"
              />
            </div>
            <img
              className="element-part-icon16"
              alt=""
              src="/rectangle-18@2x.png"
            />
            <img
              className="element-part-icon17"
              alt=""
              src="/rectangle-19@2x.png"
            />
            <img
              className="element-part-icon18"
              alt=""
              src="/rectangle-20@2x.png"
            />
            <img
              className="element-part-icon19"
              loading="lazy"
              alt=""
              src="/rectangle-21@2x.png"
            />
            <img
              className="element-part-icon20"
              alt=""
              src="/rectangle-22@2x.png"
            />
            <img
              className="element-part-icon21"
              alt=""
              src="/rectangle-23@2x.png"
            />
            <img
              className="group-icon10"
              loading="lazy"
              alt=""
              src="/group-9@2x.png"
            />
            <img
              className="element-part-icon22"
              alt=""
              src="/rectangle-24@2x.png"
            />
            <img
              className="element-part-icon23"
              alt=""
              src="/rectangle-25@2x.png"
            />
            <img
              className="element-part-icon24"
              alt=""
              src="/rectangle-26@2x.png"
            />
            <img
              className="element-part-icon25"
              alt=""
              src="/rectangle-27@2x.png"
            />
            <img
              className="element-part-icon26"
              loading="lazy"
              alt=""
              src="/rectangle-28@2x.png"
            />
            <img
              className="rectangle-icon2"
              alt=""
              src="/rectangle-29@2x.png"
            />
            <img className="group-icon11" alt="" src="/group-10@2x.png" />
            <img className="group-icon12" alt="" src="/group-11@2x.png" />
            <img className="group-icon13" alt="" src="/group-12@2x.png" />
            <img className="group-icon14" alt="" src="/group-13@2x.png" />
            <img className="group-icon15" alt="" src="/group-14@2x.png" />
            <img className="group-icon16" alt="" src="/group-15@2x.png" />
            <img className="group-icon17" alt="" src="/group-16@2x.png" />
            <img
              className="rectangle-icon3"
              alt=""
              src="/rectangle-30@2x.png"
            />
            <img
              className="rectangle-icon4"
              alt=""
              src="/rectangle-31@2x.png"
            />
            <div className="component-21-parent">
              <Component8 />
              <Component7 />
              <Component6 />
            </div>
            <div className="component-27-parent">
              <Component5 />
              <Component4 />
              <Component3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WaterContent.propTypes = {
  className: PropTypes.string,
};

export default WaterContent;
