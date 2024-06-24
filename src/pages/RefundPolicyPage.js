import Heade1 from "../components/Heade1";
import RefundDetails from "../components/RefundDetails";
import Footer1 from "../components/Footer1";
import "./RefundPolicyPage.css";

const RefundPolicyPage = () => {
  return (
    <div className="refundpolicypage">
      <Heade1 />
      <section className="policy-summary">
        <h1 className="refund-policy">Refund Policy</h1>
        <div className="please-refer-to1">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
      </section>
      <RefundDetails />
      <Footer1 />
    </div>
  );
};

export default RefundPolicyPage;
