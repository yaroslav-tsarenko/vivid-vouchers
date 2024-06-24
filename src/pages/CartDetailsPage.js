import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import CheckoutDetails from "../components/CheckoutDetails";
import Footer from "../components/Footer";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <FrameComponent2 yourCart="Your Cart" />
      <section className="cartdetailspage-inner">
        <div className="frame-parent">
          <FrameComponent />
          <CheckoutDetails />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CartDetailsPage;
