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
