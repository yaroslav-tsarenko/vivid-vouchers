import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Content1.css";

const Content1 = ({ className = "" }) => {
  return (
    <section className={`content1 ${className}`}>
      <div className="sign-in-wrapper">
        <div className="sign-in2">
          <div className="sign-up-heading">
            <h1 className="sign-up">Sign up</h1>
            <div className="sign-up-to">
              Sign up to get rewards, and many more
            </div>
          </div>
          <form className="input-fields1">
            <div className="name-address-username">
              <div className="name-address-username-labels">
                <div className="your-name">Your Name</div>
              </div>
              <TextField
                className="email-country-password"
                placeholder="Email"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
            </div>
            <div className="name-address-username1">
              <div className="address-wrapper">
                <div className="address">Address</div>
              </div>
              <div className="country-parent">
                <div className="country">Country</div>
                <img
                  className="email-country-password-spacer"
                  alt=""
                  src="/email-country-password-spacer.svg"
                />
              </div>
            </div>
            <div className="name-address-username2">
              <div className="username-parent">
                <div className="username">Username</div>
                <img
                  className="name-address-username-spacer"
                  alt=""
                  src="/frame-153-11.svg"
                />
              </div>
              <div className="password-parent">
                <div className="password1">Password</div>
                <img className="frame-child" alt="" src="/frame-153-1.svg" />
              </div>
            </div>
            <Button
              className="button6"
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
              Sign Up
            </Button>
          </form>
          <div className="or-sign-up">or, sign up with</div>
          <div className="social-auth-buttons">
            <img
              className="social-auth-icons"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-auth-icons1"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-auth-icons2"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="background-shape-icon1"
        loading="lazy"
        alt=""
        src="/rectangle-491@2x.png"
      />
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
