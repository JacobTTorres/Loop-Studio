import "./leader.css";

import Interactive from "../../images/desktop/image-interactive.jpg";

export default function Leader() {
  return (
    <section className="leaderContainer">
      <div className="leaderContent">
        <div className="leaderBackdrop">
          <img src={Interactive} alt="interactive" className="backdrop" />
        </div>
        <div className="leaderInfoContaienr">
          <h1 className="leaderHeader">THE LEADER IN INTERACTIVE VR</h1>
          <p className="leaderInfo">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects from some of the best companies around the globe.
            Our award-winning creations have transfromed
            <br /> businesses through digital experiences that bind to their
            brand.
          </p>
        </div>
      </div>
    </section>
  );
}
