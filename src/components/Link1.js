import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link1.css";

const Link1 = ({
  className = "",
  background,
  congratulationsSmartEGift,
  card,
  propLeft,
  propTop,
}) => {
  const link1Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`link5 ${className}`} style={link1Style}>
      <img className="background-icon26" alt="" src={background} />
      <div className="congratulations-smart-egift-ca-wrapper">
        <div className="congratulations-smart-egift-container">
          <p className="congratulations-smart-egift">
            {congratulationsSmartEGift}
          </p>
          <p className="card1">{card}</p>
        </div>
      </div>
    </div>
  );
};

Link1.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  congratulationsSmartEGift: PropTypes.string,
  card: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default Link1;
