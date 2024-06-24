import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`frame-parent3 ${className}`}>
      <div className="header-parent">
        <div className="header">
          <div className="header-child" />
          <div className="product-wrapper">
            <b className="product">Product</b>
          </div>
          <div className="price-parent">
            <b className="price">Price</b>
            <b className="quantity">Quantity</b>
          </div>
          <b className="total">Total</b>
        </div>
        <FrameComponent1
          bassProShopsGiftCard="Bass Pro Shops Gift Card"
          discount20OFF="Discount: 20% OFF"
        />
      </div>
      <div className="line-parent">
        <div className="frame-child" />
        <FrameComponent1
          bassProShopsGiftCard="Shopping Spree Gift Card"
          discount20OFF="Worth USD $400"
        />
      </div>
      <div className="line-group">
        <div className="frame-item" />
        <div className="bass-pro-shops-usjpg-group">
          <img
            className="bass-pro-shops-usjpg-icon2"
            alt=""
            src="/bassproshopsusjpg1@2x.png"
          />
          <div className="travel-giftcard-parent">
            <b className="travel-giftcard">Travel GiftCard</b>
            <b className="worth-usd-400">Worth USD $400</b>
          </div>
          <div className="parent1">
            <b className="b">$120.00</b>
            <b className="credits1">12 Credits</b>
          </div>
          <div className="frame-parent4">
            <div className="frame-parent5">
              <div className="icon-plus-wrapper">
                <img className="icon-plus1" alt="" src="/iconplus.svg" />
              </div>
              <b className="cart-item-daily">3</b>
              <input className="frame-input" type="checkbox" />
            </div>
            <FormControl
              className="frame-formcontrol"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#00246b",
                borderRadius: "8px",
                width: "57.073170731707314%",
                height: "38px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "Bold",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="success" />
              <Select
                color="success"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/frame-1000002972-2.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Hourly</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <b className="cart-item-quantity">$120.00</b>
        </div>
      </div>
      <div className="cart-actions-separator-parent">
        <div className="cart-actions-separator" />
        <div className="button-group">
          <Button
            className="button9"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "18",
              borderColor: "#000",
              borderRadius: "4px",
              "&:hover": { borderColor: "#000" },
              width: 133,
              height: 54,
            }}
          >
            Go Back
          </Button>
          <Button
            className="button10"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#00246b",
              borderRadius: "4px",
              "&:hover": { background: "#00246b" },
              width: 146,
              height: 54,
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
