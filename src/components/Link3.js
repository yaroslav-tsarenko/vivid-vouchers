import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link3.css";

const Link3 = ({
  className = "",
  background,
  heading4ChilisGrillBarEGi,
  propAlignSelf,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={`link ${className}`}>
      <div className="background-parent">
        <img className="background-icon8" alt="" src={background} />
        <div className="card-info">
          <div className="card-tags">
            <img className="tag-icons" alt="" src="/vector-4.svg" />
            <img className="tag-top-icon" alt="" src="/vector-5.svg" />
          </div>
          <div className="tag-bottom">
            <b className="bonus">BONUS</b>
            <div className="offer-labels">
              <b className="offer">OFFER</b>
            </div>
          </div>
        </div>
      </div>
      <div className="heading-4-chilis-grill-ba-wrapper" style={frameDivStyle}>
        <b className="heading-4">{heading4ChilisGrillBarEGi}</b>
      </div>
    </div>
  );
};

Link3.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  heading4ChilisGrillBarEGi: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
};

export default Link3;
