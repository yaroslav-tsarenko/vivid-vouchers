import { Button } from "@mui/material";
import Features from "./Features";
import PropTypes from "prop-types";
import "./Info.css";

const Info = ({ className = "" }) => {
  return (
    <section className={`info ${className}`}>
      <div className="description">
        <h1 className="find-the-widest-container">
          <p className="find-the-widest">Find the widest range of</p>
          <p className="gift-cards-at">gift cards at Vivid Vouchers</p>
        </h1>
        <Features
          convenientFastAndPersonal="Convenient, fast and personalised corporate gifting"
          receiveDigitalGiftCardsWi="Receive digital gift cards within minutes of ordering"
          physicalGiftCardsDelivere="Physical gift cards delivered directly to your doorstep"
          findThePerfectGiftWithOur="Find the perfect gift with our collection of over 130 gift cards"
        />
        <div className="actions1">
          <Button
            className="action-links"
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
          <Button
            className="action-links1"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#00246b",
              fontSize: "16",
              borderColor: "#00246b",
              borderRadius: "5px",
              "&:hover": { borderColor: "#00246b" },
              height: 46,
            }}
          >
            Check your balance
          </Button>
        </div>
      </div>
      <img
        className="gc-uk-home-image-bannerpng-icon"
        loading="lazy"
        alt=""
        src="/gcukhomeimagebannerpng@2x.png"
      />
    </section>
  );
};

Info.propTypes = {
  className: PropTypes.string,
};

export default Info;
