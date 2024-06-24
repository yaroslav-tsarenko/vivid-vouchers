import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer2 ${className}`}>
      <div className="container4">
        <div className="footer-links">
          <div className="footer-know-more">
            <div className="know-more-link">
              <div className="want-to-know2">Want to know more?</div>
              <div className="list6">
                <div className="item-link-container4">
                  <p className="faqs2">FAQs</p>
                  <p className="scam-warning2">Scam Warning</p>
                  <p className="contact-us2">Contact Us</p>
                  <p className="about-us2">About Us</p>
                  <p className="careers2">Careers</p>
                  <p className="board-of-directors2">Board of Directors</p>
                  <p className="retailer-inquiries2">Retailer Inquiries</p>
                  <p className="gift-tracker2">Gift Tracker</p>
                </div>
              </div>
            </div>
          </div>
          <div className="vividvouchers-inc-all2">
            © 2024 VividVouchers Inc. All rights reserved.
          </div>
        </div>
        <div className="footer-boring-stuff">
          <div className="boring-stuff-link">
            <div className="the-boring-stuff2">The boring stuff...</div>
            <div className="list7">
              <div className="item-link-container5">
                <p className="terms-of-sale2">Terms of Sale</p>
                <p className="terms-of-service2">Terms of Service</p>
                <p className="privacy-policy2">Privacy Policy</p>
                <p className="promotion-terms2">Promotion Terms</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-social1">
          <div className="social-link">
            <div className="hang-with-us2">Hang with us!</div>
            <div className="list8">
              <div className="item-link26">
                <img
                  className="background-icon18"
                  loading="lazy"
                  alt=""
                  src="/background-6.svg"
                />
                <div className="blog2">Blog</div>
              </div>
              <div className="item-link27">
                <img
                  className="background-icon19"
                  alt=""
                  src="/background-7.svg"
                />
                <div className="facebook2">Facebook</div>
              </div>
              <div className="item-link28">
                <img
                  className="background-icon20"
                  alt=""
                  src="/background-8.svg"
                />
                <div className="instagram2">Instagram</div>
              </div>
              <div className="item-link29">
                <img
                  className="background-icon21"
                  alt=""
                  src="/background-9.svg"
                />
                <div className="linkedin2">LinkedIn</div>
              </div>
              <div className="item-link30">
                <img
                  className="background-icon22"
                  alt=""
                  src="/background-10.svg"
                />
                <div className="twitter2">Twitter</div>
              </div>
              <div className="item-link31">
                <img
                  className="background-icon23"
                  alt=""
                  src="/background-11.svg"
                />
                <div className="youtube2">YouTube</div>
              </div>
              <div className="item-link32">
                <img
                  className="background-icon24"
                  alt=""
                  src="/background-12.svg"
                />
                <div className="tiktok2">TikTok</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-newsletter1">
          <div className="subscribe-to-our2">Subscribe to our newsletter</div>
          <div className="newsletter-form2">
            <div className="form2">
              <div className="input-container1">
                <div className="input4">
                  <div className="container5" />
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
              <div className="input-label">
                <div className="label9">
                  <div className="email-address2">Email Address</div>
                </div>
              </div>
              <Button
                className="button11"
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
            <div className="location-container">
              <div className="youre-currently-shopping-in-u-wrapper">
                <div className="youre-currently-shopping2">
                  You're currently shopping in United States
                </div>
              </div>
              <img
                className="americanflagsvg-icon2"
                loading="lazy"
                alt=""
                src="/americanflagsvg.svg"
              />
              <div className="change-wrapper">
                <div className="change2">CHANGE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
