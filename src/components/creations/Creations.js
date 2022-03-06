import "./creations.css";

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
            <div className="galloryImgEarth">
              <div className="galloryHeader">
                {" "}
                DEEP
                <br />
                EARTH
              </div>
            </div>
            <div className="galloryImgArcade">
              <div className="galloryHeader">NIGHT ARCADE</div>
            </div>
            <div className="galloryImgSoccer">
              <div className="galloryHeader">
                SOCCER <br />
                TEAM VR
              </div>
            </div>
            <div className="galloryImgGrid">
              <div className="galloryHeader">
                THE
                <br />
                GRID
              </div>
            </div>
          </div>
          <div className="bottomGallory">
            <div className="galloryImgAbove">
              <div className="galloryHeader">FROM UP ABOVE VR</div>
            </div>
            <div className="galloryImgBorealis">
              <div className="galloryHeader">POCKET BOREALIS</div>
            </div>
            <div className="galloryImgCuriosity">
              <div className="galloryHeader">THE CURIOSITY</div>
            </div>
            <div className="galloryImgFisheye">
              <div className="galloryHeader">MAKE IT FISHEYE</div>
            </div>
          </div>
          <div className="mobileButtonContainer">
            <button className="creationMobileButton">SEE ALL</button>
          </div>
        </div>
      </div>
    </section>
  );
}
