import "./dropdownMenu.css";

import Logo from "../../images/logo.svg";
import Exit from "../../images/icon-close.svg";

export default function DropdownMenu(props) {
  return props.trigger ? (
    <div className="dropdownContent">
      <div className="dropdownHeader">
        <img src={Logo} alt="" className="dropdownLogo" />
        <div className="closeButton" onClick={() => props.setTrigger(false)}>
          <img src={Exit} alt="exit" className="exit" />
        </div>
      </div>
      <div className="dropdownLinks">
        <p className="downLinks">ABOUT</p>
        <p className="downLinks">CAREERS</p>
        <p className="downLinks">EVENTS</p>
        <p className="downLinks">PRODUCTS</p>
        <p className="downLinks">SUPPORT</p>
      </div>
    </div>
  ) : (
    ""
  );
}
