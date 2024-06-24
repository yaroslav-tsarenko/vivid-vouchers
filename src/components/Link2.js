import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link2.css";

const Link2 = ({
  className = "",
  background,
  backToSchoolSmartEGift,
  celebrateBackToSchool,
  propTop,
  propLeft,
  propDisplay,
  propMinWidth,
}) => {
  const linkStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const celebrateBackToStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={`link4 ${className}`} style={linkStyle}>
      <img className="background-icon25" alt="" src={background} />
      <div className="link-child">
        <div className="back-to-school-smart-egift-car-parent">
          <div className="back-to-school-container">
            <p className="back-to-school">{backToSchoolSmartEGift}</p>
            <p className="card">Card</p>
          </div>
          <div className="heading-52">
            <div className="celebrate-back-to" style={celebrateBackToStyle}>
              {celebrateBackToSchool}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Link2.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  backToSchoolSmartEGift: PropTypes.string,
  celebrateBackToSchool: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Link2;
