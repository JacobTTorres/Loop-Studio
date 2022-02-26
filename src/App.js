import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Leader from "./components/leader/Leader";
import Creations from "./components/creations/Creations";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="appContent">
        <div className="appHeader">
          <Navbar />
          <Header />
        </div>
        <div className="mainContent">
          <Leader />
          <Creations />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
