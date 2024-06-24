import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <section className={`main ${className}`}>
      <header className="heade">
        <div className="mask-group-parent">
          <img
            className="mask-group-icon"
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
          <a className="vivid-vouchers">Vivid Vouchers</a>
        </div>
        <div className="nav-list">
          <a className="item-link7">US eGift Cards</a>
          <a className="item-link8">International eGift Cards</a>
          <a className="item-link9">VividVouchers Business</a>
          <a className="item-link10">Customer Care</a>
          <a className="item-link11">About Us</a>
          <a className="item-link12">Gift Tracker</a>
        </div>
        <div className="user">
          <Button
            className="button4"
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
            className="button5"
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
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
