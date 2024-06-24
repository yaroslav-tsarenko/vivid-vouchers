import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Footer1.css";

const Footer1 = ({ className = "" }) => {
  return (
    <footer className={`footer3 ${className}`}>
      <div className="container6">
        <div className="frame-parent6">
          <div className="f-a-qs-title-wrapper">
            <div className="f-a-qs-title">
              <div className="want-to-know3">Want to know more?</div>
              <div className="list9">
                <div className="item-link-container6">
                  <p className="faqs3">FAQs</p>
                  <p className="scam-warning3">Scam Warning</p>
                  <p className="contact-us3">Contact Us</p>
                  <p className="about-us3">About Us</p>
                  <p className="careers3">Careers</p>
                  <p className="board-of-directors3">Board of Directors</p>
                  <p className="retailer-inquiries3">Retailer Inquiries</p>
                  <p className="gift-tracker3">Gift Tracker</p>
                </div>
              </div>
            </div>
          </div>
          <div className="vividvouchers-inc-all3">
            © 2024 VividVouchers Inc. All rights reserved.
          </div>
        </div>
        <div className="container-child">
          <div className="the-boring-stuff-group">
            <div className="the-boring-stuff3">The boring stuff...</div>
            <div className="list10">
              <div className="item-link-container7">
                <p className="terms-of-sale3">Terms of Sale</p>
                <p className="terms-of-service3">Terms of Service</p>
                <p className="privacy-policy3">Privacy Policy</p>
                <p className="promotion-terms3">Promotion Terms</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-social2">
          <div className="hang-with-us-parent">
            <div className="hang-with-us3">Hang with us!</div>
            <div className="list11">
              <div className="item-link39">
                <img
                  className="background-icon39"
                  alt=""
                  src="/background-6.svg"
                />
                <div className="blog3">Blog</div>
              </div>
              <div className="item-link40">
                <img
                  className="background-icon40"
                  alt=""
                  src="/background-7.svg"
                />
                <div className="facebook3">Facebook</div>
              </div>
              <div className="item-link41">
                <img
                  className="background-icon41"
                  alt=""
                  src="/background-8.svg"
                />
                <div className="instagram3">Instagram</div>
              </div>
              <div className="item-link42">
                <img
                  className="background-icon42"
                  alt=""
                  src="/background-9.svg"
                />
                <div className="linkedin3">LinkedIn</div>
              </div>
              <div className="item-link43">
                <img
                  className="background-icon43"
                  alt=""
                  src="/background-10.svg"
                />
                <div className="twitter3">Twitter</div>
              </div>
              <div className="item-link44">
                <img
                  className="background-icon44"
                  alt=""
                  src="/background-11.svg"
                />
                <div className="youtube3">YouTube</div>
              </div>
              <div className="item-link45">
                <img
                  className="background-icon45"
                  alt=""
                  src="/background-12.svg"
                />
                <div className="tiktok3">TikTok</div>
              </div>
            </div>
          </div>
        </div>
        <div className="newsletter1">
          <div className="subscribe-to-our3">Subscribe to our newsletter</div>
          <div className="newsletter-form3">
            <div className="form3">
              <div className="input-container2">
                <div className="input5">
                  <div className="container7" />
                </div>
                <TextField
                  className="fieldset3"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#a0a0a0" },
                    "& .MuiInputBase-root": { height: "55px" },
                  }}
                />
              </div>
              <div className="email-label-container">
                <div className="label10">
                  <div className="email-address4">Email Address</div>
                </div>
              </div>
              <Button
                className="button17"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14.9",
                  background: "#00246b",
                  borderRadius: "4px",
                  "&:hover": { background: "#00246b" },
                  width: 150,
                  height: 50,
                }}
              >
                Subscribe
              </Button>
            </div>
            <div className="location3">
              <div className="youre-currently-shopping-in-u-container">
                <div className="youre-currently-shopping3">
                  You're currently shopping in United States
                </div>
              </div>
              <img
                className="americanflagsvg-icon3"
                loading="lazy"
                alt=""
                src="/americanflagsvg.svg"
              />
              <div className="change-container">
                <div className="change3">CHANGE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
