import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar.js";
import Venue from "./Venue.js";
import Home from "./Home.js";
import Packages from "./Packages.js";
import Places from "./Places.js";
import Contact from "./Contact.js";
import {BrowserRouter as Router, Routes , Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path ="/ayushi-singh-task" Component={Home}>
          </Route>
          <Route exact path ="/" Component ={Home}></Route>
          <Route exact path="/venues" Component={Venue}>
          </Route>
          <Route exact path="/packages" Component={Packages}>
          </Route>
          <Route exact path="/places" Component={Places}>
          </Route>
          <Route exact path="/contact" Component={Contact}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
