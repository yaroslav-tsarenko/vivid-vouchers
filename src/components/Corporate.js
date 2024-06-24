import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Corporate.css";

const Corporate = ({ className = "" }) => {
  return (
    <section className={`corporate ${className}`}>
      <div className="corporate-content">
        <div className="corporate-info">
          <h1 className="heading-21">Corporate Gifting?</h1>
          <div className="send-1-1000-customized">
            Send 1-1000+ customized eGift cards instantly with VividVouchers
            Business!
          </div>
        </div>
        <div className="corporate-action">
          <Button
            className="corporate-link"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#00246b",
              fontSize: "16",
              background: "#cadcfc",
              borderRadius: "5px",
              "&:hover": { background: "#cadcfc" },
              height: 46,
            }}
          >
            View all gift cards
          </Button>
        </div>
      </div>
    </section>
  );
};

Corporate.propTypes = {
  className: PropTypes.string,
};

export default Corporate;
