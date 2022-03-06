import React, {useState} from "react";

import "./navbar.css";
import DropdownMenu from "../dropdownMenu/DropdownMenu"

import Logo from "../../images/logo.svg";
import Menu from "../../images/icon-hamburger.svg";

export default function Navbar() {
  const [dropdownButton, setDropdownButton] = useState(false);

  return (<section className="navbarContainer">
    <div className="navbarContent">
      <div className="headerLogo">
        <img src={Logo} alt="loopstudios" className="logo"/>
      </div>
      <div className="navLinks">
        <p className="navbarLinkAbout">About</p>
        <p className="navbarLinkCareers">Careers</p>
        <p className="navbarLinkEvents">Events</p>
        <p className="navbarLinkProducts">Products</p>
        <p className="navbarLinkSupport">Support</p>
        <div className="menuContainer">
          <button className="menuContent">
            <img src={Menu} alt="menu" className="menu" onClick={() => setDropdownButton(true)} setTrigger={setDropdownButton}/>
            <DropdownMenu trigger={dropdownButton} setTrigger={setDropdownButton}></DropdownMenu>
          </button>
        </div>
      </div>
    </div>
  </section>);
}
