import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DogsList from "./Components/DogsList";
import DogListImages from "./Components/DogListImages";
import GameOne from "./Components/GameOne";
import Homepage from "./Components/Homepage";
//import Homepage from "./Components/Homepage";

function Index() {
  return <Homepage />;
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <nav>
              <Link to="/">Home</Link>

              <Link to="/dogs/">Dogs List</Link>

              <Link to="/game-one/">Game 1</Link>

              <Link to="/game-two/">Game 2</Link>
            </nav>
          </header>
          <main>
            <Route path="/" exact component={Index} />
            <Route path="/dog-breeds/:breed" component={DogListImages} />
            <Route path="/dogs/" component={DogsList} />
            <Route path="/game-one/" component={GameOne} />
            {/* <Route path="/game-two/" component={GameTwo} /> */}
          </main>
          <footer>
            <p></p>
          </footer>
        </Router>
      </div>
    );
  }
}

export default App;
