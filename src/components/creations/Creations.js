import "./creations.css";

import Earth from "../../images/desktop/image-deep-earth.jpg";
import Arcade from "../../images/desktop/image-night-arcade.jpg";
import Soccer from "../../images/desktop/image-soccer-team.jpg";
import Grid from "../../images/desktop/image-grid.jpg";
import Above from "../../images/desktop/image-from-above.jpg";
import Borealis from "../../images/desktop/image-pocket-borealis.jpg";
import Curiosity from "../../images/desktop/image-curiosity.jpg";
import Fisheye from "../../images/desktop/image-fisheye.jpg";

export default function Creations() {
  return (
    <section className="creationContainer">
      <div className="creationContent">
        <div className="creationHeaderContainer">
          <h1 className="creationHeader">OUR CREATIONS</h1>
          <button className="creationButton">SEE ALL</button>
        </div>
        <div className="creationGallory">
          <div className="topGallory">
            <div className="galloryImgEarth">DEEP<br/>EARTH</div>
            <div className="galloryImgArcade">NIGHT ARCADE</div>
            <div className="galloryImgSoccer">SOCCER <br/>TEAM VR</div>
            <div className="galloryImgGrid">THE<br/>GRID</div>
          </div>
          <div className="bottomGallory">
            <div className="galloryImgAbove">FROM UP ABOVE VR</div>
            <div className="galloryImgBorealis">POCKET BOREALIS</div>
            <div className="galloryImgCuriosity">THE CURIOSITY</div>
            <div className="galloryImgFisheye">MAKE IT FISHEYE</div>
          </div>
        </div>
      </div>
    </section>
  );
}
