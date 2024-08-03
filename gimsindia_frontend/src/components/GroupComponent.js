import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <section className={`group-section ${className}`}>
      <div className="splash-of-water-on-transparent-parent">
        <img
          className="splash-of-water-on-transparent"
          alt=""
          src="/splash-of-water-on-transparent-background-1@2x.png"
        />
        <img
          className="splash-of-water-on-transparent1"
          alt=""
          src="/splash-of-water-on-transparent-background-2@2x.png"
        />
      </div>
      <div className="contact-container">
        <div className="contact1">CONTACT</div>
      </div>
      <div className="contact-form-fields-parent">
        <div className="contact-form-fields">
          <div className="contact-form-title">
            <h2 className="contact-form">Contact form</h2>
          </div>
          <div className="question-prompt">
            <div className="you-have-questions">
              You have questions about Consus and our service? Feel free to
              contact us!
            </div>
          </div>
          <div className="form-field-rows">
            <div className="form-field-row">
              <label htmlFor="name">Name <span className="span">*</span></label>
              <input type="text" id="name" name="name" required />
            </div>
          </div>
          <div className="form-field-rows">
            <div className="form-field-row">
              <label htmlFor="email">Email <span className="span">*</span></label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-field-rows2">
            <div className="form-field-row">
              <label htmlFor="phone">Phone <span className="span">*</span></label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </div>
          <div className="message-field">
            <textarea
              id="message"
              name="message"
              className="message-input"
              placeholder="Write message here*"
              rows={17}
              cols={55}
              required
            />
          </div>
          <div className="data-usage-parent">
            <div className="data-usage">
              <input
                id="data-usage"
                className="frame"
                type="checkbox"
                name="data-usage"
                required
              />
            </div>
            <div className="we-use-your-container">
              <p className="we-use-your">
                We use your data exclusively for your enquiry from this contact
                form, your data will not be used for any other purpose and in
                particular
              </p>
              <p className="we-use-your">
                will not be passed on to third parties. I hereby declare my
                consent to the collection of my above-mentioned data for the
                purpose of
              </p>
              <p className="we-use-your">contacting me via this form</p>
            </div>
            <div>
            <div className="mandatory-field">* Mandatory field</div>
            </div>
          </div>
          </div>
          <div className="submit-button">
            <button className="submit-container">
              <b className="submit">Submit</b>
            </button>
          </div>
        </div>
    </section>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
