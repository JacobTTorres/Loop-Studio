import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Leader from "./components/leader/Leader";

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
        </div>
      </div>
    </div>
  );
}

export default App;
