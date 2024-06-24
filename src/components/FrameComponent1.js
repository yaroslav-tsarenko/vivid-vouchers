import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  className = "",
  bassProShopsGiftCard,
  discount20OFF,
}) => {
  return (
    <div className={`bass-pro-shops-usjpg-parent ${className}`}>
      <img
        className="bass-pro-shops-usjpg-icon1"
        loading="lazy"
        alt=""
        src="/bassproshopsusjpg1@2x.png"
      />
      <div className="bass-pro-shops-gift-card-parent">
        <b className="bass-pro-shops">{bassProShopsGiftCard}</b>
        <b className="discount-20-off">{discount20OFF}</b>
      </div>
      <div className="frame-parent1">
        <div className="cart-item-summary-quantity-con-parent">
          <b className="cart-item-summary">$120.00</b>
          <b className="credits">12 Credits</b>
        </div>
        <div className="frame-parent2">
          <div className="cart-item-summary-quantity-con-group">
            <div className="cart-item-summary-quantity-con">
              <img
                className="icon-plus"
                loading="lazy"
                alt=""
                src="/iconplus.svg"
              />
            </div>
            <b className="cart-item-summary1">3</b>
            <input
              className="cart-item-summary-quantity-con1"
              type="checkbox"
            />
          </div>
          <FormControl
            className="group"
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#00246b",
              borderRadius: "8px",
              width: "100%",
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
                  src="/cart-item-summary-quantity-control-value-input.svg"
                  style={{ marginRight: "16px" }}
                />
              )}
            >
              <MenuItem>Hourly</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
      <b className="cart-item-summary2">$120.00</b>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  bassProShopsGiftCard: PropTypes.string,
  discount20OFF: PropTypes.string,
};

export default FrameComponent1;
