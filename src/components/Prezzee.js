import { Button } from "@mui/material";
import Link3 from "./Link3";
import PropTypes from "prop-types";
import "./Prezzee.css";

const Prezzee = ({ className = "" }) => {
  return (
    <section className={`prezzee ${className}`}>
      <div className="prezzee-content">
        <div className="prezzee-header">
          <div className="heading-22">There’s a VividVouchers for that</div>
          <div className="prezzee-actions">
            <div className="prezzee-buttons">
              <div className="wrapper-button">
                <img
                  className="button-icon1"
                  loading="lazy"
                  alt=""
                  src="/button.svg"
                />
              </div>
              <div className="wrapper-button1">
                <img className="button-icon2" alt="" src="/button-1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="whether-its-a">
          Whether it's a favorite brand, a gift of choice or even a mix of both,
          we've got you covered!
        </div>
        <div className="prezzee-cards">
          <div className="link1">
            <div className="background4">
              <img
                className="bass-pro-shops-usjpg-icon"
                loading="lazy"
                alt=""
                src="/bassproshopsusjpg@2x.png"
              />
            </div>
            <div className="card-titles">
              <b className="heading-41">VividVouchers Smart eGift Card</b>
              <div className="heading-5">
                <div className="giftees-favorite">Giftees' favorite!</div>
              </div>
            </div>
          </div>
          <div className="link2">
            <img
              className="background-icon9"
              alt=""
              src="/background-1@2x.png"
            />
            <div className="burlington-mothers-day-egif-wrapper">
              <b className="burlington-mothers-container">
                <p className="burlington-mothers">Burlington - Mother's Day</p>
                <p className="egift-card">eGift Card</p>
              </b>
            </div>
          </div>
          <div className="link3">
            <img
              className="background-icon10"
              alt=""
              src="/background-2@2x.png"
            />
            <div className="link-inner">
              <div className="heading-4-tennis-smart-egift-parent">
                <b className="heading-42">Tennis Smart eGift Card</b>
                <div className="heading-51">
                  <div className="celebrate-tennis-season">
                    Celebrate Tennis Season
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link3
            background="/background-3@2x.png"
            heading4ChilisGrillBarEGi={`Chili's Grill & Bar eGift Card`}
          />
          <Link3
            background="/background-4@2x.png"
            heading4ChilisGrillBarEGi="Fanatics Gift Card"
            propAlignSelf="unset"
          />
          <Link3
            background="/background-5@2x.png"
            heading4ChilisGrillBarEGi="Bass Pro Shops eGift Card"
            propAlignSelf="stretch"
          />
        </div>
        <Button
          className="prezzee-card-action"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#00246b",
            borderRadius: "5px",
            "&:hover": { background: "#00246b" },
            width: 183,
            height: 46,
          }}
        >
          View all gift cards
        </Button>
      </div>
    </section>
  );
};

Prezzee.propTypes = {
  className: PropTypes.string,
};

export default Prezzee;
