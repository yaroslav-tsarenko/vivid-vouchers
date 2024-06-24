import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Features.css";

const Features = ({
  className = "",
  convenientFastAndPersonal,
  receiveDigitalGiftCardsWi,
  physicalGiftCardsDelivere,
  findThePerfectGiftWithOur,
  propWidth,
  propPadding,
  propFlex,
  propDisplay,
}) => {
  const featureIconsStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const receiveDigitalGiftStyle = useMemo(() => {
    return {
      flex: propFlex,
      display: propDisplay,
    };
  }, [propFlex, propDisplay]);

  return (
    <div className={`features ${className}`}>
      <div className="feature-icons1">
        <img className="vector-icon6" loading="lazy" alt="" src="/vector.svg" />
        <div className="convenient-fast-and">{convenientFastAndPersonal}</div>
      </div>
      <div className="feature-icons2" style={featureIconsStyle}>
        <img className="vector-icon7" alt="" src="/vector.svg" />
        <div className="receive-digital-gift" style={receiveDigitalGiftStyle}>
          {receiveDigitalGiftCardsWi}
        </div>
      </div>
      <div className="feature-icons3">
        <img className="vector-icon8" alt="" src="/vector.svg" />
        <div className="physical-gift-cards">{physicalGiftCardsDelivere}</div>
      </div>
      <div className="feature-icons4">
        <img className="vector-icon9" alt="" src="/vector.svg" />
        <div className="find-the-perfect">{findThePerfectGiftWithOur}</div>
      </div>
    </div>
  );
};

Features.propTypes = {
  className: PropTypes.string,
  convenientFastAndPersonal: PropTypes.string,
  receiveDigitalGiftCardsWi: PropTypes.string,
  physicalGiftCardsDelivere: PropTypes.string,
  findThePerfectGiftWithOur: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default Features;
