import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Footer2.css";

const Footer2 = ({ className = "" }) => {
  return (
    <footer className={`footer1 ${className}`}>
      <div className="container2">
        <div className="frame-group">
          <div className="footer-links-title-wrapper">
            <div className="footer-links-title">
              <div className="want-to-know1">Want to know more?</div>
              <div className="list3">
                <div className="item-link-container2">
                  <p className="faqs1">FAQs</p>
                  <p className="scam-warning1">Scam Warning</p>
                  <p className="contact-us1">Contact Us</p>
                  <p className="about-us1">About Us</p>
                  <p className="careers1">Careers</p>
                  <p className="board-of-directors1">Board of Directors</p>
                  <p className="retailer-inquiries1">Retailer Inquiries</p>
                  <p className="gift-tracker1">Gift Tracker</p>
                </div>
              </div>
            </div>
          </div>
          <div className="vividvouchers-inc-all1">
            © 2024 VividVouchers Inc. All rights reserved.
          </div>
        </div>
        <div className="container-inner">
          <div className="the-boring-stuff-parent">
            <div className="the-boring-stuff1">The boring stuff...</div>
            <div className="list4">
              <div className="item-link-container3">
                <p className="terms-of-sale1">Terms of Sale</p>
                <p className="terms-of-service1">Terms of Service</p>
                <p className="privacy-policy1">Privacy Policy</p>
                <p className="promotion-terms1">Promotion Terms</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-social-wrapper">
          <div className="footer-social">
            <div className="hang-with-us1">Hang with us!</div>
            <div className="list5">
              <div className="item-link13">
                <img
                  className="background-icon11"
                  alt=""
                  src="/background-6.svg"
                />
                <div className="blog1">Blog</div>
              </div>
              <div className="item-link14">
                <img
                  className="background-icon12"
                  alt=""
                  src="/background-7.svg"
                />
                <div className="facebook1">Facebook</div>
              </div>
              <div className="item-link15">
                <img
                  className="background-icon13"
                  alt=""
                  src="/background-8.svg"
                />
                <div className="instagram1">Instagram</div>
              </div>
              <div className="item-link16">
                <img
                  className="background-icon14"
                  alt=""
                  src="/background-9.svg"
                />
                <div className="linkedin1">LinkedIn</div>
              </div>
              <div className="item-link17">
                <img
                  className="background-icon15"
                  alt=""
                  src="/background-10.svg"
                />
                <div className="twitter1">Twitter</div>
              </div>
              <div className="item-link18">
                <img
                  className="background-icon16"
                  alt=""
                  src="/background-11.svg"
                />
                <div className="youtube1">YouTube</div>
              </div>
              <div className="item-link19">
                <img
                  className="background-icon17"
                  alt=""
                  src="/background-12.svg"
                />
                <div className="tiktok1">TikTok</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-newsletter">
          <div className="subscribe-to-our1">Subscribe to our newsletter</div>
          <div className="newsletter-form1">
            <div className="form1">
              <div className="email-field">
                <div className="input3">
                  <div className="container3" />
                </div>
                <TextField
                  className="fieldset1"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#a0a0a0" },
                    "& .MuiInputBase-root": { height: "55px" },
                  }}
                />
              </div>
              <div className="label-field">
                <div className="label8">
                  <div className="email-address1">Email Address</div>
                </div>
              </div>
              <Button
                className="button6"
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
            <div className="location2">
              <div className="location-selector">
                <div className="youre-currently-shopping1">
                  You're currently shopping in United States
                </div>
              </div>
              <img
                className="americanflagsvg-icon1"
                loading="lazy"
                alt=""
                src="/americanflagsvg.svg"
              />
              <div className="location-selector1">
                <div className="change1">CHANGE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
};

export default Footer2;
