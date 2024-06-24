import Heade from "../components/Heade";
import Filters from "../components/Filters";
import Cards from "../components/Cards";
import Footer1 from "../components/Footer1";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <Heade />
      <section className="hero">
        <div className="hero-paragraph-wrapper">
          <div className="hero-paragraph">
            <h1 className="one-gift-multiple-container">
              <p className="one-gift-multiple">One gift, multiple options,</p>
              <p className="endless-joy">endless joy.</p>
            </h1>
            <div className="with-100s-of-container">
              <p className="with-100s-of">
                With 100s of brands to choose from and the freedom to spend it
              </p>
              <p className="their-way-this">{`their way, this Swap & Shop card is our giftees’ fav!`}</p>
            </div>
          </div>
        </div>
        <img
          className="us-woc20banner20image-20des-icon"
          loading="lazy"
          alt=""
          src="/us-woc20banner20image-20desktoppng@2x.png"
        />
      </section>
      <Filters />
      <section className="productlistingpage-inner">
        <div className="card-grid-parent">
          <div className="card-grid">
            <div className="grid-header">
              <h1 className="heading-2">Give more with VividVouchers</h1>
            </div>
            <div className="sort-by-btton">
              <div className="sort-by">Sort by</div>
              <div className="sort-icon">
                <img className="vector-icon" alt="" src="/vector1.svg" />
              </div>
            </div>
          </div>
          <div className="a-favorite-brand">
            A favorite brand or the gift of choice? How about... both!  
          </div>
          <div className="choose-a-gift">
            Choose a gift card, rest assured they can easily swap it for
            another.
          </div>
          <div className="link-terms">{`Terms & Conditions apply`}</div>
          <Cards />
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default ProductListingPage;
