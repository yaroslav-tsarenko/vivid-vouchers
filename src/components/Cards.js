import Link2 from "./Link2";
import Link1 from "./Link1";
import Link from "./Link";
import PropTypes from "prop-types";
import "./Cards.css";

const Cards = ({ className = "" }) => {
  return (
    <div className={`cards ${className}`}>
      <div className="link7">
        <img
          className="background-icon28"
          loading="lazy"
          alt=""
          src="/background1@2x.png"
        />
        <div className="card-items">
          <div className="card-names">
            <div className="heading-44">Minions Smart eGift Card</div>
            <div className="heading-54">
              <div className="special-edition">Special edition</div>
            </div>
          </div>
        </div>
      </div>
      <Link2
        background="/background-13@2x.png"
        backToSchoolSmartEGift="Back to School Smart eGift"
        celebrateBackToSchool="Celebrate Back to School"
      />
      <Link1
        background="/background-21@2x.png"
        congratulationsSmartEGift="Congratulations Smart eGift"
        card="Card"
      />
      <div className="link8">
        <img className="background-icon29" alt="" src="/background-31@2x.png" />
        <div className="heading-4-oh-baby-smart-egi-wrapper">
          <div className="heading-45">Oh Baby! Smart eGift Card</div>
        </div>
      </div>
      <Link1
        background="/background-41@2x.png"
        congratulationsSmartEGift="On The Go Eats Smart eGift"
        card="Card"
        propLeft="1352px"
        propTop="40px"
      />
      <div className="link9">
        <img className="background-icon30" alt="" src="/background-51@2x.png" />
        <div className="heading-4-teachers-smart-egi-wrapper">
          <div className="heading-46">Teachers Smart eGift Card</div>
        </div>
      </div>
      <div className="link10">
        <img className="background-icon31" alt="" src="/background-61@2x.png" />
        <div className="heading-4-prezzee-kids-smart-wrapper">
          <div className="heading-47">VividVouchers Kids Smart eGift Card</div>
        </div>
      </div>
      <Link
        background="/background-71@2x.png"
        heading4KrogerEGiftCard="Kroger eGift Card"
      />
      <Link
        background="/background-81@2x.png"
        heading4KrogerEGiftCard="Bright Cellars eGift Card"
        propLeft="1032px"
        propTextDecoration="none"
      />
      <div className="link11">
        <img className="background-icon32" alt="" src="/background-91@2x.png" />
        <div className="link-inner2">
          <div className="heading-4-sephora-gift-card-parent">
            <div className="heading-48">Sephora Gift Card</div>
            <div className="heading-55">
              <a className="top-seller">Top Seller</a>
            </div>
          </div>
        </div>
      </div>
      <Link2
        background="/background-101@2x.png"
        backToSchoolSmartEGift="YorkTest Wellness Card eGift"
        celebrateBackToSchool="New Arrival"
        propTop="688px"
        propLeft="72px"
        propDisplay="inline-block"
        propMinWidth="74.1px"
      />
      <Link1
        background="/background-111@2x.png"
        congratulationsSmartEGift="Academy Sports + Outdoors"
        card="eGift Card"
        propLeft="392px"
        propTop="688px"
      />
      <div className="link12">
        <img
          className="background-icon33"
          alt=""
          src="/background-121@2x.png"
        />
        <div className="heading-4-aries-season-smart-wrapper">
          <div className="heading-49">Aries Season Smart eGift Card</div>
        </div>
      </div>
      <div className="link13">
        <img
          className="background-icon34"
          alt=""
          src="/background-131@2x.png"
        />
        <div className="heading-4-etsy-egift-card-wrapper">
          <div className="heading-410">Etsy eGift Card</div>
        </div>
      </div>
      <div className="link14">
        <img className="background-icon35" alt="" src="/background-14@2x.png" />
        <div className="heading-4-fandango-gift-card-wrapper">
          <div className="heading-411">Fandango Gift Card</div>
        </div>
      </div>
      <Link1
        background="/background-15@2x.png"
        congratulationsSmartEGift="Gemini Season Smart eGift"
        card="Card"
        propLeft="72px"
        propTop="1012px"
      />
      <Link1
        background="/background-16@2x.png"
        congratulationsSmartEGift="Happy Mother's Day Smart"
        card="eGift Card"
        propLeft="392px"
        propTop="1012px"
      />
      <Link1
        background="/background-17@2x.png"
        congratulationsSmartEGift={`Health & Wellness Smart eGift`}
        card="Card"
        propLeft="712px"
        propTop="1012px"
      />
      <div className="link15">
        <img className="background-icon36" alt="" src="/background-18@2x.png" />
        <div className="heading-4-i-choose-you-smart-wrapper">
          <div className="heading-412">I Choose You Smart eGift Card</div>
        </div>
      </div>
      <div className="link16">
        <img className="background-icon37" alt="" src="/background-19@2x.png" />
        <div className="heading-4-lego-egift-card-wrapper">
          <div className="heading-413">Lego eGift Card</div>
        </div>
      </div>
      <Link1
        background="/background-20@2x.png"
        congratulationsSmartEGift="Trolls Band Together Smart"
        card="eGift Card"
        propLeft="232px"
        propTop="1336px"
      />
      <Link1
        background="/background-41@2x.png"
        congratulationsSmartEGift="On The Go Eats Smart eGift"
        card="Card"
        propLeft="552px"
        propTop="1336px"
      />
      <Link1
        background="/background-22@2x.png"
        congratulationsSmartEGift="Jurassic World Smart eGift"
        card="Card"
        propLeft="872px"
        propTop="1336px"
      />
      <div className="link17">
        <img className="background-icon38" alt="" src="/background-23@2x.png" />
        <div className="heading-4-aerie-gift-card-wrapper">
          <div className="heading-414">Aerie Gift Card</div>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  className: PropTypes.string,
};

export default Cards;
