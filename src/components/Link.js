import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link.css";

const Link = ({
  className = "",
  background,
  heading4KrogerEGiftCard,
  propLeft,
  propTextDecoration,
}) => {
  const link2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const newArrivalStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={`link6 ${className}`} style={link2Style}>
      <img className="background-icon27" alt="" src={background} />
      <div className="link-inner1">
        <div className="heading-4-kroger-egift-card-parent">
          <div className="heading-43">{heading4KrogerEGiftCard}</div>
          <div className="heading-53">
            <div className="new-arrival" style={newArrivalStyle}>
              New Arrival
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  heading4KrogerEGiftCard: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default Link;
