import TestimonialContainers1 from "./TestimonialContainers1";
import TestimonialContainers from "./TestimonialContainers";
import PropTypes from "prop-types";
import "./Reviews.css";

const Reviews = ({ className = "" }) => {
  return (
    <section className={`reviews ${className}`}>
      <div className="reviews-1920x">
        <h1 className="customer-reviews-hear">
          Customer Reviews: Hear What Our Customers Have to Say
        </h1>
        <div className="testimonials">
          <TestimonialContainers1 avatars="/ellipse-213@2x.png" />
          <TestimonialContainers
            ellipse213="/ellipse-213-1@2x.png"
            sarahT="Sarah T."
            californiaUSA="California, USA"
            outstandingServiceVerizon="Outstanding service! Verizon TopUp saved the day when I ran out of data mid-streaming. Highly recommend!"
          />
          <TestimonialContainers
            ellipse213="/ellipse-213-2@2x.png"
            sarahT="Emily H."
            californiaUSA="Texas, USA"
            outstandingServiceVerizon="Exceptional value! With Verizon TopUp, I can customize my data package to fit my usage needs perfectly. No more wasted data or overage charges."
          />
          <TestimonialContainers1 avatars="/ellipse-213-3@2x.png" />
        </div>
      </div>
    </section>
  );
};

Reviews.propTypes = {
  className: PropTypes.string,
};

export default Reviews;
