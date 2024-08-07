import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`frame-parent10 ${className}`}>
      <div className="frame-parent11">
        <div className="adderss-parent">
          <h2 className="adderss">ADDRESS</h2>
          <div className="guhan-industrial-and-manufactu-parent">
            <div className="guhan-industrial-and-container1">
              <p className="guhan-industrial-and1">
                Guhan Industrial and manufacturing
              </p>
              <p className="guhan-industrial-and1">{`Solution pvt ltd `}</p>
            </div>
            <div className="sri-sai-nagar">
              22-25, Sri Sai Nagar Main Rd, Sri Sai Nagar, Pallikaranai,
              Thoraipakkam, Chennai, Tamil Nadu 600096
            </div>
          </div>
        </div>
        <div className="contact-info">
          <h2 className="adderss">CONTACT</h2>
          <div className="admin-email">
            <div className="admingimsindiain">admin@gimsindia.in</div>
            <div className="email-content">+91 9840993730</div>
          </div>
        </div>
        <div className="social">
          <h2 className="social-media">SOCIAL MEDIA</h2>
          <div className="media">
            <img
              className="icon-placeholders"
              loading="lazy"
              alt=""
              src="/1-3.svg"
            />
            <img
              className="icon-placeholders"
              loading="lazy"
              alt=""
              src="/2-1.svg"
            />
            <img
              className="icon-placeholders"
              loading="lazy"
              alt=""
              src="/3.svg"
            />
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copyright-all-rights">
          Copyright All Rights Reserved © 2024
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
