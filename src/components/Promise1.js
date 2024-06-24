import Features from "./Features";
import PropTypes from "prop-types";
import "./Promise1.css";

const Promise1 = ({ className = "" }) => {
  return (
    <section className={`promise ${className}`}>
      <div className="promise-content">
        <div className="promise-info">
          <div className="promise-description">
            <div className="our-vividvouchers-promise">
              Our VividVouchers Promise
            </div>
            <div className="heading-24">eGift cards for every occasion</div>
            <Features
              convenientFastAndPersonal="No fees!"
              receiveDigitalGiftCardsWi="Delivered Instantly or at you scheduled time by SMS or email"
              physicalGiftCardsDelivere="Keep your cards at your fingertips with the digital wallet"
              findThePerfectGiftWithOur="No more plastic gift cards for landfill"
              propWidth="unset"
              propPadding="unset"
              propFlex="unset"
              propDisplay="unset"
            />
            <div className="with-online-gift-container">
              <p className="with-online-gift-cards-from-10">
                <span>
                  <span className="with-online-gift">
                    With online gift cards from 100s of top retailers across the
                    country including
                  </span>
                </span>
              </p>
              <p className="nordstrom-barnes-noble-and">
                <span>
                  <span className="nordstrom-barnes">{`Nordstrom, Barnes & Noble, and Kohl’s there’s something for everyone.`}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="phone-overlaypng1">
          <img className="image-7-icon1" alt="" src="/image-7@2x.png" />
          <img className="image-8-icon1" alt="" src="/image-8@2x.png" />
        </div>
      </div>
    </section>
  );
};

Promise1.propTypes = {
  className: PropTypes.string,
};

export default Promise1;
