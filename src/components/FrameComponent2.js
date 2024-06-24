import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "", yourCart }) => {
  return (
    <section className={`heade-parent ${className}`}>
      <header className="heade1">
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
          <a className="item-link20">US eGift Cards</a>
          <a className="item-link21">International eGift Cards</a>
          <a className="item-link22">VividVouchers Business</a>
          <a className="item-link23">Customer Care</a>
          <a className="item-link24">About Us</a>
          <a className="item-link25">Gift Tracker</a>
        </div>
        <div className="button-parent">
          <Button
            className="button7"
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
            className="button8"
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
      <div className="frame-wrapper">
        <div className="frame-container">
          <div className="your-cart-wrapper">
            <h1 className="your-cart">{yourCart}</h1>
          </div>
          <b className="view-or-edit">View or edit your cart before checkout</b>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  yourCart: PropTypes.string,
};

export default FrameComponent2;
