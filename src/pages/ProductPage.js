import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import Heade from "../components/Heade";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="productpage">
      <Heade />
      <main className="content1">
        <div className="background">
          <img className="image-5-icon" alt="" src="/image-5@2x.png" />
        </div>
        <div className="product-details">
          <div className="background1" />
          <div className="product-information">
            <h1 className="heading-1">All-in-1 Choice Gift Card</h1>
            <div className="product-description">
              <div className="gift-card-features">
                <div className="feature-list">
                  <div className="feature-items">
                    <div className="feature-icons">
                      <img
                        className="vector-icon1"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className="the-perfect-gift">
                      The perfect gift for any occasion
                    </div>
                  </div>
                  <div className="feature-items1">
                    <div className="vector-wrapper">
                      <img className="vector-icon2" alt="" src="/vector.svg" />
                    </div>
                    <div className="over-130-different">
                      Over 130 different gift cards to choose from
                    </div>
                  </div>
                  <div className="feature-items2">
                    <div className="vector-container">
                      <img className="vector-icon3" alt="" src="/vector.svg" />
                    </div>
                    <div className="the-perfect-solution">
                      The perfect solution for corporate gifting
                    </div>
                  </div>
                  <div className="feature-items3">
                    <div className="vector-frame">
                      <img className="vector-icon4" alt="" src="/vector.svg" />
                    </div>
                    <div className="available-as-a">
                      Available as a physical or a digital card
                    </div>
                  </div>
                  <div className="feature-items4">
                    <div className="frame-div">
                      <img className="vector-icon5" alt="" src="/vector.svg" />
                    </div>
                    <div className="available-to-order">
                      Available to order in denominations of £10 to £500
                    </div>
                  </div>
                </div>
              </div>
              <div className="value-selection">
                <div className="choose-your-value">Choose your value</div>
                <div className="value-options">
                  <Button
                    className="label"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#0f0a1b",
                      fontSize: "16",
                      background: "#fff",
                      border: "#00246b solid 2px",
                      borderRadius: "5px",
                      "&:hover": { background: "#fff" },
                      width: 139.8,
                      height: 68,
                    }}
                  >
                    £25.00
                  </Button>
                  <div className="label1">
                    <div className="div">£50.00</div>
                  </div>
                  <div className="label2">
                    <div className="div1">£100.00</div>
                  </div>
                  <Button
                    className="label3"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#0f0a1b",
                      fontSize: "16",
                      background: "#fff",
                      border: "#c5c4c8 solid 2px",
                      borderRadius: "5px",
                      "&:hover": { background: "#fff" },
                      width: 139.8,
                      height: 68,
                    }}
                  >
                    £500.00
                  </Button>
                  <div className="label4">
                    <div className="other">Other</div>
                  </div>
                </div>
              </div>
              <div className="delivery-selection">
                <div className="delivery-method">Delivery method</div>
                <div className="delivery-options">
                  <div className="label5">
                    <div className="delivery-types">
                      <div className="by-mail">By mail</div>
                    </div>
                    <div className="sent-via-royal">Sent via Royal Mail UK</div>
                  </div>
                  <div className="label6">
                    <div className="digital-wrapper">
                      <div className="digital">Digital</div>
                    </div>
                    <div className="free-and-sustainable">
                      Free and sustainable
                    </div>
                  </div>
                </div>
              </div>
              <div className="packaging-selection">
                <div className="packaging-description">
                  <div className="what-kind-of">
                    What kind of packaging would you like?
                  </div>
                  <div className="choose-from-1">Choose from 1 options</div>
                </div>
                <div className="overlaybordershadow">
                  <div className="background2">
                    <img
                      className="surprise-paars-gc-uk-envelop-1-icon"
                      loading="lazy"
                      alt=""
                      src="/surprisepaarsgcukenvelop160x107x31-0png@2x.png"
                    />
                  </div>
                  <div className="change-option">
                    <div className="change-button-container">
                      <div className="change-button-label">
                        <div className="surprise-gift-envelope">
                          Surprise Gift Envelope
                        </div>
                        <div className="free">Free</div>
                      </div>
                      <Button
                        className="button"
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#262626",
                          fontSize: "16",
                          background: "#fff",
                          border: "#262626 solid 2px",
                          borderRadius: "5px",
                          "&:hover": { background: "#fff" },
                          width: 100.5,
                        }}
                      >
                        Change
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cost">
                <div className="costs">Costs</div>
                <div className="div2">£25.00</div>
              </div>
              <div className="actions">
                <div className="basket-buttons">
                  <div className="button1">
                    <img
                      className="svg-icon"
                      loading="lazy"
                      alt=""
                      src="/svg.svg"
                    />
                  </div>
                  <div className="input1">
                    <div className="input-value">1</div>
                  </div>
                  <img
                    className="button-icon"
                    loading="lazy"
                    alt=""
                    src="/button1.svg"
                  />
                </div>
                <Button
                  className="button2"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "17.4",
                    background: "#00246b",
                    borderRadius: "5px",
                    "&:hover": { background: "#00246b" },
                    height: 64,
                  }}
                >
                  Add to basket
                </Button>
              </div>
              <div className="promotion">
                <div className="background3">
                  <img
                    className="promotion-block-pounds007050b-icon"
                    loading="lazy"
                    alt=""
                    src="/promotion-block-pounds007050b4webp@2x.png"
                  />
                  <div className="with-every-physical-container">
                    <span className="with-every-physical-container1">
                      <p className="with-every-physical">
                        With every physical gift card a free* Hotelgiftcard
                      </p>
                      <p className="voucher-worth-15">
                        voucher worth £15! *while stocks last
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="gift-finding">
                <div className="finding-the-right-container">
                  <p className="finding-the-right">
                    Finding the right gift can be hard work, but not with the
                    All-in-1 Choice Gift
                  </p>
                  <p className="card-add-multiple">
                    Card. Add multiple different gift cards from top brands onto
                    this all in one gift
                  </p>
                  <p className="card-for-an">
                    card, for an array of shopping choices. The recipient of the
                    all in one card just
                  </p>
                  <p className="needs-to-redeem">
                    needs to redeem the Choice Gift Card with one or more gift
                    cards of their choice
                  </p>
                  <p className="from-our-extensive">
                    from our extensive assortment at VariedValue. This means the
                    gift card you
                  </p>
                  <p className="give-them-is">
                    give them is a guaranteed success!
                  </p>
                </div>
              </div>
              <div className="corporate-gifting">
                <div className="the-all-in-1-choice-container">
                  <span>
                    <p className="the-all-in-1-choice">
                      The All-in-1 Choice Gift Card also makes for an excellent
                      work gift. Add your
                    </p>
                    <p className="businesss-logo-and">
                      business’s logo and name to the all in one gift card, and
                      load it up with other gift
                    </p>
                    <p className="cards-from-the">
                      cards from the extensive options here. Contact us directly
                      for a no-obligation quote.
                    </p>
                  </span>
                </div>
              </div>
              <div className="this-card-is-container">
                <span className="this-card-is-container1">
                  <p className="this-card-is">
                    This card is valid for one year from the date of purchase,
                    which changes when
                  </p>
                  <p className="the-recipient-redeems">
                    the recipient redeems it with another card, to the validity
                    period of that card. FInd out which giftcards you can use
                    with the all in one choice gift card here.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="about">
              <div className="about-details">
                <div className="want-to-know">Want to know more?</div>
                <div className="list">
                  <div className="item-link-container">
                    <p className="faqs">FAQs</p>
                    <p className="scam-warning">Scam Warning</p>
                    <p className="contact-us">Contact Us</p>
                    <p className="about-us">About Us</p>
                    <p className="careers">Careers</p>
                    <p className="board-of-directors">Board of Directors</p>
                    <p className="retailer-inquiries">Retailer Inquiries</p>
                    <p className="gift-tracker">Gift Tracker</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="vividvouchers-inc-all">
              © 2024 VividVouchers Inc. All rights reserved.
            </div>
          </div>
          <div className="legal">
            <div className="legal-details">
              <div className="the-boring-stuff">The boring stuff...</div>
              <div className="list1">
                <div className="item-link-container1">
                  <p className="terms-of-sale">Terms of Sale</p>
                  <p className="terms-of-service">Terms of Service</p>
                  <p className="privacy-policy">Privacy Policy</p>
                  <p className="promotion-terms">Promotion Terms</p>
                </div>
              </div>
            </div>
          </div>
          <div className="social">
            <div className="social-details">
              <div className="hang-with-us">Hang with us!</div>
              <div className="list2">
                <div className="item-link">
                  <img
                    className="background-icon1"
                    loading="lazy"
                    alt=""
                    src="/background-6.svg"
                  />
                  <div className="blog">Blog</div>
                </div>
                <div className="item-link1">
                  <img
                    className="background-icon2"
                    alt=""
                    src="/background-7.svg"
                  />
                  <div className="facebook">Facebook</div>
                </div>
                <div className="item-link2">
                  <img
                    className="background-icon3"
                    alt=""
                    src="/background-8.svg"
                  />
                  <div className="instagram">Instagram</div>
                </div>
                <div className="item-link3">
                  <img
                    className="background-icon4"
                    alt=""
                    src="/background-9.svg"
                  />
                  <div className="linkedin">LinkedIn</div>
                </div>
                <div className="item-link4">
                  <img
                    className="background-icon5"
                    alt=""
                    src="/background-10.svg"
                  />
                  <div className="twitter">Twitter</div>
                </div>
                <div className="item-link5">
                  <img
                    className="background-icon6"
                    alt=""
                    src="/background-11.svg"
                  />
                  <div className="youtube">YouTube</div>
                </div>
                <div className="item-link6">
                  <img
                    className="background-icon7"
                    alt=""
                    src="/background-12.svg"
                  />
                  <div className="tiktok">TikTok</div>
                </div>
              </div>
            </div>
          </div>
          <div className="newsletter">
            <div className="subscribe-to-our">Subscribe to our newsletter</div>
            <div className="newsletter-form">
              <div className="form">
                <div className="input-container">
                  <div className="input2">
                    <div className="container1" />
                  </div>
                  <TextField
                    className="fieldset"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#a0a0a0" },
                      "& .MuiInputBase-root": { height: "55px" },
                    }}
                  />
                </div>
                <div className="email-label">
                  <div className="label7">
                    <div className="email-address">Email Address</div>
                  </div>
                </div>
                <Button
                  className="button3"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14.9",
                    background: "#00246b",
                    borderRadius: "4px",
                    "&:hover": { background: "#00246b" },
                    width: 150,
                    height: 50,
                  }}
                >
                  Subscribe
                </Button>
              </div>
              <div className="shopping-location">
                <div className="location">
                  <div className="youre-currently-shopping">
                    You're currently shopping in United States
                  </div>
                </div>
                <img
                  className="americanflagsvg-icon"
                  loading="lazy"
                  alt=""
                  src="/americanflagsvg.svg"
                />
                <div className="location1">
                  <div className="change">CHANGE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
