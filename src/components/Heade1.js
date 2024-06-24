import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Heade1.css";

const Heade1 = ({ className = "" }) => {
  return (
    <header className={`heade1 ${className}`}>
      <div className="mask-group-group">
        <img
          className="mask-group-icon1"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
        <a className="vivid-vouchers1">Vivid Vouchers</a>
      </div>
      <div className="nav-list1">
        <a className="item-link13">US eGift Cards</a>
        <a className="item-link14">International eGift Cards</a>
        <a className="item-link15">VividVouchers Business</a>
        <a className="item-link16">Customer Care</a>
        <a className="item-link17">About Us</a>
        <a className="item-link18">Gift Tracker</a>
      </div>
      <div className="user-auth">
        <Button
          className="button3"
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
          className="button4"
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

Heade1.propTypes = {
  className: PropTypes.string,
};

export default Heade1;
