import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./CheckoutDetails.css";

const CheckoutDetails = ({ className = "" }) => {
  return (
    <div className={`checkout-details ${className}`}>
      <div className="header-wrapper">
        <Button
          className="header1"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "18",
            background: "#cadcfc",
            borderRadius: "5px",
            "&:hover": { background: "#cadcfc" },
          }}
        >
          Checkout Details
        </Button>
      </div>
      <div className="checkout-details-values-wrapper">
        <div className="checkout-details-values">
          <b className="cart-subtotal">Cart Subtotal</b>
          <b className="checkout-details-values1">$360.00</b>
        </div>
      </div>
      <div className="checkout-details-inner">
        <div className="checkout-details-taxes-values-parent">
          <div className="checkout-details-taxes-values">
            <b className="shipping-handling">{`Shipping & Handling`}</b>
            <b className="other-taxes">Other Taxes</b>
          </div>
          <div className="checkout-details-taxes-values1">
            <b className="b1">$0.00</b>
            <b className="b2">$0.00</b>
          </div>
        </div>
      </div>
      <div className="checkout-details-child">
        <div className="frame-inner" />
      </div>
      <div className="checkout-details-inner1">
        <div className="grand-total-parent">
          <b className="grand-total">Grand Total</b>
          <b className="b3">$360.00</b>
        </div>
      </div>
    </div>
  );
};

CheckoutDetails.propTypes = {
  className: PropTypes.string,
};

export default CheckoutDetails;
