import PropTypes from "prop-types";
import "./TestimonialContainers1.css";

const TestimonialContainers1 = ({ className = "", avatars }) => {
  return (
    <div className={`testimonial-containers ${className}`}>
      <img className="avatars-icon" loading="lazy" alt="" src={avatars} />
      <div className="customer-info">
        <h3 className="michael-l">Michael L.</h3>
        <div className="new-york-usa">New York, USA</div>
      </div>
      <div className="quotes">
        <h1 className="h1">“</h1>
        <div className="reliable-and-convenient">
          Reliable and convenient. Verizon TopUp's quick and easy data
          replenishment process is a lifesaver for busy professionals like me.
        </div>
      </div>
    </div>
  );
};

TestimonialContainers1.propTypes = {
  className: PropTypes.string,
  avatars: PropTypes.string,
};

export default TestimonialContainers1;
