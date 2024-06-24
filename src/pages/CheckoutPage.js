import FrameComponent2 from "../components/FrameComponent2";
import BillingForm from "../components/BillingForm";
import Footer from "../components/Footer";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <FrameComponent2 yourCart="Checkout" />
      <section className="billing-form-wrapper">
        <BillingForm />
      </section>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
