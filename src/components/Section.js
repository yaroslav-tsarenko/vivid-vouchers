import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <section className={`section1 ${className}`}>
      <div className="phone-overlaypng">
        <img
          className="image-7-icon"
          loading="lazy"
          alt=""
          src="/image-7@2x.png"
        />
        <img
          className="image-8-icon"
          loading="lazy"
          alt=""
          src="/image-8@2x.png"
        />
      </div>
      <div className="personalization-info">
        <div className="personalization-content">
          <div className="add-some-magic">Add some magic!</div>
          <h1 className="heading-23">Personalize it!</h1>
          <div className="vividvouchers-makes-personaliz-container">
            <p className="vividvouchers-makes-personaliz">
              VividVouchers makes personalized eGifting easier than ever before!
            </p>
            <p className="send-any-vividvouchers">
              Send any VividVouchers eGift Card with a personal video or voice
            </p>
            <p className="message-and-a">
              message and a greeting card, and you can even customize our
            </p>
            <p className="vividvouchers-smart-egift-card">
              <span className="vividvouchers-smart-egift">
                VividVouchers Smart eGift Card
              </span>
              <span> with your own photo!</span>
            </p>
            <p className="get-creative-and">
              Get creative and make it a stand-out gift that’s meaningful and
            </p>
            <p className="magical">magical!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
