import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <div className="form-container-wrapper">
        <div className="form-container">
          <img
            className="form-padding-icon"
            loading="lazy"
            alt=""
            src="/frame-1000006877@2x.png"
          />
          <div className="footer-note">
            <div className="powered-by-parent">
              <div className="powered-by">{`Powered by `}</div>
              <img
                className="payment-icons"
                loading="lazy"
                alt=""
                src="/payment-icons@2x.png"
              />
            </div>
            <img
              className="footer-graphic-icon"
              loading="lazy"
              alt=""
              src="/vector-341.svg"
            />
            <div className="legal">Legal</div>
            <div className="refunds">Refunds</div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="frame-item" />
        <div className="contact-info">
          <div className="contact-labels">
            <div className="contact-information">Contact Information</div>
            <TextField
              className="form-field"
              placeholder="Email"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#d9d9d9" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#fff",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
          </div>
          <h3 className="payment-information">Payment Information</h3>
          <div className="card-details">
            <div className="card-information">Card Information</div>
            <div className="form-field1">
              <div className="card-number-placeholder">1234 1234 1234 1234</div>
              <div className="card-number-icons">
                <img
                  className="card-icons"
                  loading="lazy"
                  alt=""
                  src="/frame-1000006882@2x.png"
                />
                <img
                  className="card-icons1"
                  loading="lazy"
                  alt=""
                  src="/frame-1000006883@2x.png"
                />
                <img
                  className="card-icons2"
                  loading="lazy"
                  alt=""
                  src="/frame-1000006884@2x.png"
                />
              </div>
              <img className="icon" alt="" src="/icon.svg" />
            </div>
            <div className="expiry-date1">
              <TextField
                className="form-field2"
                placeholder="MM/YY"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "54px",
                    backgroundColor: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#d9d9d9" },
                }}
              />
              <TextField
                className="form-field3"
                placeholder="MM/YY"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "54px",
                    backgroundColor: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#d9d9d9" },
                }}
              />
            </div>
          </div>
          <div className="contact-labels1">
            <div className="carholder-name">Carholder Name</div>
            <TextField
              className="form-field4"
              placeholder="Name on Card"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#d9d9d9" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#fff",
                },
                "& .MuiInputBase-input": { color: "#d9d9d9" },
              }}
            />
          </div>
          <div className="country-or-region-parent">
            <div className="country-or-region">Country or region</div>
            <div className="form-field5">
              <div className="usa">USA</div>
              <img className="region-icon" alt="" src="/region-icon.svg" />
              <img className="icon1" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="verification-padding-parent">
            <input className="verification-padding" type="checkbox" />
            <div className="i-verified-that">
              I verified that my device is eSIM compatible and is not carrier
              locked and i agree to the refund policy.
            </div>
          </div>
          <img
            className="verification-graphic-icon"
            loading="lazy"
            alt=""
            src="/vector-342.svg"
          />
          <div className="i-verified-that1">
            I verified that my device is eSIM compatible and is not carrier
            locked and i agree to the refund policy.
          </div>
          <Button
            className="button5"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00246b",
              borderRadius: "4px",
              "&:hover": { background: "#00246b" },
              height: 54,
            }}
          >
            Pay Now
          </Button>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
