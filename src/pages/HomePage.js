import Main from "../components/Main";
import Info from "../components/Info";
import Corporate from "../components/Corporate";
import Prezzee from "../components/Prezzee";
import Section from "../components/Section";
import Reviews from "../components/Reviews";
import Promise1 from "../components/Promise1";
import Footer2 from "../components/Footer2";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Main />
      <section className="content">
        <div className="section">
          <div className="input">
            <img
              className="background-icon"
              loading="lazy"
              alt=""
              src="/background.svg"
            />
            <div className="search-field">
              <a className="search-brands">Search brands ...</a>
            </div>
          </div>
        </div>
      </section>
      <Info />
      <Corporate />
      <Prezzee />
      <Section />
      <Reviews />
      <Promise1 />
      <Footer2 />
    </div>
  );
};

export default HomePage;
