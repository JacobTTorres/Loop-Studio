import "./footer.css";

import Facebook from "../../images/icon-facebook.svg";
import Twitter from "../../images/icon-twitter.svg";
import Pintrest from "../../images/icon-pinterest.svg";
import Instagram from "../../images/icon-instagram.svg";
import Logo from "../../images/logo.svg";

export default function Footer() {
  return (
    <section className="footerContainer">
      <div className="footerContent">
        <div className="leftFooter">
          <img src={Logo} className="footerLogo" alt="Loopstudios" />
          <div className="footerLinksContainer">
            <p className="footerLinkAbout">About</p>
            <p className="footerLinkCareers">Careers</p>
            <p className="footerLinkEvents">Events</p>
            <p className="footerLinkProducts">Products</p>
            <p className="footerLinkSupport">Support</p>
          </div>
        </div>
        <div className="rightFooter">
          <div className="socialMediaLinkContainer">
            <div className="facebookContainer">
              <img className="facebook" src={Facebook} alt="facebook" />
            </div>
            <div className="twitterContainer">
              <img className="twitter" src={Twitter} alt="twitter" />
            </div>
            <div className="pinterestContainer">
              <img className="pinterest" src={Pintrest} alt="pinterest" />
            </div>
            <div className="instagramContainer">
              <img className="instagram" src={Instagram} alt="instagram" />
            </div>
          </div>
          <p className="copyright">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
