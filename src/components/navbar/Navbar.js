import "./navbar.css";

import Logo from "../../images/logo.svg";

export default function Navbar() {
  return (
    <section className="navbarContainer">
      <div className="navbarContent">
        <div className="headerLogo">
          <img src={Logo} alt="loopstudios" className="logo" />
        </div>
        <div className="navLinks">
          <p className="navbarLinkAbout">About</p>
          <p className="navbarLinkCareers">Careers</p>
          <p className="navbarLinkEvents">Events</p>
          <p className="navbarLinkProducts">Products</p>
          <p className="navbarLinkSupport">Support</p>
        </div>
      </div>
    </section>
  );
}
