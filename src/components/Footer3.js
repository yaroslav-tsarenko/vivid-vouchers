import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Footer3.css";

const Footer3 = ({ className = "" }) => {
  return (
    <footer className={`footer3 ${className}`}>
      <div className="container6">
        <div className="footer-top1">
          <div className="footer-top-left">
            <div className="footer-top-links">
              <div className="want-to-know3">Want to know more?</div>
              <div className="list9">
                <div className="item-link-container6">
                  <p className="faqs3">FAQs</p>
                  <p className="scam-warning3">Scam Warning</p>
                  <p className="contact-us9">Contact Us</p>
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
        <div className="footer-mid">
          <div className="footer-mid-links">
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
        <div className="footer-right1">
          <div className="footer-right-content">
            <div className="hang-with-us3">Hang with us!</div>
            <div className="list11">
              <div className="item-link39">
                <img
                  className="background-icon21"
                  loading="lazy"
                  alt=""
                  src="/background.svg"
                />
                <div className="blog3">Blog</div>
              </div>
              <div className="item-link40">
                <img
                  className="background-icon22"
                  alt=""
                  src="/background-1.svg"
                />
                <div className="facebook3">Facebook</div>
              </div>
              <div className="item-link41">
                <img
                  className="background-icon23"
                  alt=""
                  src="/background-2.svg"
                />
                <div className="instagram3">Instagram</div>
              </div>
              <div className="item-link42">
                <img
                  className="background-icon24"
                  alt=""
                  src="/background-3.svg"
                />
                <div className="linkedin3">LinkedIn</div>
              </div>
              <div className="item-link43">
                <img
                  className="background-icon25"
                  alt=""
                  src="/background-4.svg"
                />
                <div className="twitter3">Twitter</div>
              </div>
              <div className="item-link44">
                <img
                  className="background-icon26"
                  alt=""
                  src="/background-5.svg"
                />
                <div className="youtube3">YouTube</div>
              </div>
              <div className="item-link45">
                <img
                  className="background-icon27"
                  alt=""
                  src="/background-6.svg"
                />
                <div className="tiktok3">TikTok</div>
              </div>
            </div>
          </div>
        </div>
        <div className="newsletter">
          <div className="subscribe-to-our3">Subscribe to our newsletter</div>
          <div className="newsletter-form1">
            <div className="form3">
              <div className="input-container1">
                <div className="input3">
                  <div className="container7" />
                </div>
                <TextField
                  className="fieldset2"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#a0a0a0" },
                    "& .MuiInputBase-root": { height: "55px" },
                  }}
                />
              </div>
              <div className="label-container1">
                <div className="label2">
                  <div className="email-address3">Email Address</div>
                </div>
              </div>
              <Button
                className="button10"
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
            <div className="shopping-location2">
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
              <div className="change-wrapper">
                <div className="change3">CHANGE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer3.propTypes = {
  className: PropTypes.string,
};

export default Footer3;
