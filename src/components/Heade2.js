import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Heade2.css";

const Heade2 = ({ className = "" }) => {
  return (
    <header className={`heade2 ${className}`}>
      <div className="vivid-voucher">
        <img
          className="mask-group-icon2"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
        <a className="vivid-vouchers2">Vivid Vouchers</a>
      </div>
      <div className="nav-list2">
        <a className="item-link33">US eGift Cards</a>
        <a className="item-link34">International eGift Cards</a>
        <a className="item-link35">VividVouchers Business</a>
        <a className="item-link36">Customer Care</a>
        <a className="item-link37">About Us</a>
        <a className="item-link38">Gift Tracker</a>
      </div>
      <div className="user-buttons">
        <Button
          className="button8"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#cadcfc",
            fontSize: "15.3",
            background: "#00246b",
            borderRadius: "4px",
            "&:hover": { background: "#00246b" },
            height: 42,
          }}
        >
          Sign up
        </Button>
        <Button
          className="button9"
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#00246b",
            fontSize: "15.1",
            borderColor: "#cadcfc",
            borderRadius: "4px",
            "&:hover": { borderColor: "#cadcfc" },
            width: 93,
          }}
        >
          Log in
        </Button>
      </div>
    </header>
  );
};

Heade2.propTypes = {
  className: PropTypes.string,
};

export default Heade2;
