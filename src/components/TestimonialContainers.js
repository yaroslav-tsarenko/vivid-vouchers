import PropTypes from "prop-types";
import "./TestimonialContainers.css";

const TestimonialContainers = ({
  className = "",
  ellipse213,
  sarahT,
  californiaUSA,
  outstandingServiceVerizon,
}) => {
  return (
    <div className={`testimonial-containers1 ${className}`}>
      <img className="testimonial-containers-child" alt="" src={ellipse213} />
      <div className="sarah-t-parent">
        <h3 className="sarah-t">{sarahT}</h3>
        <div className="california-usa">{californiaUSA}</div>
      </div>
      <div className="parent">
        <h1 className="h11">“</h1>
        <div className="outstanding-service-verizon">
          {outstandingServiceVerizon}
        </div>
      </div>
    </div>
  );
};

TestimonialContainers.propTypes = {
  className: PropTypes.string,
  ellipse213: PropTypes.string,
  sarahT: PropTypes.string,
  californiaUSA: PropTypes.string,
  outstandingServiceVerizon: PropTypes.string,
};

export default TestimonialContainers;
