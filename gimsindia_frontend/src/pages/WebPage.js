import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import KeyBenefits from "../components/KeyBenefits";
import FrameComponent1 from "../components/FrameComponent1";
import KatanaIntroduction from "../components/KatanaIntroduction";
import WaterContent from "../components/WaterContent";
import SpecificationContainer from "../components/SpecificationContainer";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import "./WebPage.css";

const WebPage = () => {
  return (
    <div className="web-page">
      <img
        className="water-ripple-over-white-backgr"
        alt=""
        src="/water-ripple-over-white-background-1@2x.png"
      />
      <GroupComponent />
      <img className="group-icon" alt="" src="/group.svg" />
      <FrameComponent />
      <img className="web-page-child" alt="" src="/vector-59.svg" />
      <section className="value-proposition">
        <div className="value-proposition-content">
          <div className="indias-first-abrasive">
            India’s first abrasive suspension waterjet
          </div>
          <div className="x-better-than">
            3x better than commercial injection waterjet
          </div>
          <div className="advantage-highlight">
            <h3 className="katana-waterjet-advantage-container">
              <p className="katana-waterjet-advantage">{`Katana waterjet advantage comparing to commercial `}</p>
              <p className="katana-waterjet-advantage">injection system</p>
            </h3>
          </div>
        </div>
        <KeyBenefits />
      </section>
      <img className="web-page-item" alt="" src="/vector-591.svg" />
      <KatanaIntroduction />
      <section className="water-bg">
        <img
          className="b05bb3-480d-4dba-a870-32ba9287-icon"
          alt=""
          src="/79b05bb3480d4dbaa87032ba9287570d-1@2x.png"
        />
        <img
          className="b05bb3-480d-4dba-a870-32ba9287-icon1"
          alt=""
          src="/79b05bb3480d4dbaa87032ba9287570d-2@2x.png"
        />
        <img
          className="b05bb3-480d-4dba-a870-32ba9287-icon2"
          alt=""
          src="/79b05bb3480d4dbaa87032ba9287570d-3@2x.png"
        />
      </section>
      <img className="web-page-inner" alt="" src="/vector-60.svg" />
      <section className="water-container-parent">
        <div className="water-container">
          <WaterContent />
          <SpecificationContainer />
        </div>
        <FrameComponent2 />
      </section>
      <br />
      <img className="union-icon" alt="" src="/union.svg" />
      <section className="frame-section">
        <div className="footer-menu-parent">
          <div className="footer-menu">
            <div className="footer-menu-pair-parent">
              <div className="footer-menu-pair">
                <h2 className="product">PRODUCT</h2>
              </div>
              <div className="footer-menu-column">
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Waterjet Models</div>
                </div>
                <div className="footer-menu-column-pair">
                  <div className="waterjet-models">{`Injection vs suspension technology `}</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Waterjet specification</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="software">Software</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Consumbles</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="shop">Shop</div>
                </div>
              </div>
            </div>
            <div className="footer-menu-pair-parent">
              <div className="footer-menu-pair">
                <h2 className="product">SERVICES</h2>
              </div>
              <div className="footer-menu-column">
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Waterjet Cutting</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="d-printing">3D Printing</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="lathe">Lathe</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="milling">Milling</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="welding">Welding</div>
                </div>
              </div>
            </div>
            <div className="footer-menu-pair-parent">
              <div className="footer-menu-pair">
                <h2 className="product">SOLUTIONS</h2>
              </div>
              <div className="frame-container">
                <div className="waterjet-cutting-wrapper">
                  <div className="d-design">3D Design</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="d-printing">Simulation</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="spm">SPM</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">
                    Research and developement
                  </div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Manufacturing</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="shop">Shop</div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-menu">
            <div className="footer-menu-pair-parent">
              <div className="material-gallery-wrapper">
                <h2 className="product">MATERIAL GALLERY</h2>
              </div>
              <div className="footer-menu-column">
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Material images</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Economic calculator</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Cutting calculator</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Quotation maker</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Feed rate chart</div>
                </div>
              </div>
            </div>
            <div className="footer-menu-pair-parent">
              <div className="footer-menu-pair">
                <h2 className="product">CONTACT</h2>
              </div>
              <div className="footer-menu-column">
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Location with Gmap</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Technical support</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="d-design">Get quote</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Requirement from tab</div>
                </div>
              </div>
            </div>
            <div className="footer-menu-pair-parent">
              <div className="footer-menu-pair">
                <h2 className="product">LEARN</h2>
              </div>
              <div className="frame-container">
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">
                    Suspension waterjet technology
                  </div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="faq">FAQ</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="reviews">Reviews</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="how-to">How to</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Company updates</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="waterjet-models">Educational videos</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="articles">Articles</div>
                </div>
                <div className="waterjet-cutting-wrapper">
                  <div className="about-us">About us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent4 />
    </div>
  );
};

export default WebPage;
